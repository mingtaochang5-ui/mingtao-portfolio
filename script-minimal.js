// Text and page references are drawn from the supplied portfolio.
const categories = [
  {
    id: 'collection', label: '产品系列开发', english: 'PRODUCT COLLECTIONS',
    summary: '围绕品牌 IP，建立企业激励、品牌礼赠与阅读文创的系列产品。让同一视觉语言进入办公、学习、礼赠与日常生活。',
    facts: [['覆盖方向', '企业激励 / 品牌运营 / 产品体验延展'], ['开发环节', '产品规划 / 视觉设计 / 工艺打样 / 生产协同']],
    story: [['系列逻辑', '以品牌角色为核心，按使用场景组织商品矩阵。既保持 IP 的统一识别，也通过不同角色、材质与互动结构形成系列差异。'], ['开发落地', '从 V1—V8 成长奖励、节日礼赠到阅读陪伴，持续将设计转化为可使用、可收藏的实体产品。']],
    pages: [[6, '企业激励 · 领航计划'], [12, '品牌礼赠与用户运营商品'], [21, '阅读文创 · 产品体验延展'], [27, '多品类产品开发实践']],
  },
  {
    id: 'product', label: '产品设计', english: 'PRODUCT DESIGN',
    summary: '面向儿童学习场景，将抽象的知识关系转化为看得见、能操作的产品体验，覆盖自然拼读、双语阅读与编程启蒙。',
    facts: [['使用场景', '拼读学习 / 多阶段阅读 / 编程启蒙'], ['设计方向', '学习逻辑转译 / 礼盒结构 / 视觉体验']],
    story: [['从内容到体验', '先拆解学习中的理解门槛，再通过字母 IP、可动组件、实体搭建与即时反馈，建立知识与操作之间的关联。'], ['持续使用', '结合阶段打卡、学习奖状与配套文创，让产品从单次开盒延伸至更长期的学习陪伴。']],
    pages: [[29, '超级自然拼读'], [34, '双语阅读学习礼盒升级'], [38, '猿编程系统班礼盒'], [42, '其他礼盒 · 满分英语大通关']],
  },
  {
    id: 'visual', label: '品牌视觉设计', english: 'BRAND VISUAL DESIGN',
    summary: '从活动传播、城市插画到传统节日创作，提炼主题中的识别元素，构建能跨场景延展的视觉语言。',
    facts: [['项目类型', '招聘活动 / 教材封面 / 节日视觉'], ['输出形式', '主视觉 / 插画 / 线上线下物料']],
    story: [['统一与延展', '以主视觉建立识别，再针对公众号、详情页、线下易拉宝及教材封面调整信息层级与构图。'], ['文化转译', '从地域建筑与传统节日中提取符号、情绪和色彩，以插画语言形成具有故事感的当代表达。']],
    pages: [[45, '校园招聘 · 活动主视觉'], [48, '城市主题 KV'], [50, '传统文化视觉探索']],
  },
  {
    id: 'workflow', label: '设计流程', english: 'DESIGN WORKFLOW',
    summary: '把 AIGC 探索、版式规范与关键词管理融入日常设计，提升效率并沉淀可复用方法。',
    facts: [['工作方向', '封面视觉系统 / 高频物料 / Prompt 管理'], ['设计原则', '策略先行 / 分层处理 / 人工视觉控制']],
    story: [['建立流程', '围绕受众和系列风格，结合 AI 探索与版式控制，形成统一、可复用的视觉流程。'], ['沉淀资产', '将高频需求整理为模板，并把 Prompt 与案例关联，便于后续检索复用。']],
    pages: [[56, 'AIGC 封面视觉系统'], [59, '高频物料设计流程优化'], [61, '关键词管理工具开发']],
  },
];

