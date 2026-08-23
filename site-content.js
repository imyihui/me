/* ============================================================
   SITE CONTENT — edit this file to change all portfolio text,
   images, and project details. Save and refresh index.html.
   ============================================================ */

   var SITE = {

    /* ---- NAVIGATION ---- */
    nav: [
      { id: "home",  labelEn: "Index",       labelZh: "首页" },
      { id: "sys",   labelEn: "System",       labelZh: "系统与界面" },
      { id: "vis",   labelEn: "Visual",       labelZh: "视觉与品牌" },
      { id: "nar",   labelEn: "Narrative",     labelZh: "个人叙事" },
      { id: "about", labelEn: "About",        labelZh: "关于" }
    ],
  
    /* ---- HOMEPAGE ---- */
    home: {
      eyebrowEn: "Portfolio — 2026",
      eyebrowZh: "作品集 — 2026",
      nameEnHtml: "Yihui <em>Zhu</em>",
      nameZhHtml: "朱<em>艺卉</em>",
      roleEn: "Author Designer",
      roleZh: "视觉叙事设计师",
      bioEn: "From data interfaces and brand identities to illustrated narratives and independent publications.",
      bioZh: "实践涵盖数据界面、品牌视觉系统、插画叙事与独立出版，关注如何通过视觉语言组织信息、表达观点，并建立具有个人气质的叙事。",
      defEn: "One who works between visual storytelling and structured design systems — organizing information as a way to express ideas.",
      defZh: "在视觉叙事与结构化设计系统之间进行创作——通过整理、重组和转译信息，让设计不仅传达内容，也成为表达想法与观察世界的一种方式。",
      locationEn: "Beijing · Remote",
      locationZh: "北京<br>·<br>远程"
    },
  
    /* ---- SECTIONS (headers only) ---- */
    sections: [
      {
        id: "sys",
        titleEnHtml: "System &amp; <em>Interfaces</em>",
        titleZhHtml: "系统与<em>界面</em>",
        introEn: "Interfaces and digital systems — 6 projects making complex information feel clear.",
        introZh: "界面与数字系统，通过信息架构、视觉系统与交互设计，将复杂的信息、数据与工作流程转化为清晰、易于理解和使用的数字体验。"
      },
      {
        id: "vis",
        titleEnHtml: "Visual <em>Communication</em>",
        titleZhHtml: "视觉<em>传达</em>",
        introEn: "Brand systems and graphic design — 4 projects with clear ideas and distinct character.",
        introZh: "品牌系统与平面设计，从视觉识别、插画到艺术指导，关注如何将一个想法转化为具有明确性格、视觉语言和识别度的视觉形象。"
      },
      {
        id: "nar",
        titleEnHtml: "Personal <em>Narrative</em>",
        titleZhHtml: "个人<em>叙事</em>",
        introEn: "Zines, illustration, and visual research — 5 projects on identity, memory, and everyday life.",
        introZh: "独立出版、插画与视觉研究，记录身份、记忆、成长与日常生活中的细小观察，并通过图像、文字与出版形式建立属于自己的叙事方式。"
      }
    ],
  
    /* ---- PROJECTS ----
       Order within each cat determines display sequence.
       Image paths are relative to index.html.       */
    projects: [
  
      /* ===== SYSTEM (6) ===== */
  
      {
        cat: "sys",
        img: "yihuizhu-portfolio/assets/images/projects/system/1-seabox/seabox-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/system/1-seabox/seabox-01.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/1-seabox/seabox-02.jpg"
        ],
        website: "https://www.seaboxdata.com/",
        titleEn: "Seaboxdata.com",
        titleZh: "Seaboxdata.com",
        subtitleEn: "Visual Redesign for a Big Data Technology Company",
        subtitleZh: "大数据科技企业官网的视觉重设计",
        tagsEn: ["Web Design", "Brand strategy","Design System"],
        tagsZh: ["网站设计", "品牌战略", "设计系统"],
        year: "2023",
        roleEn: "Visual & UI Designer",
        roleZh: "视觉与 UI 设计师",
        introEn: "A large-scale visual redesign transforming a dated corporate website into a modern, approachable digital presence for a big data technology company.",
        introZh: "为大数据科技公司进行的整站视觉重设计，在保留企业技术属性与专业度的基础上，重新梳理品牌视觉语言与网站信息结构，将原本较为陈旧的企业官网转化为更加现代、清晰且具有亲和力的数字体验。",
        descEn: "A six-month redesign covering the entire website, from visual identity and design systems to information-heavy pages, responsive layouts, illustration direction, and interaction.",
        descZh: "项目历时六个月，覆盖从视觉识别与设计系统，到复杂信息页面、响应式布局、插画方向与交互设计的完整网站体验。设计过程中重点处理大量技术信息与企业内容之间的层级关系，通过统一的组件、版式和视觉语言，让不同类型的信息能够在同一系统中保持清晰且具有连续性的表达。",
        creditsEn: "Role: Visual & UI Designer / Team: PM + Designer / Year: 2023",
        creditsZh: "角色：视觉与 UI 设计师 / 团队：产品经理 + 设计师 / 年份：2023"
      },
  
      {
        cat: "sys",
        img: "yihuizhu-portfolio/assets/images/projects/system/2-attune/attune-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/system/2-attune/attune-01.gif",
          "yihuizhu-portfolio/assets/images/projects/system/2-attune/attune-02.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/2-attune/attune-03.jpg"
        ],
        titleEn: "Attune",
        titleZh: "Attune",
        subtitleEn: "Adaptive Mental Health Check-in App",
        subtitleZh: "面向 Gen Z 的自适应心理健康应用",
        tagsEn: ["User research", "Interaction Design"],
        tagsZh: ["用户研究", "交互设计"],
        year: "2026",
        roleEn: "UI / Interaction Designer", 
        roleZh: "UI / 交互设计师",
        introEn: "A playful mental health companion that adapts to emotional states and helps users reconnect with themselves.",
        introZh: "一个能够根据用户情绪状态进行适应的心理健康伴侣，通过轻松、非说教式的互动方式，帮助用户觉察当下的感受、理解自己的情绪，并重新建立与自身状态的连接。",
        descEn: "A personal project exploring adaptive interfaces for Gen Z, using a playful mood-wheel interaction instead of treating every emotional state as something that needs to be fixed.",
        descZh: "基于个人研究的概念项目，探索面向 Gen Z 的自适应心理健康界面。项目关注年轻人日常情绪变化与数字产品之间的关系，通过情绪轮、状态反馈与自适应内容，让用户先识别和理解自己的感受，而不是立即把情绪视为一个需要被解决的问题。界面会根据不同的情绪状态调整内容与互动方式，尝试建立一种更加轻松、具有陪伴感的数字心理健康体验。",
        creditsEn: "Role: UI / Interaction Designer / Year: 2026",
        creditsZh: "角色：UI / 交互设计师 / 项目性质：个人概念项目 / 年份：2026"
      },
  
      {
        cat: "sys",
        img: "yihuizhu-portfolio/assets/images/projects/system/3-datahoo/datahoo-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/system/3-datahoo/datahoo-01.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/3-datahoo/datahoo-02.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/3-datahoo/datahoo-03.jpg"
        ],
        titleEn: "Datahoo",
        titleZh: "Datahoo",
        subtitleEn: "Data Visualization Builder",
        subtitleZh: "数据可视化构建平台",
        tagsEn: ["UI Design", "Data Visualization"],
        tagsZh: ["UI 设计", "数据可视化"],
        year: "2019",
        roleEn: "UI Designer",
        roleZh: "UI 设计师",
        introEn: "A data visualization platform designed to bring charts, templates, widgets, APIs, and graphics into one flexible workspace.",
        introZh: "一个将图表、模板、组件、API 与图形资源整合到同一工作空间的数据可视化平台，为用户提供从数据处理到视觉呈现的一体化创作环境。",
        descEn: "An early product UI exploration covering the workspace, visualization tools, property controls, marketplace, and supporting interfaces.",
        descZh: "这是一次较早期的产品界面设计探索，覆盖工作区、可视化工具、属性控制、资源市场及相关页面。设计重点在于建立不同功能之间清晰的操作关系，同时让复杂的数据配置与图形编辑过程保持直观、可控，并通过统一的组件体系维持产品整体的一致性。",
        creditsEn: "Role: UI Designer / Scope: All Product Interfaces / Year: 2019",
        creditsZh: "角色：UI 设计师 / 工作范围：产品整体界面设计 / 年份：2019"
      },
  
      {
        cat: "sys",
        img: "yihuizhu-portfolio/assets/images/projects/system/4-bughook/bughook-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/system/4-bughook/bughook-01.gif",
          "yihuizhu-portfolio/assets/images/projects/system/4-bughook/bughook-02.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/4-bughook/bughook-03.jpg"
        ],
        titleEn: "Bughook",
        titleZh: "Bughook",
        subtitleEn: "Bug Tracking Experience",
        subtitleZh: "Bug 反馈与追踪体验",
        tagsEn: ["UX/UI Design", "Product Design"],
        tagsZh: ["UX/UI 设计", "产品设计"],
        year: "2020",
        roleEn: "UI / Product Designer",
        roleZh: "UI / 产品设计师",
        introEn: "A proposed international redesign making bug reporting clearer, lighter, and easier for global IT teams.",
        introZh: "面向海外市场的产品设计探索，重新思考 IT 团队进行 Bug 反馈与追踪时的信息组织方式，让原本偏技术化的工作流程变得更加清晰、轻量，也更容易被不同背景的团队成员理解。",
        descEn: "The concept redesigned the product experience around a simple reporting workflow, replacing a rigid technical interface with a more approachable international visual language.",
        descZh: "方案围绕简单直接的反馈流程重新设计产品体验，从问题提交、信息填写到状态追踪重新梳理操作关系，以更开放、易理解的国际化视觉语言替代原有较为固定的技术型界面。设计希望降低第一次使用时的理解成本，同时保持工具所需要的专业性与效率。",
        creditsEn: "Role: UI / Product Designer / Status: Proposed Concept",
        creditsZh: "角色：UI / 产品设计师 / 状态：概念方案"
      },
  
      {
        cat: "sys",
        img: "yihuizhu-portfolio/assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-cover copy.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-03.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-04.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-05.jpg"
        ],
        titleEn: "Seaboxdata Development Platform",
        titleZh: "Seaboxdata 一站式开发平台",
        subtitleEn: "One-Stop Data Development Platform",
        subtitleZh: "一站式数据开发平台",
        tagsEn: ["B2B Product", "UI Design"],
        tagsZh: ["B2B 产品", "UI 设计"],
        year: "2023",
        roleEn: "UI Designer",
        roleZh: "UI 设计师",
        introEn: "A B2B development platform bringing research, modeling, development, coding, testing, and deployment into one workspace.",
        introZh: "一个面向 B2B 场景的数据开发平台，将研究、建模、开发、编码、测试与上线等多个环节整合到同一工作空间中，帮助专业用户在统一的系统内完成复杂的数据工作流程。",
        descEn: "I designed the dashboard and functional workspaces for a technically complex product, translating dense terminology and workflows into a structured interface system.",
        descZh: "负责平台 Dashboard 与多个功能工作区的界面设计，将复杂的技术术语、数据关系与开发流程转化为清晰、结构化的界面系统。设计过程中重点处理不同任务之间的层级、状态和操作关系，让高信息密度的专业工具仍然保持良好的可读性与使用效率。",
        creditsEn: "Role: UI Designer / Product: B2B Development Platform / Year: 2023",
        creditsZh: "角色：UI 设计师 / 产品：B2B 数据开发平台 / 年份：2023"
      },
  
      {
        cat: "sys",
        img: "yihuizhu-portfolio/assets/images/projects/system/6-seaboxdata-dashboard/Data-Visualization-Data-Asset Management-Dashboard-01.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/system/6-seaboxdata-dashboard/Data-Visualization-Data-Asset Management-Dashboard.jpg",
          "yihuizhu-portfolio/assets/images/projects/system/6-seaboxdata-dashboard/Data-Visualization-Pucheng-platform-cover.jpg"
        ],
        titleEn: "Data Visualization",
        titleZh: "数据可视化",
        subtitleEn: "Selected Data Visualization Systems",
        subtitleZh: "数据可视化设计与信息呈现",
        tagsEn: ["Data Visualization", "Visual Design"],
        tagsZh: ["数据可视化", "视觉设计"],
        year: "2019-2020",
        roleEn: "Visual Designer",
        roleZh: "视觉设计师",
        introEn: "A selection of data visualization projects exploring alternative ways to make complex information distinctive, readable, and visually engaging.",
        introZh: "一组数据可视化项目，探索如何以不同的视觉方式呈现复杂信息，在信息准确性与可读性的基础上加入更加鲜明的视觉表达，使数据不仅能够被理解，也能够形成具有识别度的视觉体验。",
        descEn: "Across different projects and data contexts, I explored customized charts, maps, lists, dashboards, and illustrative visual systems rather than relying on standard visualization patterns.",
        descZh: "针对不同的数据场景，探索定制化图表、地图、列表、Dashboard 与插画式视觉系统，尝试突破标准化的数据展示方式。设计根据不同信息之间的关系调整视觉层级、比例与编码方式，在保证数据阅读效率的同时，寻找更具有表现力的视觉解决方案。",
        creditsEn: "Role: Visual Designer / Scope: Data Visualization & Visual Systems",
        creditsZh: "角色：视觉设计师 / 工作范围：数据可视化与视觉系统"
      },
  
      /* ===== VISUAL (5) ===== */
  
      {
        cat: "vis",
        img: "yihuizhu-portfolio/assets/images/projects/visuals/4. camis-craft-studio-branding /camis-craft-studio-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/visuals/4. camis-craft-studio-branding /camis-craft-studio-01.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/4. camis-craft-studio-branding /camis-craft-studio-02.jpg"
        ],
        titleEn: "Cami's Craft Studio",
        titleZh: "Cami's Craft Studio",
        subtitleEn: "Playful Identity for a Crochet Studio",
        subtitleZh: "钩织工作室的趣味品牌视觉设计",
        tagsEn: ["Brand Identity", "Logo Design", "Illustration"],
        tagsZh: ["品牌识别", "Logo 设计", "插画"],
        year: "2025",
        roleEn: "Brand Designer / Illustrator",
        roleZh: "品牌设计师 / 插画师",
        introEn: "A warm and playful identity inspired by the personality of a crochet artist and the tactile qualities of yarn.",
        introZh: "一个从钩织创作者的个人特质与毛线的柔软触感出发建立的品牌形象，将手工艺本身的温度、趣味与不规则感转化为视觉语言，形成一个温暖、亲切而具有角色感的品牌身份。",
        descEn: "I developed the logo around yarn-ball forms and knitted textures, while incorporating the owner's curly hair, large glasses, and expressive eyebrows into a character-based identity.",
        descZh: "以毛线球的形态与编织纹理为视觉起点，将创作者的卷发、大眼镜和浓眉等个人特征融入角色设计，并进一步发展为 Logo、插画与品牌应用。整体视觉通过手工感与人物特征建立品牌记忆点，让品牌身份与创作者本人产生直接联系。",
        creditsEn: "Role: Brand Designer / Illustrator / Year: 2025",
        creditsZh: "角色：品牌设计师 / 插画师 / 年份：2025"
      },
  
      {
        cat: "vis",
        img: "yihuizhu-portfolio/assets/images/projects/visuals/1.her-metaphor-lab branding/her-metaphor-branding-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/visuals/1.her-metaphor-lab branding/00.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/1.her-metaphor-lab branding/Free Four Foils with Sticker Mockup.png",
          "yihuizhu-portfolio/assets/images/projects/visuals/1.her-metaphor-lab branding/Free Glass Storefront Mockup.jpg"
        ],
        website: "https://hermetaphor.space/",
        titleEn: "Her Metaphor Lab",
        titleZh: "Her Metaphor Lab",
        subtitleEn: "Identity for a Personal Visual Practice",
        subtitleZh: "个人视觉实践的品牌与视觉身份",
        tagsEn: ["Visual Identity", "Art Direction", "Self-Initiated"],
        tagsZh: ["视觉识别", "艺术指导", "个人实践"],
        year: "2025",
        roleEn: "Founder / Visual Designer",
        roleZh: "创作者 / 视觉设计师",
        introEn: "A personal visual practice exploring contemporary social life through metaphor, illustration, zines, and independent publishing.",
        introZh: "一个以隐喻、插画、Zine 与独立出版为主要媒介的个人视觉实践，尝试从日常生活与社会观察中提取那些难以直接表达的感受，并将它们转化为具有个人语言的视觉作品。",
        descEn: "Her Metaphor grew from a desire to question materialistic and consumer-driven ways of living. I develop its visual language through metaphorical illustrations, digital media, publications, and experimental formats.",
        descZh: "Her Metaphor 源于对物质主义与消费主义生活方式的思考，也是一种对“应该如何生活”的持续追问。我通过隐喻性插画、数字媒介、出版物与实验性形式不断建立和发展这一实践的视觉语言，将抽象的社会观察、个人情绪与日常经验转化为可以被观看、阅读和分享的视觉片段。",
        creditsEn: "Role: Founder / Visual Designer / Year: 2025",
        creditsZh: "角色：创作者 / 视觉设计师 / 年份：2025"
      },
  
      {
        cat: "vis",
        img: "yihuizhu-portfolio/assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-01.png",
          "yihuizhu-portfolio/assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-02.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-03.png",
          "yihuizhu-portfolio/assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-04.png",
          "yihuizhu-portfolio/assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-05.png"
        ],
        titleEn: "Velveteen's Secret Potions",
        titleZh: "Velveteen's Secret Potions",
        subtitleEn: "Character Design for an Essential Oil Collection",
        subtitleZh: "精油系列的角色与场景视觉设计",
        tagsEn: ["Character Design", "Art Direction", "Commercial Illustration"],
        tagsZh: ["角色设计", "艺术指导", "商业插画"],
        year: "2020",
        roleEn: "Illustrator / Character Designer",
        roleZh: "插画师 / 角色设计师",
        introEn: "A character-driven visual world created for a collection of essential oils and natural skincare products.",
        introZh: "为精油与天然护肤产品系列打造的一套角色驱动的视觉世界，通过拟人化的角色、场景与故事建立产品之间的联系，让原本功能性的产品拥有更加鲜明的性格与情绪。",
        descEn: "I personified six essential oil products as distinct characters and placed them in a fictional Latin-inspired interview show, using each product's color and qualities to develop its personality, appearance, and atmosphere.",
        descZh: "将六种精油拟人化为具有不同性格的角色，并将它们置于一个虚构的拉丁风格访谈节目中。设计根据每种产品的色彩、功能与气味特质发展人物的性格、外貌与场景氛围，让产品信息通过角色关系和视觉叙事被更加直观地感知。",
        creditsEn: "Role: Illustrator / Character Designer / Client: Velveteen's Secret Potions / Year: 2019",
        creditsZh: "角色：插画师 / 角色设计师 / 客户：Velveteen's Secret Potions / 年份：2020"
      },
  
      {
        cat: "vis",
        img: "yihuizhu-portfolio/assets/images/projects/visuals/3. illustration-movie-series/marvelous-mrs-maisel.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/visuals/3. illustration-movie-series/amilie.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/3. illustration-movie-series/lamica-geniale.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/3. illustration-movie-series/love-me-if-you-dare.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/3. illustration-movie-series/moonrise-kingdom.jpg",
          "yihuizhu-portfolio/assets/images/projects/visuals/3. illustration-movie-series/the-end-of-the-f-world.jpg"
        ],
        titleEn: "Scenes in Between",
        titleZh: "电影之间",
        subtitleEn: "Illustrations Inspired by Cinema",
        subtitleZh: "从电影场景与角色出发的插画系列",
        tagsEn: ["Illustration", "Visual Interpretation"],
        tagsZh: ["插画", "视觉再诠释"],
        year: "2020-2025",
        roleEn: "Illustrator",
        roleZh: "插画师",
        introEn: "A series of vector illustrations reinterpreting cinematic moments, characters, and lines through a personal visual language.",
        introZh: "一组从电影场景、角色与台词出发的矢量插画系列，通过个人的造型、色彩与构图语言重新理解那些留下印象的电影瞬间。",
        descEn: "Rather than simply recreating movie scenes, I use particular cinematic moments as starting points to explore mood, character, and emotional subtext, leaving space for personal reflection.",
        descZh: "并非单纯复刻电影画面，而是从特定的电影瞬间出发，重新提取其中的情绪、人物关系与隐藏的叙事线索。通过简化场景、重组构图和调整视觉风格，让原本属于电影的画面转化为一种更加个人化的观看与记忆。",
        creditsEn: "Role: Illustrator / Medium: Vector Illustration / Year: 2020–2025",
        creditsZh: "角色：插画师 / 媒介：矢量插画 / 年份：2020–2025"
      },
  
      /* ===== NARRATIVE (5) ===== */
  
      {
        cat: "nar",
        img: "yihuizhu-portfolio/assets/images/projects/narrative/1.still-becoming/Still-Becoming-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/narrative/1.still-becoming/Still-Becoming-001-reseach.png",
          "yihuizhu-portfolio/assets/images/projects/narrative/1.still-becoming/Still-Becoming-002=prep.png",
          "yihuizhu-portfolio/assets/images/projects/narrative/1.still-becoming/Still-Becoming-01.jpg",
          "yihuizhu-portfolio/assets/images/projects/narrative/1.still-becoming/Still-Becoming-02.jpg",
          "yihuizhu-portfolio/assets/images/projects/narrative/1.still-becoming/Still-Becoming-03.jpg"
        ],
        titleEn: "Still Becoming",
        titleZh: "Still Becoming",
        subtitleEn: "A Zine on Identity and Emotional Uncertainty",
        subtitleZh: "关于身份、成长与情绪不确定性的视觉出版物",
        tagsEn: ["Research", "Visual Narrative", "Zine"],
        tagsZh: ["研究", "视觉叙事", "Zine"],
        year: "2025",
        roleEn: "Researcher / Art Director / Designer",
        roleZh: "研究者 / 艺术指导 / 设计师",
        introEn: "A personal project exploring how young people navigate adulthood, identity, and the pressure of a fixed social script.",
        introZh: "一个关于年轻人如何面对成年、身份变化与社会既定人生剧本的个人研究与视觉叙事项目，从个人经验与同龄人的真实表达出发，讨论成长过程中持续存在的不确定感。",
        descEn: "Through conversations with five peers, interviews, illustration, and a 44-page zine, the project asks whether there is a clear moment that signifies maturity—or whether we are always becoming. It seeks to create an open narrative rather than a fixed answer to what life should become.",
        descZh: "通过与五位同龄人的深入对话、访谈、资料研究、插画与一本 44 页的 Zine，项目追问：是否真的存在一个明确的瞬间，能够证明我们已经成熟、已经成为一个“完整的大人”？还是说，成长本身就是一个持续发生、没有终点的过程。项目没有试图给出关于人生应该如何发展的标准答案，而是将不同的声音、矛盾与不确定感并置在一起，希望创造一个开放的叙事空间，让读者能够在他人的经验中重新看见自己。",
        creditsEn: "Role: Researcher / Art Director / Designer / Format: A6, 44 pages",
        creditsZh: "角色：研究者 / 艺术指导 / 设计师 / 形式：A6，44 页"
      },
  
      {
        cat: "nar",
        img: "yihuizhu-portfolio/assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-01.gif",
          "yihuizhu-portfolio/assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-02.jpg"
        ],
        website: "https://hermetaphor.space/",
        titleEn: "Her Metaphor Lab Studio",
        titleZh: "Her Metaphor Lab Studio",
        subtitleEn: "An Experimental Digital Archive",
        subtitleZh: "一个实验性的个人数字档案空间",
        tagsEn: ["Web Design", "Creative Coding", "Experimental UX"],
        tagsZh: ["网页设计", "创意编程", "实验性 UX"],
        year: "2026",
        roleEn: "Designer / Creative Coder",
        roleZh: "设计师 / 创意编码",
        introEn: "An experimental digital archive for Her Metaphor Lab, turning personal stories and creative fragments into a non-linear space for exploration.",
        introZh: "Her Metaphor Lab 的实验性数字档案空间，将个人故事、创作过程与零散的视觉片段收集起来，并通过非线性的方式重新组织，使网站更像一个可以漫游和偶然发现的私人档案，而不是传统意义上的作品展示页面。",
        descEn: "Rather than organizing the archive as a conventional website, I developed a non-linear interaction where visitors randomly discover individual records, similar to drawing a card from a deck. The site was designed and built through vibe coding.",
        descZh: "不同于传统的网站信息架构，我设计了一种非线性的探索方式，让访客随机发现一条条独立记录，如同从一叠卡牌中抽取一张。内容之间没有被强制安排成固定的阅读顺序，偶然性本身成为浏览体验的一部分。网站从视觉设计到前端实现均通过 vibe coding 完成，并将创意编程作为建立叙事结构的一种设计工具。",
        creditsEn: "Role: Designer / Creative Coder / Status: Published / Year: 2026",
        creditsZh: "角色：设计师 / 创意编码 / 状态：已上线 / 年份：2026"
      },
  
      {
        cat: "nar",
        img: "yihuizhu-portfolio/assets/images/projects/narrative/3.beijing-illustration-series/beijing-illustration-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/narrative/3.beijing-illustration-series/Evening-Dance-01.jpg",
          "yihuizhu-portfolio/assets/images/projects/narrative/3.beijing-illustration-series/Narrow-Alley-02.jpg",
          "yihuizhu-portfolio/assets/images/projects/narrative/3.beijing-illustration-series/Tanghulu-03.jpg",
          "yihuizhu-portfolio/assets/images/projects/narrative/3.beijing-illustration-series/Pedicab-04.jpg"
        ],
        titleEn: "Beijing, Unnoticed",
        titleZh: "北京，被忽略的角落",
        subtitleEn: "Illustrations of Everyday Beijing",
        subtitleZh: "关于北京日常生活与城市细节的插画记录",
        tagsEn: ["Illustration", "Visual Diary"],
        tagsZh: ["插画", "视觉记录"],
        year: "2020",
        roleEn: "Illustrator",
        roleZh: "插画师",
        introEn: "A small series observing ordinary moments and easily overlooked corners of Beijing's hutongs.",
        introZh: "一组关于北京胡同日常生活的插画记录，关注那些不会出现在城市宣传册中，却构成真实城市经验的普通瞬间与容易被忽略的角落。",
        descEn: "Created during the pandemic period, the five illustrations focus on simple everyday life rather than iconic landmarks, using textured digital painting to capture a quieter side of the city.",
        descZh: "创作于疫情时期的五幅插画没有选择北京著名的城市地标，而是将视线放在胡同中的普通生活：街边的人、狭窄的巷道、日常小吃以及城市中缓慢发生的片刻。通过带有手工肌理的数字绘画，记录一个更加安静、私人，也更接近日常经验的北京。",
        creditsEn: "Role: Illustrator / Medium: Digital Painting / Year: 2021",
        creditsZh: "角色：插画师 / 媒介：数字绘画 / 年份：2020"
      },
  
      {
        cat: "nar",
        img: "yihuizhu-portfolio/assets/images/projects/narrative/4.elderly-wellbeing-poster/elderly-wellbeing-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/narrative/4.elderly-wellbeing-poster/elderly-wellbeing-01.jpg"
        ],
        titleEn: "Growing Older, Living Better",
        titleZh: "老去，也要好好生活",
        subtitleEn: "A Poster for Elderly Wellbeing",
        subtitleZh: "关注老年生活质量与社区关怀的社会议题海报",
        tagsEn: ["Social Design", "Visual Communication"],
        tagsZh: ["社会设计", "视觉传达"],
        year: "2025",
        roleEn: "Visual Designer / Researcher",
        roleZh: "视觉设计师 / 研究者",
        introEn: "A visual communication project advocating for more holistic care of older people's physical, social, and emotional wellbeing.",
        introZh: "一个倡导更加全面关注老年人身体、社交与情感生活质量的视觉传达项目，尝试从日常生活与社区关系的角度重新理解“老年生活”这一社会议题。",
        descEn: "Research into ageing in China revealed that emotional and social wellbeing can be overlooked alongside basic physical needs. The poster combines hand-drawn imagery and muted colors to communicate a warmer vision of ageing and community care.",
        descZh: "对中国老龄化现状的研究让我注意到，在满足基本生活需求之外，老年人的情感关系、社交参与与精神状态常常容易被忽略。海报没有采用强调衰老或疾病的视觉符号，而是通过手绘人物、生活化场景与低饱和色彩建立更加温暖、亲近的视觉语言，希望传达一种关于老去的不同想象：年龄增长并不意味着生活质量必须下降，社区与社会环境同样可以成为支持老年生活的重要部分。",
        creditsEn: "Role: Visual Designer / Researcher / Context: Program Application / Year: 2025",
        creditsZh: "角色：视觉设计师 / 研究者 / 项目背景：项目申请 / 年份：2025"
      },
  
      {
        cat: "nar",
        img: "yihuizhu-portfolio/assets/images/projects/narrative/5.one-year-in-amoy/one-year-in-amoy-cover.jpg",
        images: [
          "yihuizhu-portfolio/assets/images/projects/narrative/5.one-year-in-amoy/Open Magazine Mockup.jpg"
        ],
        titleEn: "One Year in Amoy",
        titleZh: "在厦门的一年",
        subtitleEn: "Personal Visual Journal",
        subtitleZh: "记录城市生活与个人感受的视觉日记",
        tagsEn: ["Zine", "Illustration", "Photography"],
        tagsZh: ["独立杂志", "插画", "摄影"],
        year: "2023",
        roleEn: "Designer / Illustrator",
        roleZh: "设计师 / 插画师",
        introEn: "A year of daily observations from Xiamen, China.",
        introZh: "关于在中国厦门生活一年的个人视觉记录，从城市环境、日常活动与生活中的细小瞬间出发，整理一段属于自己的时间与空间记忆。",
        descEn: "A personal visual journal documenting a year of everyday life in Xiamen through photography, illustration, and type.",
        descZh: "通过摄影、插画与文字记录在厦门一年的日常生活，将城市街道、居住环境、天气、人物与个人生活中的片段整理成一本视觉日记。项目没有试图完整地描述这座城市，而是通过一系列零散的观察，保存一段具体时间里对厦门的个人感受与记忆。",
        creditsEn: "Role: Designer / Illustrator / Year: 2023",
        creditsZh: "角色：设计师 / 插画师 / 形式：个人视觉日记 / 年份：2023"
      }
  
    ],
  
    /* ---- ABOUT PAGE ---- */
    about: {
      photo: "yihuizhu-portfolio/assets/images/about/yihui-profile.png",
      nameEn: "Yihui Zhu",
      nameZh: "朱艺卉",
      roleEn: "Author Designer",
      roleZh: "视觉叙事设计师",
      bioEn: [
        "Graduated from the Academy of Fine Arts. I work across branding, interfaces, and visual storytelling.",
        "Open to remote collaborations."
      ],
      bioZh: [
        "毕业于鲁迅美术学院，拥有视觉艺术与设计背景。我的实践横跨品牌视觉、数字界面、插画与视觉叙事，关注如何通过设计组织信息，并将个人观察转化为具有视觉性与叙事性的作品。",
        "目前以独立设计与个人创作为主，开放远程及国际项目合作，也欢迎与不同领域的创作者共同探索视觉、出版与数字媒介之间的可能性。"
      ],
      contactHeadEnHtml: "Let's make something <em>together.</em>",
      contactHeadZhHtml: "一起<em>做点什么。</em>",
      servicesEn: [
        "Brand identity",
        "Website design",
        "Interface design",
        "Illustration"
      ],
      servicesZh: [
        "品牌视觉设计",
        "网站设计",
        "界面设计",
        "插画创作"
      ],
      email: "iam.yihui@gmail.com",
      emailBtnEn: "say hi!",
      emailBtnZh: "say hi!",
      availabilityEn: "Currently working remotely and open to international freelance collaborations.",
      availabilityZh: "目前以远程方式工作，开放国际自由职业项目与跨领域合作，欢迎品牌、数字产品、视觉叙事及插画相关项目联系。",
      experience: [
        {
          years: "2024 — Present",
          titleEn: "Independent Practice",
          titleZh: "独立设计实践",
          subtitleEn: "Freelance Designer & Illustrator",
          subtitleZh: "自由设计师与插画师",
          bodyEn: "Interface design, branding systems, and visual storytelling.",
          bodyZh: "从事界面设计、品牌视觉体系、插画与视觉叙事等领域的独立项目，同时发展个人出版与视觉研究实践。"
        },
        {
          years: "2019 — 2024",
          titleEn: "Beijing Eastern Jin Technology",
          titleZh: "北京东方金信科技",
          subtitleEn: "",
          subtitleZh: "",
          bodyEn: "Corporate website, digital platforms, and data dashboards.",
          bodyZh: "负责企业官网、数字平台及数据仪表盘等项目的视觉与界面设计，参与复杂信息架构、数据可视化与企业数字产品的设计工作。"
        }
      ],
      education: {
        yearsLabelEn: "Education",
        yearsLabelZh: "教育背景",
        titleEn: "BA Sculpture",
        titleZh: "雕塑学士",
        schoolEn: "Academy of Fine Arts — 2014",
        schoolZh: "鲁迅美术学院 — 2014"
      },
      skillsEn: [
        "UI Design", "Data Viz", "Brand Identity", "Illustration",
        "Editorial", "Visual Narratives", "Figma", "Adobe", "Procreate"
      ],
      skillsZh: [
        "界面设计", "数据可视化", "品牌形象", "插画",
        "版式设计", "视觉叙事", "Figma", "Adobe", "Procreate"
      ],
      languages: [
        { name: "中文 / Chinese", levelEn: "Native", levelZh: "母语", width: 1 },
        { name: "English",       levelEn: "IELTS-7", levelZh: "IELTS-7", width: 0.9 }
      ]
    }
  
  };