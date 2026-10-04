/* ============================================================
   SITE CONTENT — edit this file to change all portfolio text,
   images, and project details. Save and refresh index.html.
   ============================================================ */

   var SITE = {

    /* ---- NAVIGATION ---- */
    nav: [
      { id: "work",   labelEn: "Work",         labelZh: "作品" },
      { id: "frag",   labelEn: "Visual Notes", labelZh: "视觉笔记" },
      { id: "arch",   labelEn: "Archive",      labelZh: "档案" },
      { id: "about",  labelEn: "About",        labelZh: "关于" },
      { id: "design", labelEn: "Design",       labelZh: "设计", quiet: true }
    ],
  
    /* ---- HOMEPAGE ---- */
    home: {
      eyebrowEn: "Notes from an evolving practice",
      eyebrowZh: "一份仍在生长的笔记",
      nameEnHtml: "Yihui Zhu",
      nameZhHtml: "朱艺卉",
      roleEn: "visual artist / author",
      roleZh: "视觉艺术家 / 作者",
      statementEn: "I make images, books and visual narratives around the uncertain territory of becoming — questions about adulthood, identity, memory, and the ordinary hours that quietly shape a life.",
      statementZh: "我的工作围绕「成为」这件不确定的事展开：图像、出版物与视觉叙事，关于长大、身份、记忆，以及那些在日常生活中悄悄塑成一个人的时刻。",
      bioEn: "Works, images and ongoing inquiries — kept here as a record of looking.",
      bioZh: "作品、图像与持续进行中的观察——作为一份正在写下去的记录，留在此处。",
      defEn: "",
      defZh: "",
      locationEn: "Dali",
      locationZh: "大理"
    },

    /* homepage field — pieces from the archive, not a carousel */
    homeField: [
      { src: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-cover.jpg", id: "still-becoming", w: 210, x: "4%", y: "8%", r: -5 },
      { src: "assets/images/projects/narrative/3.beijing-illustration-series/Evening-Dance-01.jpg", id: "beijing", w: 150, x: "78%", y: "6%", r: 7 },
      { src: "assets/images/projects/visuals/1.her-metaphor-lab branding/her-metaphor-branding-cover.jpg", id: "her-metaphor-lab", w: 168, x: "72%", y: "58%", r: -3 },
      { src: "assets/images/projects/narrative/5.one-year-in-amoy/one-year-in-amoy-cover.jpg", id: "amoy", w: 186, x: "8%", y: "62%", r: 4 },
      { src: "assets/images/projects/visuals/3.illustration-movie-series/amilie.jpg", id: "scenes", w: 128, x: "58%", y: "12%", r: -8 },
      { src: "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-01.png", id: "velveteen", w: 120, x: "86%", y: "32%", r: 3 },
      { src: "assets/images/projects/narrative/3.beijing-illustration-series/Tanghulu-03.jpg", id: "beijing", w: 112, x: "2%", y: "38%", r: 6 },
      { src: "assets/images/projects/narrative/4.elderly-wellbeing-poster/elderly-wellbeing-cover.jpg", id: "elderly", w: 100, x: "48%", y: "70%", r: -2 }
    ],
  
    /* ---- BODIES OF WORK
       These four bodies of work are the core of the practice.
       Each has its own distinct template for how the folio renders.
       template: editorial | laboratory | diary | narrative
    ---- */
    bodies: [
      {
        id: "still-becoming",
        template: "editorial",
        yearEn: "2025",
        yearZh: "2025",
        accentColor: "#C5A882",
        statementEn: "Whether there is a clear moment that signifies maturity — or whether we are always becoming.",
        statementZh: "是否真的存在一个明确的瞬间，能够证明我们已经成熟——还是说，我们始终都在成为。",
        pullQuoteEn: "Are you already grown up — or still becoming?",
        pullQuoteZh: "你已经长大了吗——还是仍在成为？"
      },
      {
        id: "her-metaphor-lab",
        template: "laboratory",
        yearEn: "2025 —",
        yearZh: "2025 —",
        accentColor: "#7A9E7E",
        statementEn: "An ongoing collection of images, stories and metaphors — a visual laboratory where thinking takes the shape of objects.",
        statementZh: "一组持续生长的图像、故事与隐喻——一个让思考以物件的形状出现的视觉实验室。",
        pullQuoteEn: "Every metaphor is a small act of translation.",
        pullQuoteZh: "每一个隐喻都是一次微小的翻译。"
      },
      {
        id: "amoy",
        template: "diary",
        yearEn: "2023",
        yearZh: "2023",
        accentColor: "#B8956A",
        statementEn: "A year of daily observations in Xiamen — not a complete city, only the hours that stayed.",
        statementZh: "在厦门一年的日常观察——不是一座完整的城市，只是留下来的那些时刻。"
      },
      {
        id: "gear",
        template: "narrative",
        yearEn: "2025 —",
        yearZh: "2025 —",
        accentColor: "#8A7060",
        statementEn: "A fictional world in progress — characters, machines, drawings, and small speculations on care and the bodies that turn with them.",
        statementZh: "一个仍在虚构中的世界——人物、机械、手稿，关于照料与随之转动的身体的细碎想象。"
      }
    ],

    /* ---- SECTIONS (headers only) ---- */
    sections: [
      {
        id: "work",
        titleEnHtml: "Bodies of <em>work</em>",
        titleZhHtml: "作品<em>系列</em>",
        introEn: "These works grow from questions about adulthood, identity, memory, relationships, and the ways we make a life of our own. They do not share one style. They share a practice.",
        introZh: "这些作品从对长大、身份、记忆、关系，以及如何慢慢长成自己的生活的追问中生长出来。它们不必共享同一种风格，它们共享同一种实践。"
      },
      {
        id: "frag",
        titleEnHtml: "Visual Notes",
        titleZhHtml: "视觉笔记",
        introEn: "Traces left between larger works — drawings, plates, photographs, publications, objects, and short notes. They do not need to agree with one another.",
        introZh: "大作品之间留下的痕迹：手稿、单幅、照片、出版物、物件，以及简短的文字。它们不必彼此呼应。"
      },
      {
        id: "arch",
        titleEnHtml: "Archive",
        titleZhHtml: "档案",
        introEn: "A quiet index of records — year, medium, title. For finding, not selling.",
        introZh: "一份安静的目录：年份、媒介、标题。用来查找，而不是用来推销。"
      },
      {
        id: "design",
        titleEnHtml: "Design <em>practice</em>",
        titleZhHtml: "设计<em>实践</em>",
        introEn: "Selected design work — interfaces, visual systems, digital products. A parallel practice that sits beside the studio.",
        introZh: "一组设计实践中的作品：界面、视觉系统与数字产品。作为与工作室并行的另一条线索。"
      }
    ],
  
    /* ---- FRAGMENT FILTERS ---- */
    fragFilters: [
      { id: "all",          labelEn: "All",         labelZh: "全部" },
      { id: "work",         labelEn: "Work",        labelZh: "作品" },
      { id: "drawing",      labelEn: "Drawing",     labelZh: "绘画" },
      { id: "image",        labelEn: "Image",       labelZh: "图像" },
      { id: "publication",  labelEn: "Publication", labelZh: "出版" },
      { id: "text",         labelEn: "Text",        labelZh: "文本" },
      { id: "object",       labelEn: "Object",      labelZh: "物件" },
      { id: "video",        labelEn: "Video",       labelZh: "影像" }
    ],

    /* ---- FRAGMENTS
       Individual visual traces. Edit here; they are not forced into
       the same size or style. kind: work | drawing | image |
       publication | text | object | video
       size: xs | s | m | l | xl | full
       related: project id in SITE.projects
    ---- */
    fragments: [
      {
        src: "assets/images/projects/narrative/3.beijing-illustration-series/Evening-Dance-01.jpg",
        titleEn: "Evening Dance", titleZh: "傍晚的舞",
        year: "2020", mediumEn: "Digital painting", mediumZh: "数字绘画",
        related: "beijing", kind: "drawing", size: "l", r: -1.4
      },
      {
        src: "assets/images/projects/visuals/3.illustration-movie-series/amilie.jpg",
        titleEn: "Amélie", titleZh: "天使爱美丽",
        year: "2020", mediumEn: "Vector illustration", mediumZh: "矢量插画",
        related: "scenes", kind: "drawing", size: "s", r: 2.1
      },
      {
        src: "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-01.png",
        titleEn: "Velveteen, seated", titleZh: "Velveteen",
        year: "2020", mediumEn: "Character drawing", mediumZh: "角色手稿",
        related: "velveteen", kind: "drawing", size: "m", r: -0.8
      },
      {
        kind: "text", size: "m", r: 1.2, year: "2025",
        titleEn: "Always becoming", titleZh: "仍在成为",
        mediumEn: "Note", mediumZh: "笔记",
        related: "still-becoming",
        textEn: "Whether there is a clear moment that signifies maturity — or whether we are always becoming.",
        textZh: "是否真的存在一个明确的瞬间，能够证明我们已经成熟——还是说，我们始终都在成为。"
      },
      {
        src: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-01.jpg",
        titleEn: "Zine spread", titleZh: "Zine 内页",
        year: "2025", mediumEn: "Offset / zine page", mediumZh: "Zine 内页",
        related: "still-becoming", kind: "publication", size: "full", r: 0
      },
      {
        src: "assets/images/projects/visuals/3.illustration-movie-series/moonrise-kingdom.jpg",
        titleEn: "Moonrise Kingdom", titleZh: "月升王国",
        year: "2021", mediumEn: "Vector illustration", mediumZh: "矢量插画",
        related: "scenes", kind: "drawing", size: "xs", r: 3.2
      },
      {
        src: "assets/images/projects/narrative/3.beijing-illustration-series/Tanghulu-03.jpg",
        titleEn: "Tanghulu", titleZh: "糖葫芦",
        year: "2020", mediumEn: "Digital painting", mediumZh: "数字绘画",
        related: "beijing", kind: "image", size: "m", r: -2
      },
      {
        src: "assets/images/projects/visuals/1.her-metaphor-lab branding/Free Four Foils with Sticker Mockup.png",
        titleEn: "Foil stickers", titleZh: "贴纸",
        year: "2025", mediumEn: "Printed object", mediumZh: "印刷物件",
        related: "her-metaphor-lab", kind: "object", size: "l", r: 1.6
      },
      {
        src: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-001-reseach.png",
        titleEn: "Research board", titleZh: "研究板",
        year: "2025", mediumEn: "Study", mediumZh: "研究手稿",
        related: "still-becoming", kind: "work", size: "xl", r: -0.6
      },
      {
        src: "assets/images/projects/visuals/4.camis-craft-studio-branding/camis-craft-studio-02.jpg",
        titleEn: "Yarn character", titleZh: "毛线角色",
        year: "2025", mediumEn: "Illustration", mediumZh: "插画",
        related: "camis", kind: "drawing", size: "s", r: 1.8
      },
      {
        src: "assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-01.gif",
        titleEn: "Archive in motion", titleZh: "活动中的档案",
        year: "2026", mediumEn: "Screen recording", mediumZh: "屏幕记录",
        related: "her-metaphor-space", kind: "video", size: "m", r: -1
      },
      {
        src: "assets/images/projects/narrative/5.one-year-in-amoy/one-year-in-amoy-cover.jpg",
        titleEn: "One Year in Amoy", titleZh: "在厦门的一年",
        year: "2023", mediumEn: "Photograph / cover", mediumZh: "摄影 / 封面",
        related: "amoy", kind: "image", size: "l", r: 0.8
      },
      {
        kind: "text", size: "s", r: -1.8, year: "2025",
        titleEn: "They need not match", titleZh: "不必相同",
        mediumEn: "Fragment", mediumZh: "文本碎片",
        related: "her-metaphor-lab",
        textEn: "The works do not need to look the same. They belong to the same becoming.",
        textZh: "作品不必长成同一种样子。它们属于同一种正在发生的实践。"
      },
      {
        src: "assets/images/projects/visuals/3.illustration-movie-series/lamica-geniale.jpg",
        titleEn: "L'amica geniale", titleZh: "我的天才女友",
        year: "2022", mediumEn: "Vector illustration", mediumZh: "矢量插画",
        related: "scenes", kind: "drawing", size: "m", r: 2.4
      },
      {
        src: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-02.jpg",
        titleEn: "Interview pages", titleZh: "访谈页",
        year: "2025", mediumEn: "Zine sequence", mediumZh: "Zine 序列",
        related: "still-becoming", kind: "publication", size: "l", r: -0.4
      },
      {
        src: "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-03.png",
        titleEn: "Potion bottle", titleZh: "药剂瓶",
        year: "2020", mediumEn: "Object study", mediumZh: "物件研究",
        related: "velveteen", kind: "object", size: "xs", r: 2.8
      },
      {
        src: "assets/images/projects/narrative/3.beijing-illustration-series/Narrow-Alley-02.jpg",
        titleEn: "Narrow Alley", titleZh: "窄巷",
        year: "2020", mediumEn: "Digital painting", mediumZh: "数字绘画",
        related: "beijing", kind: "drawing", size: "m", r: -1.2
      },
      {
        src: "assets/images/projects/visuals/1.her-metaphor-lab branding/00.jpg",
        titleEn: "Studio mark", titleZh: "工作室标志",
        year: "2025", mediumEn: "Identity drawing", mediumZh: "识别手稿",
        related: "her-metaphor-lab", kind: "work", size: "s", r: 0.6
      },
      {
        src: "assets/images/projects/narrative/4.elderly-wellbeing-poster/elderly-wellbeing-01.jpg",
        titleEn: "Living better", titleZh: "好好生活",
        year: "2025", mediumEn: "Poster", mediumZh: "海报",
        related: "elderly", kind: "image", size: "full", r: 0
      },
      {
        src: "assets/images/projects/visuals/3.illustration-movie-series/the-end-of-the-f-world.jpg",
        titleEn: "The End of the F***ing World", titleZh: "去他妈的世界",
        year: "2023", mediumEn: "Vector illustration", mediumZh: "矢量插画",
        related: "scenes", kind: "drawing", size: "s", r: -2.6
      },
      {
        src: "assets/images/projects/narrative/5.one-year-in-amoy/Open Magazine Mockup.jpg",
        titleEn: "Opened journal", titleZh: "打开的日记",
        year: "2023", mediumEn: "Publication", mediumZh: "出版物",
        related: "amoy", kind: "publication", size: "xl", r: 1
      },
      {
        src: "assets/images/projects/visuals/4.camis-craft-studio-branding/camis-craft-studio-03.jpg",
        titleEn: "Studio object", titleZh: "工作室物件",
        year: "2025", mediumEn: "Identity application", mediumZh: "识别应用",
        related: "camis", kind: "object", size: "m", r: -0.9
      },
      {
        src: "assets/images/projects/narrative/3.beijing-illustration-series/Pedicab-04.jpg",
        titleEn: "Pedicab", titleZh: "三轮车",
        year: "2020", mediumEn: "Digital painting", mediumZh: "数字绘画",
        related: "beijing", kind: "image", size: "l", r: 1.4
      },
      {
        src: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-002=prep.png",
        titleEn: "Prep notes", titleZh: "准备笔记",
        year: "2025", mediumEn: "Sketch / notes", mediumZh: "草图 / 笔记",
        related: "still-becoming", kind: "work", size: "m", r: -1.6
      },
      {
        src: "assets/images/projects/visuals/3.illustration-movie-series/love-me-if-you-dare.jpg",
        titleEn: "Love Me If You Dare", titleZh: "如果爱请深爱",
        year: "2021", mediumEn: "Vector illustration", mediumZh: "矢量插画",
        related: "scenes", kind: "drawing", size: "xs", r: 1.1
      },
      {
        kind: "text", size: "l", r: 0.4, year: "2023",
        titleEn: "Ordinary hours", titleZh: "普通的时刻",
        mediumEn: "Observation", mediumZh: "观察",
        related: "amoy",
        textEn: "A year of daily observations — not a complete city, only the hours that stayed.",
        textZh: "一年的日常观察——不是一座完整的城市，只是留下来的那些时刻。"
      },
      {
        src: "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-05.png",
        titleEn: "Stage still", titleZh: "舞台静帧",
        year: "2020", mediumEn: "Scene illustration", mediumZh: "场景插画",
        related: "velveteen", kind: "drawing", size: "l", r: -0.5
      },
      {
        src: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-03.jpg",
        titleEn: "Closing pages", titleZh: "末页",
        year: "2025", mediumEn: "Zine page", mediumZh: "Zine 内页",
        related: "still-becoming", kind: "publication", size: "m", r: 1.7
      },
      {
        src: "assets/images/projects/visuals/3.illustration-movie-series/marvelous-mrs-maisel.jpg",
        titleEn: "The Marvelous Mrs. Maisel", titleZh: "了不起的麦瑟尔夫人",
        year: "2024", mediumEn: "Vector illustration", mediumZh: "矢量插画",
        related: "scenes", kind: "drawing", size: "s", r: -2.2
      },
      {
        src: "assets/images/projects/visuals/1.her-metaphor-lab branding/Free Glass Storefront Mockup.jpg",
        titleEn: "Storefront", titleZh: "橱窗",
        year: "2025", mediumEn: "Photograph of object", mediumZh: "物件摄影",
        related: "her-metaphor-lab", kind: "object", size: "m", r: 0.3
      },
      {
        src: "assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-02.jpg",
        titleEn: "Digital cabinet", titleZh: "数字柜橱",
        year: "2026", mediumEn: "Screenshot", mediumZh: "屏幕截图",
        related: "her-metaphor-space", kind: "image", size: "s", r: -1.3
      }
    ],

    /* ---- PROJECTS ----
       Order within each cat determines display sequence.
       Image paths are relative to index.html.       */
    projects: [
  
      /* ===== SYSTEM (6) ===== */
  
      {
        cat: "sys",
        img: "assets/images/projects/system/1-seabox/seabox-cover.jpg",
        images: [
          "assets/images/projects/system/1-seabox/seabox-01.jpg",
          "assets/images/projects/system/1-seabox/seabox-02.jpg"
        ],
        website: "https://www.seaboxdata.com/",
                id: "seabox",
        group: "design",
        mediumEn: "Website, visual system",
        mediumZh: "网站、视觉系统",
        layout: "compact",
        placeEn: "",
        placeZh: "",
titleEn: "Seaboxdata.com",
        titleZh: "Seaboxdata.com",
        subtitleEn: "A visual study of a big-data corporate site",
        subtitleZh: "一家大数据公司官网的视觉研究",
        tagsEn: ["Web Design", "Visual System"],
        tagsZh: ["网站设计", "视觉系统"],
        year: "2023",
        roleEn: "Visual & UI Designer",
        roleZh: "视觉与 UI 设计师",
        introEn: "A study in how a dated corporate website could be reorganized — visual language, information structure, and a more approachable digital presence for a big-data technology company.",
        introZh: "研究一家陈旧的企业官网如何被重新组织——视觉语言、信息结构，以及如何为一家大数据公司建立更具亲和力的数字形象。",
        descEn: "The work covered the entire website over six months: visual identity, a shared design system, information-heavy pages, responsive layouts, illustration direction, and interaction. I was interested in how dense technical content and corporate voice could coexist with clarity and warmth.",
        descZh: "历时六个月，覆盖从视觉识别、共享设计系统，到复杂信息页面、响应式布局、插画方向与交互设计的完整网站。我关心的是：在保留企业技术与专业性的同时，能否让信息层级更清晰、视觉语言更具温度。",
        creditsEn: "Visual & UI design / With a PM + designer / 2023",
        creditsZh: "视觉与 UI 设计 / 与产品经理 + 设计师合作 / 2023"
      },
  
      {
        cat: "sys",
        img: "assets/images/projects/system/2-attune/attune-cover.jpg",
        images: [
          "assets/images/projects/system/2-attune/attune-01.gif",
          "assets/images/projects/system/2-attune/attune-02.jpg",
          "assets/images/projects/system/2-attune/attune-03.jpg"
        ],
                id: "attune",
        group: "design",
        mediumEn: "Interface, research",
        mediumZh: "界面、研究",
        layout: "compact",
        placeEn: "",
        placeZh: "",
titleEn: "Attune",
        titleZh: "Attune",
        subtitleEn: "An adaptive check-in for daily moods",
        subtitleZh: "面向日常情绪的自适应应用",
        tagsEn: ["User research", "Interaction design"],
        tagsZh: ["用户研究", "交互设计"],
        year: "2026",
        roleEn: "UI / Interaction Designer",
        roleZh: "UI / 交互设计师",
        introEn: "An interface that listens to how you feel today — playful rather than diagnostic, slow enough to make room for moods that are not problems to be solved.",
        introZh: "一个愿意听你今天感受的界面——轻松多于诊断，缓慢到可以为那些不必被解决的情绪留出位置。",
        descEn: "The work began with a question: what would a mental-health interface look like if it did not treat every emotional state as something to be fixed? I designed an adaptive mood-wheel and feedback system for Gen Z, where the interface shifts its tone and content in response to the user rather than the other way around.",
        descZh: "工作从一个问题开始：如果心理健康界面不再把每一种情绪都视为需要被解决的东西，它会长什么样？我为 Gen Z 设计了一个自适应的情绪轮与反馈系统，界面跟随用户的感受调整自己的语气与内容，而不是反过来要求用户。",
        creditsEn: "UI / interaction design / Personal concept project / 2026",
        creditsZh: "UI / 交互设计 / 个人概念项目 / 2026"
      },
  
      {
        cat: "sys",
        img: "assets/images/projects/system/3-datahoo/datahoo-cover.jpg",
        images: [
          "assets/images/projects/system/3-datahoo/datahoo-01.jpg",
          "assets/images/projects/system/3-datahoo/datahoo-02.jpg",
          "assets/images/projects/system/3-datahoo/datahoo-03.jpg"
        ],
                id: "datahoo",
        group: "design",
        mediumEn: "Product interface",
        mediumZh: "产品界面",
        layout: "compact",
        placeEn: "",
        placeZh: "",
titleEn: "Datahoo",
        titleZh: "Datahoo",
        subtitleEn: "A workspace for building data visualizations",
        subtitleZh: "用于构建数据可视化的工坊",
        tagsEn: ["UI Design", "Data Visualization"],
        tagsZh: ["UI 设计", "数据可视化"],
        year: "2019",
        roleEn: "UI Designer",
        roleZh: "UI 设计师",
        introEn: "A workspace that gathers charts, templates, widgets, APIs and graphics in one place — an early exploration of how data tools can also feel composed and considered.",
        introZh: "一个把图表、模板、组件、API 与图形资源放在同一处的工作空间——关于数据工具如何也能被设计得克制与完整的早期探索。",
        descEn: "The work spanned the workspace, visualization tools, property controls, a marketplace of assets, and the supporting pages around them. I was interested in how dense operations — configuration, editing, inspection — could share one quiet visual system.",
        descZh: "工作覆盖了工作区、可视化工具、属性面板、资源市场，以及围绕它们的支持页面。我关心的是：高度密集的操作——配置、编辑、检查——如何共享同一套安静的视觉系统。",
        creditsEn: "UI design / Full product surface / 2019",
        creditsZh: "UI 设计 / 产品整体界面 / 2019"
      },
  
      {
        cat: "sys",
        img: "assets/images/projects/system/4-bughook/bughook-cover.jpg",
        images: [
          "assets/images/projects/system/4-bughook/bughook-01.gif",
          "assets/images/projects/system/4-bughook/bughook-02.jpg",
          "assets/images/projects/system/4-bughook/bughook-03.jpg"
        ],
                id: "bughook",
        group: "design",
        mediumEn: "Product concept",
        mediumZh: "产品概念",
        layout: "compact",
        placeEn: "",
        placeZh: "",
titleEn: "Bughook",
        titleZh: "Bughook",
        subtitleEn: "A lighter way to report and track bugs",
        subtitleZh: "一种更轻量的 Bug 反馈与追踪方式",
        tagsEn: ["UX/UI Design", "Product Design"],
        tagsZh: ["UX/UI 设计", "产品设计"],
        year: "2020",
        roleEn: "UI / Product Designer",
        roleZh: "UI / 产品设计师",
        introEn: "A concept for international IT teams — how a rigid technical reporting flow could become clearer, lighter, and easier to enter for the first time.",
        introZh: "面向海外 IT 团队的一个概念——把偏技术、偏固化的反馈流程，变得更清晰、更轻量，也更易于被第一次接触它的人理解。",
        descEn: "I reorganized the workflow around a simple reporting path — submitting, describing, tracking — and tried a more open, international visual language in place of the dense technical interface that came before.",
        descZh: "我把工作流围绕一条简单的反馈路径重新组织：提交、描述、追踪；以更开放、更国际化的视觉语言，替换原本密集而技术化的界面。设计关心的是降低第一次使用时的理解成本，同时保留一个工作工具应当具备的专业感与效率。",
        creditsEn: "UI / product design / Proposed concept",
        creditsZh: "UI / 产品设计 / 概念方案"
      },
  
      {
        cat: "sys",
        img: "assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-cover copy.jpg",
        images: [
          "assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-03.jpg",
          "assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-04.jpg",
          "assets/images/projects/system/5-seabox-platform/One-Stop-Development-Platform-05.jpg"
        ],
                id: "seabox-platform",
        group: "design",
        mediumEn: "B2B interface",
        mediumZh: "B2B 界面",
        layout: "compact",
        placeEn: "",
        placeZh: "",
titleEn: "Seaboxdata Development Platform",
        titleZh: "Seaboxdata 一站式开发平台",
        subtitleEn: "A workspace for one-stop data development",
        subtitleZh: "用于一站式数据开发的工作空间",
        tagsEn: ["B2B Product", "UI Design"],
        tagsZh: ["B2B 产品", "UI 设计"],
        year: "2023",
        roleEn: "UI Designer",
        roleZh: "UI 设计师",
        introEn: "A B2B development workspace where research, modeling, coding, testing and deployment share one system — built for professionals working with dense, technical data.",
        introZh: "一个让研究、建模、编码、测试与上线共享同一系统的 B2B 开发工作空间——为与高密度技术数据打交道的专业人士而设计。",
        descEn: "I designed the dashboard and functional workspaces, translating dense terminology and multi-step workflows into a structured interface. The work focused on hierarchy, state, and the relationships between tasks — making a heavy tool feel legible.",
        descZh: "我负责 Dashboard 与多个功能工作区的界面设计，把高密度的术语与多步骤工作流转译为结构化的界面系统。设计关注层级、状态与不同任务之间的关系——让一件原本沉重的工具仍然保持可读。",
        creditsEn: "UI design / B2B development platform / 2023",
        creditsZh: "UI 设计 / B2B 数据开发平台 / 2023"
      },
  
      {
        cat: "sys",
        img: "assets/images/projects/system/6-seaboxdata-dashboard/Data-Visualization-Data-Asset Management-Dashboard-01.jpg",
        images: [
          "assets/images/projects/system/6-seaboxdata-dashboard/Data-Visualization-Data-Asset Management-Dashboard.jpg",
          "assets/images/projects/system/6-seaboxdata-dashboard/Data-Visualization-Pucheng-platform-cover.jpg"
        ],
                id: "dataviz",
        group: "design",
        mediumEn: "Data visualization",
        mediumZh: "数据可视化",
        layout: "compact",
        placeEn: "",
        placeZh: "",
titleEn: "Data Visualization",
        titleZh: "数据可视化",
        subtitleEn: "Selected visualization systems",
        subtitleZh: "一组可视化设计",
        tagsEn: ["Data Visualization", "Visual Design"],
        tagsZh: ["数据可视化", "视觉设计"],
        year: "2019-2020",
        roleEn: "Visual Designer",
        roleZh: "视觉设计师",
        introEn: "A small collection of visualization projects — exploring how complex information can become distinctive and legible without losing its reading.",
        introZh: "一组关于可视化的尝试——探索复杂信息如何在不失去可读性的前提下，变得更有性格与视觉重量。",
        descEn: "Across different data contexts — charts, maps, lists, dashboards, illustrative systems — I avoided default patterns. Each piece adjusts hierarchy, proportion and encoding to the relationships inside the data.",
        descZh: "在不同的数据场景下——图表、地图、列表、Dashboard、插画式系统——我尽量避开默认模板。每一件都根据数据内部的关系重新调整层级、比例与编码方式。",
        creditsEn: "Visual design / Data visualization & visual systems",
        creditsZh: "视觉设计 / 数据可视化与视觉系统"
      },
  
      /* ===== VISUAL (5) ===== */
  
      {
        cat: "vis",
        img: "assets/images/projects/visuals/4.camis-craft-studio-branding/camis-craft-studio-cover.jpg",
        images: [
          "assets/images/projects/visuals/4.camis-craft-studio-branding/camis-craft-studio-01.jpg",
          "assets/images/projects/visuals/4.camis-craft-studio-branding/camis-craft-studio-02.jpg"
        ],
                id: "camis",
        group: "fragment",
        mediumEn: "Identity, illustration",
        mediumZh: "视觉识别、插画",
        layout: "strip",
        fragSize: "m",
        placeEn: "",
        placeZh: "",
titleEn: "Cami's Craft Studio",
        titleZh: "Cami's Craft Studio",
        subtitleEn: "A visual identity for a crochet studio",
        subtitleZh: "一个钩织工作室的视觉身份",
        tagsEn: ["Visual Identity", "Illustration"],
        tagsZh: ["视觉识别", "插画"],
        year: "2025",
        roleEn: "Designer / Illustrator",
        roleZh: "设计师 / 插画师",
        introEn: "A warm visual identity drawn from the maker herself — her curly hair, her glasses, the texture of yarn — turned into a small character-based world.",
        introZh: "一个从创作者本人出发的温暖视觉——她的卷发、眼镜、毛线的纹理——被整理成一个小小的、由角色构成的世界。",
        descEn: "I built the logo from yarn-ball forms and knitted textures, then folded the maker's features into a character that became the studio's face — illustrated across touchpoints, signage and small objects.",
        descZh: "我从毛线球的形态与编织纹理出发构建 Logo，再把创作者本人的样貌揉进一个角色，让它成为工作室的脸——出现在标识、招牌与小物件上。",
        creditsEn: "Design & illustration / 2025",
        creditsZh: "设计与插画 / 2025"
      },
  
      {
        cat: "vis",
        img: "assets/images/projects/visuals/1.her-metaphor-lab branding/her-metaphor-branding-cover.jpg",
        images: [
          "assets/images/projects/visuals/1.her-metaphor-lab branding/00.jpg",
          "assets/images/projects/visuals/1.her-metaphor-lab branding/Free Four Foils with Sticker Mockup.png",
          "assets/images/projects/visuals/1.her-metaphor-lab branding/Free Glass Storefront Mockup.jpg"
        ],
        website: "https://hermetaphor.space/",
                id: "her-metaphor-lab",
        group: "work",
        rank: 2,
        mediumEn: "Visual practice, publishing",
        mediumZh: "视觉实践、出版",
        layout: "spread",
        placeEn: "Beijing",
        placeZh: "北京",
titleEn: "Her Metaphor Lab",
        titleZh: "Her Metaphor Lab",
        subtitleEn: "An evolving collection of images, stories and metaphors",
        subtitleZh: "一个关于图像、故事与隐喻的持续收藏",
        tagsEn: ["Visual Identity", "Self-Initiated"],
        tagsZh: ["视觉识别", "个人实践"],
        year: "2025",
        roleEn: "Founder / Visual Designer",
        roleZh: "创作者 / 视觉设计师",
        introEn: "A personal visual laboratory — images, illustrations, zines and small publications — that gathers metaphors for contemporary life.",
        introZh: "一个个人的视觉实验室——图像、插画、Zine 与小型出版物——收集关于当代生活的隐喻。",
        descEn: "Her Metaphor began with questions about how we live now — material, consumer, hurried — and whether other ways of seeing could be made visible. I keep developing its visual language through metaphorical illustrations, digital pieces, publications and experimental formats, treating the work itself as a slow, growing archive.",
        descZh: "Her Metaphor 始于对“我们今天如何生活”的追问——物质的、匆忙的、被消费裹挟的——也关于其他一些观看方式能否被看见。我通过隐喻性插画、数字作品、出版物与实验性的形式慢慢发展它的视觉语言，把这件作品本身当作一个缓慢生长的档案。",
        creditsEn: "Founded and made by Yihui Zhu / 2025 —",
        creditsZh: "由朱艺卉发起与创作 / 2025 —"
      },
  
      {
        cat: "vis",
        img: "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-cover.jpg",
        images: [
          "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-01.png",
          "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-02.jpg",
          "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-03.png",
          "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-04.png",
          "assets/images/projects/visuals/2.Velveteen's Secret Potion/velveteens-secret-potion-05.png"
        ],
                id: "velveteen",
        group: "fragment",
        mediumEn: "Character, illustration",
        mediumZh: "角色、插画",
        layout: "strip",
        fragSize: "m",
        placeEn: "",
        placeZh: "",
titleEn: "Velveteen's Secret Potions",
        titleZh: "Velveteen's Secret Potions",
        subtitleEn: "A small world of character & scene illustrations",
        subtitleZh: "一组关于角色与场景的插画",
        tagsEn: ["Character Design", "Illustration"],
        tagsZh: ["角色设计", "插画"],
        year: "2020",
        roleEn: "Illustrator / Character Designer",
        roleZh: "插画师 / 角色设计师",
        introEn: "A small character world built around a collection of essential oils — six products turned into six people, gathered inside a fictional Latin-inspired talk show.",
        introZh: "围绕一组精油建立的小角色世界——六件产品变成六个人，围坐在一个虚构的、拉丁风格的对谈节目里。",
        descEn: "Each character grew from the colour and qualities of one product. I drew their personalities, their looks, and the rooms they inhabit, and let the cast meet in scenes that slowly form a quiet, slightly absurd little narrative.",
        descZh: "每一种产品的颜色与特质长成了一个人物。我画了她们的性格、外貌，以及各自所在的房间；让她们在画面里相遇，慢慢形成一个安静的、略带荒诞的小叙事。",
        creditsEn: "Illustration & character design / Client: Velveteen's Secret Potions / 2020",
        creditsZh: "插画与角色设计 / 客户：Velveteen's Secret Potions / 2020"
      },
  
      {
        cat: "vis",
        img: "assets/images/projects/visuals/3.illustration-movie-series/marvelous-mrs-maisel.jpg",
        images: [
          "assets/images/projects/visuals/3.illustration-movie-series/amilie.jpg",
          "assets/images/projects/visuals/3.illustration-movie-series/lamica-geniale.jpg",
          "assets/images/projects/visuals/3.illustration-movie-series/love-me-if-you-dare.jpg",
          "assets/images/projects/visuals/3.illustration-movie-series/moonrise-kingdom.jpg",
          "assets/images/projects/visuals/3.illustration-movie-series/the-end-of-the-f-world.jpg"
        ],
                id: "scenes",
        group: "fragment",
        explode: true,
        mediumEn: "Vector illustration",
        mediumZh: "矢量插画",
        layout: "strip",
        fragSize: "s",
        fragTitlesEn: ["Amélie", "L'amica geniale", "Love Me If You Dare", "Moonrise Kingdom", "The End of the F***ing World"],
        fragTitlesZh: ["天使爱美丽", "我的天才女友", "如果爱请深爱", "月升王国", "去他妈的世界"],
        placeEn: "",
        placeZh: "",
titleEn: "Scenes in Between",
        titleZh: "电影之间",
        subtitleEn: "Small illustrations, after cinema",
        subtitleZh: "看完电影之后画的那些小图",
        tagsEn: ["Illustration"],
        tagsZh: ["插画"],
        year: "2020-2025",
        roleEn: "Illustrator",
        roleZh: "插画师",
        introEn: "A series of vector illustrations drawn after films — small pictures that hold onto a moment, a line, a face, after the screen has gone dark.",
        introZh: "一组看完电影之后画的矢量插画——把那些留下来的瞬间、台词、面孔收进小小的画面里。",
        descEn: "I treat specific cinematic moments as starting points rather than subjects to be reproduced — pulling at mood, character and emotional subtext until a personal picture begins to form.",
        descZh: "我把特定的某个电影瞬间当作起点，而不是要被复刻的对象——顺着情绪、人物关系和画面下方的潜台词慢慢拉，直到一张属于自己的画面出现。",
        creditsEn: "Vector illustration / 2020–2025",
        creditsZh: "矢量插画 / 2020–2025"
      },
  
      /* ===== NARRATIVE (5) ===== */
  
      {
        cat: "nar",
        img: "assets/images/projects/narrative/1.still-becoming/Still-Becoming-cover.jpg",
        images: [
          "assets/images/projects/narrative/1.still-becoming/Still-Becoming-001-reseach.png",
          "assets/images/projects/narrative/1.still-becoming/Still-Becoming-002=prep.png",
          "assets/images/projects/narrative/1.still-becoming/Still-Becoming-01.jpg",
          "assets/images/projects/narrative/1.still-becoming/Still-Becoming-02.jpg",
          "assets/images/projects/narrative/1.still-becoming/Still-Becoming-03.jpg"
        ],
                id: "still-becoming",
        group: "work",
        rank: 1,
        mediumEn: "Zine, research, illustration",
        mediumZh: "Zine、研究、插画",
        layout: "folio",
        placeEn: "",
        placeZh: "",
titleEn: "Still Becoming",
        titleZh: "Still Becoming",
        subtitleEn: "A zine on identity and the long question of growing up",
        subtitleZh: "关于身份与成长的、缓慢的提问",
        tagsEn: ["Research", "Visual Narrative", "Zine"],
        tagsZh: ["研究", "视觉叙事", "Zine"],
        year: "2025",
        roleEn: "Researcher / Designer",
        roleZh: "研究者 / 设计师",
        introEn: "A research-led zine that gathers stories of becoming — quiet interviews with five peers, drawn and printed into a small book about the long question of growing up.",
        introZh: "一本以研究为主的 Zine——与五位同龄人的安静对谈，被整理、绘制、印刷成一本关于「长大」这件漫长事情的小书。",
        descEn: "The work began with conversations about adulthood, identity and the social scripts we are handed. I listened, drew, and arranged the voices — alongside research, illustrations and personal notes — into a 44-page zine that does not try to answer the question, but to make room for it.",
        descZh: "工作从关于成年、身份与社会交给我们的人生剧本的对话开始。我倾听、记录、画下来，再把这些声音与研究、插画、个人笔记一起整理成一本 44 页的 Zine——它不打算给出答案，而是为这个问题留出位置。",
        creditsEn: "Research, art direction & design / A6, 44 pages / 2025",
        creditsZh: "研究、艺术指导与设计 / A6，44 页 / 2025"
      },
  
      {
        cat: "nar",
        img: "assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-cover.jpg",
        images: [
          "assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-01.gif",
          "assets/images/projects/narrative/2.her-metaphor-space/her-metaphor-space-02.jpg"
        ],
        website: "https://hermetaphor.space/",
                id: "her-metaphor-space",
        group: "work",
        rank: 5,
        mediumEn: "Digital archive, web",
        mediumZh: "数字档案、网站",
        layout: "spread",
        placeEn: "",
        placeZh: "",
titleEn: "Her Metaphor Lab Studio",
        titleZh: "Her Metaphor Lab Studio",
        subtitleEn: "A non-linear digital archive",
        subtitleZh: "一个非线性的数字档案",
        tagsEn: ["Web Design", "Creative Coding"],
        tagsZh: ["网页设计", "创意编码"],
        year: "2026",
        roleEn: "Designer / Creative Coder",
        roleZh: "设计师 / 创意编码",
        introEn: "An experimental archive for Her Metaphor Lab — stories, working notes, and fragments gathered into a space that is meant to be wandered through, not scrolled past.",
        introZh: "Her Metaphor Lab 的一个实验性档案——故事、工作笔记、视觉片段，被收集进一个更适合漫游、而不是顺序浏览的空间。",
        descEn: "Instead of pages, the archive works like a deck of cards — each record appears on its own, by chance, the way you might pull a single image from a stack. The site was designed and built through creative coding, with the interaction itself treated as a small piece of writing.",
        descZh: "档案不像页面那样排列，而更像一叠卡——每一条记录各自出现，被偶然抽到，就像从一摞画里随手抽出一张。网站通过创意编码完成，我把交互本身也当作一段小小的写作。",
        creditsEn: "Design & creative coding / Published / 2026",
        creditsZh: "设计与创意编码 / 已上线 / 2026"
      },
  
      {
        cat: "nar",
        img: "assets/images/projects/narrative/3.beijing-illustration-series/beijing-illustration-cover.jpg",
        images: [
          "assets/images/projects/narrative/3.beijing-illustration-series/Evening-Dance-01.jpg",
          "assets/images/projects/narrative/3.beijing-illustration-series/Narrow-Alley-02.jpg",
          "assets/images/projects/narrative/3.beijing-illustration-series/Tanghulu-03.jpg",
          "assets/images/projects/narrative/3.beijing-illustration-series/Pedicab-04.jpg"
        ],
                id: "beijing",
        group: "fragment",
        explode: true,
        mediumEn: "Digital painting",
        mediumZh: "数字绘画",
        layout: "strip",
        fragSize: "m",
        fragTitlesEn: ["Evening Dance", "Narrow Alley", "Tanghulu", "Pedicab"],
        fragTitlesZh: ["傍晚的舞", "窄巷", "糖葫芦", "三轮车"],
        placeEn: "Beijing",
        placeZh: "北京",
titleEn: "Beijing, Unnoticed",
        titleZh: "北京，被忽略的角落",
        subtitleEn: "Notes on the everyday city",
        subtitleZh: "关于一座日常城市的笔记",
        tagsEn: ["Illustration", "Visual Diary"],
        tagsZh: ["插画", "视觉记录"],
        year: "2020",
        roleEn: "Illustrator",
        roleZh: "插画师",
        introEn: "A small series of paintings made in the hutongs — the people, the alleyways, the snacks, the ordinary hours that make up a quieter Beijing.",
        introZh: "一组在胡同里画下的小画——人、巷子、吃食，构成一座更安静的北京的那些普通时刻。",
        descEn: "Drawn during the pandemic, these pictures keep away from landmarks. They look, instead, at the small things that continue to happen — textured digital paintings of a more private, more familiar version of the city.",
        descZh: "画于疫情期间。这些画不写地标，只是看着仍在继续的小事——用带手感的数字绘画，记录一座更私人、更熟悉的北京。",
        creditsEn: "Digital painting / 2020",
        creditsZh: "数字绘画 / 2020"
      },
  
      {
        cat: "nar",
        img: "assets/images/projects/narrative/4.elderly-wellbeing-poster/elderly-wellbeing-cover.jpg",
        images: [
          "assets/images/projects/narrative/4.elderly-wellbeing-poster/elderly-wellbeing-01.jpg"
        ],
                id: "elderly",
        group: "fragment",
        mediumEn: "Poster, research",
        mediumZh: "海报、研究",
        layout: "folio",
        fragSize: "l",
        placeEn: "China",
        placeZh: "中国",
titleEn: "Growing Older, Living Better",
        titleZh: "老去，也要好好生活",
        subtitleEn: "A poster on ageing with care",
        subtitleZh: "一张关于体面老去的海报",
        tagsEn: ["Visual Research", "Poster"],
        tagsZh: ["视觉研究", "海报"],
        year: "2025",
        roleEn: "Designer / Researcher",
        roleZh: "设计师 / 研究者",
        introEn: "A poster that looks at ageing — not as decline, but as a phase of life that asks for warmth, attention and a wider sense of community.",
        introZh: "一张关于老去的海报——不把它当作衰退，而当作一段需要被温柔对待、也需要被看见的生活。",
        descEn: "Research into ageing in China made me notice how often emotional and social life are overlooked once basic needs are met. The image avoids the usual symbols of illness or frailty, and tries instead for a quieter, more inhabited picture of growing older.",
        descZh: "关于老龄化的研究让我注意到，在基本生活被满足之后，老年人的情感与社交状态往往被忽略。我没有使用关于疾病或衰弱的常见视觉符号，而尝试画一张更安静、更有生活痕迹的老去的画面。",
        creditsEn: "Design & research / 2025",
        creditsZh: "设计与研究 / 2025"
      },
  
      {
        cat: "nar",
        img: "assets/images/projects/narrative/5.one-year-in-amoy/one-year-in-amoy-cover.jpg",
        images: [
          "assets/images/projects/narrative/5.one-year-in-amoy/Open Magazine Mockup.jpg"
        ],
                id: "amoy",
        group: "work",
        rank: 3,
        mediumEn: "Zine, photography, illustration",
        mediumZh: "Zine、摄影、插画",
        layout: "folio",
        placeEn: "Xiamen",
        placeZh: "厦门",
titleEn: "One Year in Amoy",
        titleZh: "在厦门的一年",
        subtitleEn: "A year-long visual diary",
        subtitleZh: "一本持续一年的视觉日记",
        tagsEn: ["Zine", "Illustration", "Photography"],
        tagsZh: ["独立杂志", "插画", "摄影"],
        year: "2023",
        roleEn: "Designer / Illustrator",
        roleZh: "设计师 / 插画师",
        introEn: "A year of looking, in Xiamen — small pictures kept every day, until they made a quiet book about a place and a stretch of time.",
        introZh: "在厦门的一年里看下来的那些小画——每天记一点，直到它们慢慢长成一本关于一座城市和一段时间的安静的书。",
        descEn: "A personal diary made of photographs, drawings and small notes about the city — its streets, weather, neighbours, food. The book does not try to describe Xiamen as a whole. It keeps a record of how one year, lived closely, actually felt.",
        descZh: "一本由照片、绘画与小字组成的私人日记——关于城市的街道、天气、邻居、食物。这本书不打算完整地描述厦门，它只是把一段被仔细度过的时间，如实地留下来。",
        creditsEn: "Personal visual diary / 2023",
        creditsZh: "个人视觉日记 / 2023"
      },

      {
        cat: "nar",
        id: "gear",
        group: "work",
        rank: 4,
        img: "",
        images: [],
        titleEn: "Her Story of Gear",
        titleZh: "Her Story of Gear",
        subtitleEn: "A fictional world in progress",
        subtitleZh: "一个仍在虚构中的世界",
        tagsEn: ["Illustration", "Narrative"],
        tagsZh: ["插画", "叙事"],
        year: "2025—",
        roleEn: "Artist",
        roleZh: "艺术家",
        mediumEn: "Drawing, image, text",
        mediumZh: "绘画、图像、文字",
        layout: "folio",
        placeEn: "",
        placeZh: "",
        introEn: "A small fictional world — characters, machines, drawings — quietly speculating on care, mechanism, and the bodies that turn with them.",
        introZh: "一个慢慢长出来的小世界——人物、机械、手稿——安静地想象着照料、齿轮，以及与之一起转动的身体。",
        descEn: "Plates and notes will enter the archive as the work finds its form. For now, this record simply marks the series as part of the practice.",
        descZh: "画面与笔记会随着作品的成形陆续进入档案。此刻这一条目先在这里占一个位置，标明它属于这份实践。",
        creditsEn: "In progress",
        creditsZh: "进行中"
      }
  
    ],
  
    /* ---- ABOUT PAGE ---- */
    about: {
      photo: "assets/images/about/yihui-profile.png",
      nameEn: "Yihui Zhu",
      nameZh: "朱艺卉",
      roleEn: "visual artist / author",
      roleZh: "视觉艺术家 / 作者",
      bioEn: [
        "I am a visual artist and designer working across image-making, visual narratives, publications and digital design.",
        "My practice moves between personal work — zines, drawings, image archives, ongoing research — and commissioned design for digital products, interfaces and visual systems."
      ],
      bioZh: [
        "我是一名视觉艺术家与设计师，工作横跨图像创作、视觉叙事、独立出版与数字设计。",
        "我的实践由两条线索组成：作为个人项目的图像、Zine、插画与持续进行中的视觉研究；以及作为受委托的设计工作——数字产品、界面与视觉系统。"
      ],
      contactHeadEnHtml: "Write, if you like.",
      contactHeadZhHtml: "若愿意，可以写信。",
      servicesEn: [
        "Visual identities",
        "Web & product design",
        "Illustration",
        "Visual research & publishing"
      ],
      servicesZh: [
        "视觉识别",
        "网站与产品设计",
        "插画",
        "视觉研究与出版"
      ],
      email: "iam.yihui@gmail.com",
      emailBtnEn: "say hi!",
      emailBtnZh: "say hi!",
      availabilityEn: "Currently working remotely. Open to commissions, collaborations, and quiet conversations about images.",
      availabilityZh: "目前以远程方式工作。接受委托，也欢迎就图像、出版与共同创作展开安静的对话。",
      experience: [
        {
          years: "2024 — Present",
          titleEn: "Independent practice",
          titleZh: "独立实践",
          subtitleEn: "Designer & illustrator",
          subtitleZh: "设计师与插画师",
          bodyEn: "Selected design work alongside personal publishing, illustration and ongoing visual research.",
          bodyZh: "一边承接设计委托，一边进行个人出版、插画与持续的视觉研究。"
        },
        {
          years: "2019 — 2024",
          titleEn: "Beijing Eastern Jin Technology",
          titleZh: "北京东方金信科技",
          subtitleEn: "Visual & interface designer",
          subtitleZh: "视觉与界面设计师",
          bodyEn: "Corporate websites, digital platforms, and data dashboards.",
          bodyZh: "企业官网、数字平台与数据仪表盘。"
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
        "UI Design", "Data Viz", "Visual Identity", "Illustration",
        "Editorial", "Visual Narratives", "Figma", "Adobe", "Procreate"
      ],
      skillsZh: [
        "界面设计", "数据可视化", "视觉识别", "插画",
        "版式设计", "视觉叙事", "Figma", "Adobe", "Procreate"
      ],
      languages: [
        { name: "中文 / Chinese", levelEn: "Native", levelZh: "母语", width: 1 },
        { name: "English",       levelEn: "IELTS-7", levelZh: "IELTS-7", width: 0.9 }
      ]
    }

  };