const projects = [
  {
    title: '领航计划 · 水手分', category: 'collection',
    summary: '围绕企业销售激励体系，以“领航计划”为主题，结合品牌 IP 雪球，建立从 V1 至 V8 的成长奖励机制。',
    facts: [['项目时间', '2025'], ['负责内容', '产品规划 / 商品设计 / 包装设计 / 打样跟进 / 宣传效果图']],
    story: [['设计策略', '通过职业形象与等级服饰呈现成长路径，在保持品牌识别的同时，增加系列商品的收藏价值、荣誉感与参与感。'], ['开发落地', '商品覆盖毛绒、单肩包、T 恤、亚克力挂件、野餐垫与贴纸等。从设计输出、印刷文件、打样确认到细节调整，推进最终交付。']],
    pages: [[6, '项目背景与产品主视觉'], [7, 'V1—V8 产品规划'], [8, '角色与商品设计'], [9, '多场景商品矩阵'], [10, '设计、打样与工艺落地'], [11, '系列产品展示']],
  },
  {
    title: '品牌礼赠与用户运营商品', category: 'collection',
    summary: '面向企业礼赠与用户运营两类场景，以品牌 IP 连接节日活动、积分兑换与日常使用。',
    facts: [['商品方向', '2026 日历 / 明信片 / 端午礼盒 / 积分商城'], ['使用场景', '办公展示 / 节日礼赠 / 儿童学习 / 日常生活']],
    story: [['企业礼赠', '将 IP 融入月份主题，开发日历并延展为明信片；端午礼盒结合品牌智慧绿、节日图形与带磁吸配件的 IP 手办，强化节日记忆与收藏体验。'], ['用户运营', '围绕学习、生活与品牌互动构建兑换商品矩阵，开发尺子、铅笔、笔袋、零钱包等，并通过 IP 图库统一视觉表达。']],
    pages: [[12, '品牌礼赠与运营商品总览'], [13, '双线商品体系'], [14, '2026 日历'], [15, '日历与明信片延展'], [16, '端午礼盒视觉设计'], [17, 'IP 手办与磁吸配件'], [18, '积分商城产品矩阵'], [19, 'IP 图库搭建'], [20, '文具商品展示']],
  },
  {
    title: '阅读文创与续报激励', category: 'collection',
    summary: '将阅读内容与故事 IP 转化为可使用的周边，让书籍中的角色进入阅读记录、互动、收藏与学习奖励场景。',
    facts: [['产品类型', '便笺本 / 亚克力夹子 / 人物徽章 / 旋转冰箱贴'], ['体验方向', '阅读陪伴 / 完成激励 / 日常使用']],
    story: [['阅读陪伴', '《我要大蜥蜴》便笺本结合故事角色与雪球 IP，以彩色分页支持记录；《昆虫记》夹子提取典型昆虫形象，用于书页标记与整理。'], ['互动与成就', '通过《欧·亨利》人物徽章、《西游记》旋转冰箱贴与字母人金属烤漆徽章，把阅读与学习成果转化为可展示、可收集的纪念物。']],
    pages: [[21, '阅读文创系列总览'], [22, '阅读陪伴型文创'], [23, '人物徽章与互动冰箱贴'], [24, '系统应用与文创价值'], [25, '续报激励徽章'], [26, '学习成就可视化']],
  },
  {
    title: '超级自然拼读', category: 'product',
    summary: '一套面向儿童的系统化自然拼读学习产品，通过 26 字母 IP 与可动结构，让字母、发音和拼读关系变得可见、可操作。',
    facts: [['项目时间', '2025'], ['设计内容', '字母 IP 系统 / 拼读组件 / 学习组件 / 礼盒结构']],
    story: [['学习难点', '字母是抽象符号，发音规则难记，拼读过程也难以被看见。设计从这三类理解门槛出发，拆解知识与操作之间的关系。'], ['设计转译', '通过动作、表情与颜色区分发音特征，再以字母角色和拼读组件建立可视关联，使孩子在互动过程中理解拼读规则。']],
    pages: [[29, '产品主视觉'], [30, '学习难点拆解'], [31, '字母、发音与拼读的转译逻辑'], [32, '26 字母 IP 系统'], [33, '学习组件与产品形态']],
  },
  {
    title: '双语阅读学习礼盒升级', category: 'product',
    summary: '在原有阅读产品基础上，围绕多阶段使用、学习反馈与视觉风格，推动礼盒从 1.0 迭代至 2.0。',
    facts: [['项目时间', '2024'], ['升级方向', '多阶段适配 / 学习打卡 / 视觉体系']],
    story: [['问题与策略', '原产品以单一年级为核心，缺乏清晰的阶段记录，视觉风格也偏低龄。通过版式与信息层级调整、奖状与单元打卡、IP 贴纸，支持更长期的阅读使用。'], ['视觉与反馈', '整体转向更克制的配色与手绘插画体系。作品集记录上线首月销量突破 3,000 套、续报目标完成 120%、用户日均使用时长 28 分钟，数据来自产品后台与阶段性运营反馈。']],
    pages: [[34, '2.0 礼盒整体展示'], [35, '问题归纳与升级策略'], [36, '1.0 与 2.0 视觉对比'], [37, '项目总结与阶段性反馈']],
  },
  {
    title: '猿编程系统班礼盒', category: 'product',
    summary: '以“动手搭建 + 设备连接 + 游戏控制”的方式，引导儿童在真实操作中理解基础编程流程。',
    facts: [['项目时间', '2022'], ['体验链路', '实体搭建 / 控制器连接 / 操作指令 / 游戏反馈']],
    story: [['设计切入点', '针对编程启蒙停留在屏幕操作、指令与结果关联不直观的问题，引入实体搭建与物理操作，以游戏化视觉提高学习兴趣。'], ['逻辑可视化', '将手工装置连接至小猿板控制器，通过击鼓、移动与滑雪游戏呈现“操作—指令—反馈”的完整链路，帮助儿童在即时反馈中理解编程。']],
    pages: [[38, '系统班礼盒主视觉'], [39, '项目背景与体验路径'], [40, '输入、控制与反馈'], [41, '装置连接与游戏应用']],
  },
  {
    title: '其他礼盒设计', category: 'product',
    summary: '收录满分英语大通关与个人 IP 产品，展示学习内容和角色形象在不同礼盒中的应用。',
    facts: [['收录内容', '满分英语大通关 / 个人 IP 产品'], ['展示重点', '产品组合 / 礼盒视觉 / IP 延展']],
    story: [['产品展示', '以完整产品组合呈现包装、配套内容与角色形象之间的关系，探索不同主题下的视觉表达。']],
    pages: [[42, '满分英语大通关'], [43, '个人 IP 产品']],
  },
  {
    title: '校园招聘活动视觉', category: 'visual',
    summary: '为校园招聘建立统一的活动主视觉，并延展到公众号、招聘详情页与线下易拉宝，保持不同媒介中的信息一致性。',
    facts: [['项目时间', '2022'], ['应用载体', '主视觉 / 公众号 / 招聘详情页 / 易拉宝']],
    story: [['线上信息', '拆解并重组主视觉元素，对公司介绍、招聘对象、岗位、面试流程及投递方式进行分层，让传播识别与信息阅读相互配合。'], ['线下延展', '针对校园宣讲与展会，对主视觉进行空间化重构，支持远距离识别。作品集记录公众号上线后对比往期阅读量提升 120%。']],
    pages: [[45, '校园招聘主视觉'], [46, '公众号与详情页延展'], [47, '易拉宝与线下场景应用']],
  },
  {
    title: '城市主题 KV', category: 'visual',
    summary: '为拉新礼盒教材封面创作城市主题插画，以标志性建筑区分内容，建立具有地域识别的系列视觉。',
    facts: [['项目时间', '2024'], ['应用方向', '礼盒教材封面 / 系列物料延展']],
    story: [['创作过程', '以城市标志性建筑为基础进行视觉重组，结合中国风元素统一表达，依次完成草图、线稿、黑白效果与成稿优化。'], ['系列应用', '让建筑元素成为内容区分标识，在统一风格下支持教材体系与后续物料的延展。']],
    pages: [[48, '城市建筑主题插画'], [49, '从草图到成稿的创作过程']],
  },
  {
    title: '传统文化视觉探索', category: 'visual',
    summary: '围绕元宵、七夕与中秋，提取节日文化符号和情感内核，将传统意象转化为符合当代审美的插画表达。',
    facts: [['创作时间', '2024'], ['主题方向', '元宵灯会 / 七夕星河 / 中秋团圆']],
    story: [['元素提取', '元宵围绕花灯、团圆与民俗活动建立热闹场景；七夕结合鹊桥、星河与东方色彩，呈现相聚与浪漫。'], ['视觉表达', '中秋以月亮、玉兔与赏月为线索，结合东方意境与插画语言，探索温暖、具有收藏感的节庆画面。']],
    pages: [[50, '传统文化主题总览'], [51, '文化转译与创作背景'], [52, '元宵 · 灯会与团圆'], [53, '七夕 · 星河与相聚'], [54, '中秋 · 月圆与东方意境']],
  },
  {
    title: 'AIGC 封面视觉系统', category: 'workflow',
    summary: '从视觉策略到 AI 探索与版式控制，建立由设计师把关的系列封面流程。',
    facts: [['项目时间', '2026'], ['流程环节', '策略定义 / 视觉生成 / 视觉控制']],
    story: [['策略与生成', '明确受众与系列风格，结合 AI 探索和方案筛选，形成统一的封面视觉。'], ['版式控制', '规范标题、插画与信息区，保证系列统一、信息清晰。']],
    pages: [[56, '系列封面成品展示'], [57, '视觉策略与生成流程'], [58, '版面规范与视觉控制']],
  },
  {
    title: '设计流程优化', category: 'workflow',
    summary: '针对 KT 板等零散、高频的基础物料，按需求复杂度建立分层设计流程，减少重复制作与沟通成本。',
    facts: [['项目时间', '2026'], ['应用方式', '标准化模板 / AIGC 辅助 / 设计师整理']],
    story: [['分层处理', '信息较少的简单物料，通过标准化工作流结合 AIGC 快速生成；信息较多的复杂物料，先生成统一风格的背景与元素，再由设计师整理文案与版式。'], ['应用效果', '作品集中的单项物料制作对比为手动约 30 分钟、工作流辅助约 5 分钟。通过模板复用，在提升效率的同时保持多项目物料的视觉统一。']],
    pages: [[59, '需求拆解与分层解决方式'], [60, '流程应用与效率对比']],
  },
  {
    title: '关键词沉淀库', category: 'workflow',
    summary: '基于日常 Prompt 分散、模型差异与复用效率低的问题，通过 Codex 辅助开发个人关键词管理工具。',
    facts: [['项目时间', '2026'], ['核心功能', '案例卡片 / 标签分类 / Prompt 复制编辑']],
    story: [['从需求到工具', '从设计痛点分析与功能规划出发，借助 AI 完成页面结构、功能逻辑与数据管理，再结合使用习惯调整卡片浏览、翻转查看和标签筛选。'], ['资产沉淀', '将图片案例与关键词关联，在真实项目中持续补充，逐步建立个人设计知识库。团队共享、项目分组与关键词推荐仍属于后续规划。']],
    pages: [[61, '工具背景与核心功能'], [62, '开发过程与后续规划']],
  },
];

