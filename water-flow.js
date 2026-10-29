/* Continuous, full-resolution colour fields. No textures or pixelated noise. */
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const surfaces = [];
  let frame = 0;
  let previousTime = 0;
  let lastDraw = 0;
  let elapsed = 0;

  const vertexSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;
  const fragmentSource = `
    precision highp float;
    uniform vec2 resolution;
    uniform float time;
    void main() {
      vec2 uv = gl_FragCoord.xy / resolution;
      float x = uv.x;
      float t = time;
      // Slow independent waves travel sideways without a loop or reversal.
      float swell = sin(x * 5.5 - t * .38) * .075
                  + sin(x * 9.0 + t * .27 + 1.8) * .033;
      float current = sin(x * 3.8 - t * .28 + sin(x * 6.0 + t * .22)) * .045;
      float surface = .20 + swell + current;
      float distance = uv.y - surface;
      float water = 1.0 - smoothstep(-.13, .30, distance);
      vec3 base = vec3(.145, .149, .149);
      float drift = .5 + .5 * sin(x * 4.2 - t * .32 + uv.y * 2.6 + sin(x * 2.3 + t * .15) * .35);
      vec3 fluid = mix(vec3(.17, .30, .66), vec3(.32, .51, .98), drift);
      vec3 colour = mix(base, fluid, water * .96);
      // Broad submerged ribbons give the colour field depth, with soft edges.
      float ribbon = exp(-pow((distance + .075 + sin(x * 5.0 + t * .29) * .032) * 11.0, 2.0));
      vec3 highlight = vec3(.48, .63, .96);
      colour = mix(colour, highlight, ribbon * .19 * water);
      gl_FragColor = vec4(colour, 1.0);
    }
  `;

  function schedule() {
    if (!frame && !document.hidden && surfaces.some(item => item.visible && !item.lost)) {
      frame = requestAnimationFrame(draw);
    }
  }

  function draw(timestamp) {
    frame = 0;
    if (document.hidden) { previousTime = 0; return; }
    if (!motion.matches && lastDraw && timestamp - lastDraw < 25) { schedule(); return; }
    lastDraw = timestamp;
    if (previousTime && !motion.matches) elapsed += Math.min((timestamp - previousTime) / 1000, .1);
    previousTime = timestamp;
    surfaces.forEach(item => {
      if (!item.visible || item.lost || !item.canvas.width || !item.canvas.height) return;
      const { gl, canvas, uniforms } = item;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform1f(uniforms.time, motion.matches ? 0 : elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    });
    if (!motion.matches) schedule();
    if (!frame) previousTime = 0;
  }

  function mount(host) {
    if (!host) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'fluid-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false });
    if (!gl) return; // The CSS gradient remains available as a static fallback.
    function shader(type, source) {
      const result = gl.createShader(type);
      gl.shaderSource(result, source);
      gl.compileShader(result);
      if (!gl.getShaderParameter(result, gl.COMPILE_STATUS)) {
        gl.deleteShader(result);
        throw new Error('Fluid shader unavailable');
      }
      return result;
    }
    try {
      const program = gl.createProgram();
      const vertex = shader(gl.VERTEX_SHADER, vertexSource);
      const fragment = shader(gl.FRAGMENT_SHADER, fragmentSource);
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('Fluid program unavailable');
      gl.useProgram(program);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
      const uniforms = {
        resolution: gl.getUniformLocation(program, 'resolution'),
        time: gl.getUniformLocation(program, 'time'),
      };
      const item = { canvas, gl, uniforms, visible: false, lost: false };
      surfaces.push(item);
      host.prepend(canvas);
      new ResizeObserver(() => {
        const rect = host.getBoundingClientRect();
        const density = Math.min(devicePixelRatio || 1, 1.5);
        const width = Math.round(rect.width * density);
        const height = Math.round(rect.height * density);
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
        schedule();
      }).observe(host);
      const visibleCovers = new Set();
      const coverObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visibleCovers.add(entry.target);
          else visibleCovers.delete(entry.target);
        });
        item.visible = visibleCovers.size > 0;
        schedule();
      });
      document.querySelectorAll('.hero, .archive-heading').forEach(cover => coverObserver.observe(cover));
      canvas.addEventListener('webglcontextlost', () => {
        item.lost = true;
        canvas.remove();
      });
    } catch {
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  }

  mount(document.querySelector('.site-background'));
  document.addEventListener('visibilitychange', () => { previousTime = 0; lastDraw = 0; schedule(); });
  motion.addEventListener('change', () => { previousTime = 0; lastDraw = 0; schedule(); });
})();
