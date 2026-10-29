import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
const cssPath = new URL('../portfolio-font.css', import.meta.url);
const fontDirectory = new URL('../assets/fonts/', import.meta.url);
const css = await readFile(cssPath, 'utf8');
const urls = [...new Set(css.match(/https:\/\/fonts\.alibabadesign\.com\/AlibabaPuHuiTi-2\/[^"\s]+\.woff2/g) || [])];

if (!urls.length) {
  console.log('No remote font URLs remain in portfolio-font.css.');
  process.exit(0);
}

await mkdir(fontDirectory, { recursive: true });
let localized = css;

for (const source of urls) {
  const [, weight, filename] = new URL(source).pathname.match(/\/AlibabaPuHuiTi-2\/([^/]+)\/([^/]+)$/) || [];
  if (!weight || !filename) throw new Error(`Unexpected font URL: ${source}`);
  const output = new URL(`../assets/fonts/${weight}-${filename}`, import.meta.url);

  try {
    await access(output);
  } catch {
    const response = await fetch(source, { headers: { Referer: 'https://www.alibabafonts.com/' } });
    if (!response.ok) throw new Error(`Font download failed: ${response.status} ${source}`);
    await writeFile(output, Buffer.from(await response.arrayBuffer()));
  }

  localized = localized.replaceAll(source, `./assets/fonts/${weight}-${filename}`);
}

await writeFile(cssPath, localized);
console.log(`Localized ${urls.length} official Alibaba PuHuiTi web-font subsets.`);