const aboutPage = document.querySelector('#aboutPage');
const workPage = document.querySelector('#workPage');
const viewLinks = [...document.querySelectorAll('.main-nav [data-view]')];
const categoryLinks = [...document.querySelectorAll('.folder-tab-link')];
const menuButton = document.querySelector('.brand-menu-button');
const siteMenu = document.querySelector('#siteMenu');
const dialog = document.querySelector('#projectDialog');
const detailTitle = document.querySelector('#detailTitle');
const detailIndex = document.querySelector('#detailIndex');
const detailDescription = document.querySelector('#detailDescription');
const detailCategoryLabel = document.querySelector('#detailCategoryLabel');
const detailFacts = document.querySelector('#detailFacts');
const detailStory = document.querySelector('#detailStory');
const detailProjects = document.querySelector('#detailProjects');
const detailGallery = document.querySelector('#detailGallery');
const imageDialog = document.querySelector('#imageDialog');
const expandedImage = document.querySelector('#expandedImage');
const imageCaption = document.querySelector('#imageCaption');
const theme = document.querySelector('meta[name="theme-color"]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const archiveHeading = workPage.querySelector('.archive-heading');
let currentView = 'about';
let viewReady = false;
let coverTransitionSerial = 0;
let coverAnimations = [];
let coverOverlay = null;
let detailCategory = 0;
let detailProject = null;
let menuCloseTimer = 0;
let pageStepLocked = false;
const previewPages = {
  collection: [5, 12, 21], product: [29, 34, 38, 42],
  visual: [45, 48, 50], workflow: [56, 59, 61],
};
const portfolioPageSrc = (page) => `./assets/portfolio/hd/page-${String(page).padStart(2, '0')}${page === 61 ? '-revised' : ''}.jpg`;
const previewPositions = new Map();

if (!reducedMotion.matches) {
  document.documentElement.classList.add('motion-ready');
  const motionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
  document.querySelectorAll('.archive-heading, .work-entry, .profile-section, .contact-intro, .contact-methods').forEach((section) => {
    section.classList.add('motion-reveal');
    motionObserver.observe(section);
  });
  document.querySelectorAll('.project-index-list, .experience-list').forEach((list) => {
    list.classList.add('motion-stagger');
    motionObserver.observe(list);
  });
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function watchImage(img) {
  let attempts = 0;
  img.addEventListener('load', () => {
    attempts = 0;
    img.closest('.detail-figure')?.classList.remove('image-unavailable');
  });
  const retry = () => {
    if (!img.isConnected) return;
    if (attempts >= 2) {
      img.closest('.detail-figure')?.classList.add('image-unavailable');
      return;
    }
    attempts += 1;
    window.setTimeout(() => {
      if (!img.isConnected) return;
      const url = new URL(img.src);
      url.searchParams.set('retry', `${attempts}-${Date.now()}`);
      img.src = url.href;
    }, attempts * 450);
  };
  img.addEventListener('error', retry);
  if (img.complete && !img.naturalWidth) retry();
  return () => {
    attempts = 0;
    img.closest('.detail-figure')?.classList.remove('image-unavailable');
    const url = new URL(img.src);
    url.searchParams.set('retry', `manual-${Date.now()}`);
    img.src = url.href;
  };
}

document.querySelectorAll('.project-preview img').forEach(watchImage);

function scrollToTarget(target) {
  if (target.matches('.work-entry')) {
    const entries = [...workPage.querySelectorAll('.work-entry')];
    const index = entries.indexOf(target);
    const listTop = workPage.querySelector('.work-list').getBoundingClientRect().top + window.scrollY;
    const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
    const precedingHeight = entries.slice(0, index).reduce((total, entry) => total + entry.getBoundingClientRect().height, 0);
    const depth = parseFloat(getComputedStyle(target).getPropertyValue('--stack-depth')) || 0;
    const pageTop = listTop + precedingHeight;
    window.scrollTo({
      top: Math.max(0, pageTop - headerHeight - depth),
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
    });
    return;
  }
  target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
}

// One damped trajectory keeps every text group in phase, with a tiny soft overshoot.
function softCoverFrames(distance, axis = 'X') {
  const damping = .88;
  const frequency = 14;
  const damped = frequency * Math.sqrt(1 - damping * damping);
  const displacement = time => Math.exp(-damping * frequency * time)
    * (Math.cos(damped * time) + damping * frequency / damped * Math.sin(damped * time));
  const end = displacement(1);
  return Array.from({ length: 91 }, (_, index) => {
    const offset = index / 90;
    const remaining = (displacement(offset) - end) / (1 - end);
    return { offset, transform: `translate${axis}(${distance * remaining}px)` };
  });
}

function clearCoverTransition() {
  coverAnimations.forEach(animation => animation.cancel());
  coverAnimations = [];
  coverOverlay?.remove();
  coverOverlay = null;
}

function showView(view, animateCover = false) {
  const update = () => {
    currentView = view;
    const showWork = view === 'work';
    if (showWork) {
      const archiveCover = workPage.querySelector('.archive-heading');
      archiveCover.classList.remove('motion-reveal');
      archiveCover.classList.add('is-visible');
    }
    aboutPage.hidden = showWork;
    workPage.hidden = !showWork;
    document.body.dataset.view = view;
    document.documentElement.dataset.view = view;
    theme.content = '#252626';
    viewLinks.forEach((link) => {
      if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  if (currentView === view || !viewReady || reducedMotion.matches || !animateCover) {
    if (currentView !== view) {
      ++coverTransitionSerial;
      clearCoverTransition();
    }
    update();
    return;
  }

  ++coverTransitionSerial;
  clearCoverTransition();
  const serial = coverTransitionSerial;
  const oldCover = currentView === 'work'
    ? workPage.querySelector('.archive-heading') : aboutPage.querySelector('.hero');
  const rect = oldCover.getBoundingClientRect();
  const oldText = currentView === 'work'
    ? ['h1', '.archive-foot'] : ['.name-title', '.hero-bottom', '.hero-foot'];
  const overlay = oldCover.cloneNode(true);
  overlay.classList.remove('motion-reveal');
  overlay.classList.add('cover-transition-overlay');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.inert = true;
  Object.assign(overlay.style, {
    position: 'fixed', top: `${rect.top}px`, left: `${rect.left}px`,
    width: `${rect.width}px`, height: `${rect.height}px`, margin: '0',
  });
  document.body.append(overlay);
  coverOverlay = overlay;
  update();
  const incoming = view === 'work'
    ? [workPage.querySelector('.archive-heading h1'), workPage.querySelector('.archive-foot')]
    : [aboutPage.querySelector('.name-title'), aboutPage.querySelector('.hero-bottom'), aboutPage.querySelector('.hero-foot')];
  const distance = window.innerWidth * 1.1 * (view === 'work' ? 1 : -1);
  const exitDistance = view === 'work' ? '-110vw' : '110vw';
  const easing = 'cubic-bezier(.65, 0, .25, 1)';
  coverAnimations = [
    ...oldText.map(selector => overlay.querySelector(selector)).filter(Boolean).map(node =>
      node.animate([{ transform: 'translateX(0)' }, { transform: `translateX(${exitDistance})` }],
        { duration: 360, easing, fill: 'both' })),
    ...incoming.filter(Boolean).map(node => node.animate(softCoverFrames(distance), {
      duration: 980, delay: 170, easing: 'linear', fill: 'both',
    })),
  ];
  Promise.allSettled(coverAnimations.map(animation => animation.finished)).then(() => {
    if (serial === coverTransitionSerial) clearCoverTransition();
  });
}

function setCategory(id) {
  const currentIndex = categories.findIndex(category => category.id === id);
  categoryLinks.forEach((link) => {
    if (link.hash === `#work-${id}`) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
  workPage.querySelectorAll('.work-entry').forEach((entry, index) => {
    entry.classList.toggle('is-stacked', index < currentIndex);
    entry.classList.toggle('is-current', index === currentIndex);
    entry.classList.toggle('is-upcoming', index > currentIndex);
  });
}

function route() {
  const hash = window.location.hash;
  if (hash === '#thanks') {
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}#work-workflow`);
    route();
    return;
  }
  const coverRoute = !hash || hash === '#about' || hash === '#portfolio' || hash === '#top';
  if (coverRoute) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    archiveHeading.style.removeProperty('--archive-exit');
  }
  if (hash === '#portfolio' || hash.startsWith('#work-')) showView('work', coverRoute);
  else if (!hash || hash === '#about' || hash === '#profile') showView('about', coverRoute);

  if (coverRoute) {
    if (hash === '#portfolio') setCategory(categories[0].id);
    return;
  }
  const target = document.getElementById(hash.slice(1));
  if (target) {
    if (hash.startsWith('#work-')) setCategory(hash.slice(6));
    requestAnimationFrame(() => scrollToTarget(target));
  }
}

window.addEventListener('hashchange', route);
function closeSiteMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开网站导航');
  siteMenu.setAttribute('aria-hidden', 'true');
  siteMenu.inert = true;
  siteMenu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  window.clearTimeout(menuCloseTimer);
  menuCloseTimer = window.setTimeout(() => { siteMenu.hidden = true; }, 340);
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭网站导航' : '打开网站导航');
  if (open) {
    window.clearTimeout(menuCloseTimer);
    siteMenu.hidden = false;
    siteMenu.inert = false;
    siteMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
    requestAnimationFrame(() => siteMenu.classList.add('is-open'));
  } else closeSiteMenu();
});
siteMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeSiteMenu();
});
document.addEventListener('pointerdown', (event) => {
  if (menuButton.getAttribute('aria-expanded') === 'true' && !event.target.closest('.brand-menu-button, .site-menu')) closeSiteMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeSiteMenu();
});
// A repeated click should also scroll home when its hash is already active.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.hash === window.location.hash) {
      event.preventDefault();
      route();
    }
  });
});

let categoryFrame = 0;
function updateArchiveScroll() {
  if (currentView !== 'work' || reducedMotion.matches) return;
  const progress = Math.min(1, Math.max(0, -archiveHeading.getBoundingClientRect().top / archiveHeading.offsetHeight));
  archiveHeading.style.setProperty('--archive-exit', `${Math.round(progress * window.innerWidth * -.62)}px`);
}
window.addEventListener('scroll', () => {
  if (currentView !== 'work' || categoryFrame) return;
  categoryFrame = requestAnimationFrame(() => {
    categoryFrame = 0;
    updateArchiveScroll();
    const entries = [...workPage.querySelectorAll('.work-entry')];
    const headerHeight = document.querySelector('.site-header').offsetHeight;
    let pageTop = workPage.querySelector('.work-list').getBoundingClientRect().top + window.scrollY;
    let currentIndex = 0;
    entries.forEach((entry, index) => {
      const depth = parseFloat(getComputedStyle(entry).getPropertyValue('--stack-depth')) || 0;
      if (window.scrollY + 3 >= pageTop - headerHeight - depth) currentIndex = index;
      pageTop += entry.getBoundingClientRect().height;
    });
    setCategory(categories[currentIndex].id);
  });
}, { passive: true });

window.setInterval(async () => {
  if (document.hidden || reducedMotion.matches || currentView !== 'work' || dialog.open || imageDialog.open) return;
  const entry = workPage.querySelector('.work-entry.is-current');
  if (!entry || entry.getBoundingClientRect().top >= window.innerHeight || entry.getBoundingClientRect().bottom <= 0) return;
  const index = entry.querySelector('.project-index');
  if (index.matches(':hover, :focus-within')) return;
  const id = entry.id.slice(5);
  const pages = previewPages[id];
  const next = ((previewPositions.get(id) || 0) + 1) % pages.length;
  const img = index.querySelector('.project-preview img');
  const label = index.querySelector('.project-preview-caption');
  const project = projects.filter(item => item.category === id)[next];
  const nextImage = new Image();
  nextImage.src = portfolioPageSrc(pages[next]);
  try { await nextImage.decode(); } catch { return; }
  if (currentView !== 'work' || !entry.classList.contains('is-current') || index.matches(':hover, :focus-within')) return;
  const exit = img.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180, fill: 'forwards' });
  await exit.finished.catch(() => {});
  exit.cancel();
  img.src = nextImage.src;
  label.textContent = `${String(next + 1).padStart(2, '0')} / ${project.title}`;
  img.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, easing: 'ease-out' });
  previewPositions.set(id, next);
}, 3800);

function stepWorkPage(direction) {
  if (currentView !== 'work' || dialog.open || imageDialog.open || pageStepLocked) return;
  const pages = [workPage.querySelector('.archive-heading'), ...document.querySelectorAll('.work-entry'), document.querySelector('.contact-section')].filter(Boolean);
  const headerHeight = document.querySelector('.site-header').getBoundingClientRect().height;
  const entries = [...workPage.querySelectorAll('.work-entry')];
  const listTop = workPage.querySelector('.work-list').getBoundingClientRect().top + window.scrollY;
  const targets = pages.map((page, index) => {
    const entryIndex = entries.indexOf(page);
    const precedingHeight = entryIndex >= 0
      ? entries.slice(0, entryIndex).reduce((total, entry) => total + entry.getBoundingClientRect().height, 0)
      : 0;
    const depth = entryIndex >= 0 ? parseFloat(getComputedStyle(page).getPropertyValue('--stack-depth')) || 0 : 0;
    const pageTop = entryIndex >= 0
      ? listTop + precedingHeight
      : page.getBoundingClientRect().top + window.scrollY;
    if (entryIndex < 0) return index === 0 ? Math.max(0, pageTop) : Math.max(0, pageTop - headerHeight);
    return Math.max(0, pageTop - headerHeight - depth);
  });
  const current = targets.reduce((closest, target, index) => Math.abs(target - window.scrollY) < Math.abs(targets[closest] - window.scrollY) ? index : closest, 0);
  const next = Math.max(0, Math.min(pages.length - 1, current + direction));
  if (next === current) return;
  pageStepLocked = true;
  window.scrollTo({ top: targets[next], behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  window.setTimeout(() => { pageStepLocked = false; }, reducedMotion.matches ? 80 : 720);
}

window.addEventListener('wheel', (event) => {
  if (Math.abs(event.deltaY) < Math.abs(event.deltaX) || Math.abs(event.deltaY) < 12) return;
  if (currentView !== 'work' || dialog.open || imageDialog.open) return;
  event.preventDefault();
  stepWorkPage(event.deltaY > 0 ? 1 : -1);
}, { passive: false });

let touchStartY = 0;
window.addEventListener('touchstart', (event) => { touchStartY = event.touches[0]?.clientY || 0; }, { passive: true });
window.addEventListener('touchend', (event) => {
  const delta = touchStartY - (event.changedTouches[0]?.clientY || touchStartY);
  if (Math.abs(delta) > 48) stepWorkPage(delta > 0 ? 1 : -1);
}, { passive: true });

window.addEventListener('keydown', (event) => {
  if (currentView !== 'work' || event.altKey || event.ctrlKey || event.metaKey || dialog.open || imageDialog.open) return;
  if (['PageDown', 'ArrowDown', ' '].includes(event.key)) {
    event.preventDefault();
    stepWorkPage(1);
  } else if (['PageUp', 'ArrowUp'].includes(event.key)) {
    event.preventDefault();
    stepWorkPage(-1);
  }
});

function renderDetail(index, project = null) {
  detailCategory = index;
  detailProject = project;
  const category = categories[index];
  const content = project || category;
  const siblings = projects.filter(item => item.category === category.id);
  detailTitle.textContent = project?.title || category.label;
  detailCategoryLabel.textContent = project ? category.label : category.english;
  detailDescription.textContent = content.summary;
  detailIndex.textContent = `${String(index + 1).padStart(2, '0')} / 04`;
  detailFacts.replaceChildren();
  content.facts.forEach(([label, value]) => {
    const row = element('div');
    row.append(element('dt', '', label), element('dd', '', value));
    detailFacts.append(row);
  });
  detailStory.replaceChildren();
  detailProjects.replaceChildren(element('h3', '', '本章项目'));
  siblings.forEach((item, order) => {
    const button = element('button', 'detail-project-link');
    button.type = 'button';
    if (item === project) button.setAttribute('aria-current', 'true');
    button.append(element('span', '', String(order + 1).padStart(2, '0')), element('span', '', item.title), element('span', '', '↗'));
    button.addEventListener('click', () => { renderDetail(index, item); detailTitle.focus({ preventScroll: true }); });
    detailProjects.append(button);
  });
  detailTitle.tabIndex = -1;
  detailGallery.replaceChildren();
  content.pages.forEach(([page, caption], order) => {
    const figure = element('figure', 'detail-figure');
    const button = element('button', 'detail-image-button');
    button.type = 'button';
    button.setAttribute('aria-label', `放大查看：${caption}`);
    const img = element('img');
    img.src = portfolioPageSrc(page);
    img.alt = caption;
    img.width = 2400;
    img.height = [28, 44, 55].includes(page) ? 500 : 1350;
    img.loading = order < 2 ? 'eager' : 'lazy';
    img.decoding = 'async';
    button.append(img, element('span', 'image-zoom-hint', '放大'));
    button.addEventListener('click', () => {
      if (!img.naturalWidth) {
        retryImage();
        return;
      }
      expandedImage.src = img.src;
      expandedImage.alt = caption;
      imageCaption.textContent = caption;
      imageDialog.showModal();
    });
    const figcaption = element('figcaption');
    figcaption.append(element('span', '', `${String(order + 1).padStart(2, '0')} / ${caption}`), element('span', '', `PDF ${String(page).padStart(2, '0')}`));
    figure.append(button, figcaption);
    detailGallery.append(figure);
    const retryImage = watchImage(img);
  });
  const isLastDetail = project ? project === projects.at(-1) : index === categories.length - 1;
  document.querySelector('.detail-next-label').textContent = isLastDetail ? '返回设计流程封面' : project ? '下一个项目' : '下一板块';
  document.querySelector('.detail-meta').scrollTop = 0;
  dialog.scrollTo({ top: 0, behavior: 'instant' });
}

document.querySelectorAll('.project-card, .project-index-button').forEach((card) => {
  card.addEventListener('click', () => {
    const project = projects.find(item => item.title === card.dataset.projectTitle) || null;
    renderDetail(categories.findIndex((category) => category.id === card.dataset.category), project);
    document.body.classList.add('detail-open');
    dialog.showModal();
  });
});

let detailClosing = false;
function closeDetail() {
  if (!dialog.open || detailClosing) return;
  if (reducedMotion.matches) { dialog.close(); return; }
  detailClosing = true;
  const slide = dialog.animate([
    { transform: getComputedStyle(dialog).transform },
    { transform: 'translate3d(100%, 0, 0)' },
  ], { duration: 420, easing: 'cubic-bezier(.55, 0, .25, 1)' });
  slide.addEventListener('finish', () => dialog.close(), { once: true });
}
document.querySelector('.detail-close').addEventListener('click', closeDetail);
dialog.addEventListener('cancel', (event) => { event.preventDefault(); closeDetail(); });
dialog.addEventListener('close', () => {
  detailClosing = false;
  document.body.classList.remove('detail-open');
});
document.querySelector('.detail-next').addEventListener('click', () => {
  if (detailProject === projects.at(-1) || (!detailProject && detailCategory === categories.length - 1)) {
    dialog.addEventListener('close', () => { window.location.hash = 'work-workflow'; }, { once: true });
    closeDetail();
    return;
  }
  if (detailProject) {
    const nextProject = projects[projects.indexOf(detailProject) + 1];
    renderDetail(categories.findIndex(category => category.id === nextProject.category), nextProject);
  } else renderDetail(detailCategory + 1);
  document.querySelector('.detail-close').focus({ preventScroll: true });
});
let detailStepAt = 0;
dialog.addEventListener('wheel', (event) => {
  if (event.target.closest('.detail-meta') || event.deltaY <= 30 || Date.now() - detailStepAt < 900) return;
  if (dialog.scrollTop + dialog.clientHeight < dialog.scrollHeight - 12) return;
  event.preventDefault();
  detailStepAt = Date.now();
  document.querySelector('.detail-next').click();
}, { passive: false });

let detailTouchStartY = 0;
dialog.addEventListener('touchstart', (event) => {
  detailTouchStartY = event.touches[0]?.clientY ?? 0;
}, { passive: true });
dialog.addEventListener('touchend', (event) => {
  const lastDetail = detailProject === projects.at(-1) || (!detailProject && detailCategory === categories.length - 1);
  if (!lastDetail || event.target.closest('.detail-meta') || !dialog.open || detailClosing || imageDialog.open) return;
  const distance = detailTouchStartY - (event.changedTouches[0]?.clientY ?? detailTouchStartY);
  if (distance <= 48 || dialog.scrollTop + dialog.clientHeight < dialog.scrollHeight - 12) return;
  document.querySelector('.detail-next').click();
}, { passive: true });

document.querySelector('.image-close').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('close', () => expandedImage.removeAttribute('src'));

route();
viewReady = true;
requestAnimationFrame(() => {
  if (reducedMotion.matches || coverAnimations.length || window.scrollY > 0) return;
  const cover = currentView === 'work' ? workPage : aboutPage;
  const nodes = cover.querySelectorAll(currentView === 'work'
    ? '.archive-heading h1, .archive-foot' : '.name-title, .hero-bottom, .hero-foot');
  const animations = [...nodes].map(node => node.animate(softCoverFrames(42, 'Y'), {
    duration: 980, easing: 'linear', fill: 'both',
  }));
  coverAnimations = animations;
  Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
    if (coverAnimations === animations) clearCoverTransition();
  });
});
