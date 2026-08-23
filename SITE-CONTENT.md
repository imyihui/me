# SITE-CONTENT.md — Editable Content Guide

**All site content lives in `site-content.js`.** Edit that one file to change text, images, projects, and everything else — then save and refresh `index.html`.

---

## Quick Reference

| Section | Object | What goes there |
|---|---|---|
| Meta | `SITE.meta` | Site title |
| Navigation | `SITE.nav` | Nav labels (English + Chinese) |
| Homepage | `SITE.home` | Hero text, name, bio |
| Section headers | `SITE.sections` | System / Visual / Narrative titles + intros |
| Projects | `SITE.projects` | All project data (13 total: 6 sys, 4 vis, 3 nar) |
| About | `SITE.about` | Bio, contact, CV, skills, languages |

---

## 1. Meta

```javascript
meta: {
  title: "Yihui Zhu — Author Designer"
}
```

Browser tab title.

---

## 2. Navigation

```javascript
nav: [
  { id: "home",  labelEn: "Index",    labelZh: "首页" },
  { id: "sys",   labelEn: "System",    labelZh: "系统" },
  { id: "vis",   labelEn: "Visual",    labelZh: "视觉" },
  { id: "nar",   labelEn: "Narrative", labelZh: "叙事" },
  { id: "about", labelEn: "About",    labelZh: "关于" }
]
```

- `id` must match the section's CSS id (`home`, `sys`, `vis`, `nar`, `about`)
- `labelEn` / `labelZh` are shown when English / Chinese mode is active

---

## 3. Homepage

```javascript
home: {
  eyebrowEn:  "Portfolio — 2026",
  eyebrowZh:  "作品集 — 2026",
  nameEnHtml: "Yihui <em>Zhu</em>",
  nameZhHtml: "朱<em>艺卉</em>",
  roleEn:     "Author Designer",
  roleZh:     "视觉叙事设计师",
  bioEn:      "Design between systems and stories.",
  bioZh:      "在系统与叙事之间做设计。",
  locationEn: "Beijing · Remote",
  locationZh: "北京 · 远程"
}
```

- `nameEnHtml` / `nameZhHtml` support inline HTML (e.g. `<em>` for italic accent color)

---

## 4. Section Headers

```javascript
sections: [
  {
    id:          "sys",
    titleEnHtml: "System &amp; <em>Interfaces</em>",
    titleZhHtml: "系统与<em>界面</em>",
    introEn:     "Interfaces and digital systems — making complex information feel clear.",
    introZh:     "界面与数字系统——让复杂信息变得清晰易懂。"
  },
  // ... vis, nar
]
```

- `id` ties the section to the nav
- `titleEnHtml` / `titleZhHtml` support `<em>` for italic accent color
- `intro` appears below the section title

---

## 5. Projects (the main content block)

### Adding / removing projects

Find the `projects: [...]` array. Each object is one project.

**To add a project:** copy an existing block, paste it in the right category, and fill it in.

**To remove a project:** delete its entire object from the array.

**To reorder:** cut and paste within the array. Projects display in the order they appear. Projects are filtered by `cat` into their sections automatically — no need to change anything else.

### Project object fields

```javascript
{
  cat:        "sys",                          // sys | vis | nar
  img:        "path/to/cover.jpg",           // cover image path (relative to index.html)
  images:     ["path/to/01.jpg", ...],       // detail images (leave [] if none)
  website:    "https://example.com/",        // OPTIONAL — clickable link in popup header
  titleEn:    "Seabox",                       // English title
  titleZh:    "Seabox",                       // Chinese title
  subtitleEn: "Corporate Data Platform Website",  // English subtitle
  subtitleZh: "企业数据平台网站设计",            // Chinese subtitle
  tagsEn:     ["Web Design", "Data Viz"],     // English tags (array)
  tagsZh:     ["网站设计", "数据可视化"],        // Chinese tags (array, same length as tagsEn)
  year:       "2023",                         // year string
  roleEn:     "Visual Designer",              // English role
  roleZh:     "视觉设计师",                    // Chinese role
  introEn:    "Designing clarity for complex data systems.",  // short pull quote
  introZh:    "建立视觉规范，使用户理解复杂的数据系统。",
  descEn:     "Full English description.",      // paragraph for popup
  descZh:     "中文描述。",
  creditsEn:  "Role: Visual Designer / Client: Seabox / Year: 2023",  // footer credit line
  creditsZh:  "角色：视觉设计师 / 客户：Seabox / 年份：2023"
}
```

### Image path rules

- Paths are **relative to `index.html`** (not this file)
- Start from `yihuizhu-portfolio/assets/images/...`
- `.gif` files are automatically detected and rendered as `<video>` (autoplay, loop)
- If an image file is missing, a placeholder will show instead

### Current project list (13 total)

**System (6)**
1. Seabox (1-seabox)
2. Attune (2-attune)
3. Datahoo (3-datahoo)
4. Bughook (4-bughook)
5. Seabox One-Stop Platform (5-seabox-platform)
6. Seabox Data Dashboard (6-seaboxdata-dashboard)

**Visual (4)**
7. Beijing Illustration Series (1-beijing-illustration-series)
8. Velveteen's Secret Potions (Velveteen's Secret Potion)
9. Her Metaphor Lab Branding (her-metaphor-lab branding)
10. Movie Scene Illustration (illustration-movie-series)

**Narrative (3)**
11. Still Becoming (still-becoming)
12. Her Metaphor Lab Studio (her-metaphor-space)
13. Happy Elderly Poster (elderly-wellbeing-poster)

---

## 6. About Page

```javascript
about: {
  photo:       "yihuizhu-portfolio/assets/images/about/yihui-profile.png",
  nameEn:      "Yihui Zhu",
  nameZh:      "朱艺卉",
  roleEn:      "Author Designer",
  roleZh:      "视觉叙事设计师",
  bioEn:       ["Line one.", "Line two."],   // array of paragraphs
  bioZh:       ["第一行。", "第二行。"],
  contactHeadEnHtml: "Let's make something <em>together.</em>",
  contactHeadZhHtml: "一起<em>做点什么。</em>",
  servicesEn:  ["Brand identity", "Website design", ...],
  servicesZh:  ["品牌视觉设计", "网站设计", ...],
  email:       "iam.yihui@gmail.com",
  emailBtnEn:  "Write to me",
  emailBtnZh:  "发邮件",
  availabilityEn: "Currently working remotely...",
  availabilityZh: "我可以远程参与异地项目合作。",
  experience:  [{ years, titleEn/Zh, subtitleEn/Zh, bodyEn/Zh }, ...],
  education:   { yearsLabelEn/Zh, titleEn/Zh, schoolEn/Zh },
  skillsEn:    ["UI Design", "Data Viz", ...],
  skillsZh:    ["界面设计", "数据可视化", ...],
  languages:   [{ name, levelEn, levelZh, width }, ...]
}
```

### Language bar widths

`width` is a decimal from 0 to 1 (e.g. `0.9` = 90%) controlling how wide the green bar appears in the language skills section.

---

## Tips

- **Save and refresh** — no build step needed
- **Test image paths** — check that cover images exist at the paths you write
- **GIF files** — if your cover or detail image is a `.gif`, it will auto-play as a video
- **Section count** — the work count ("6 projects") updates automatically based on how many projects have the matching `cat`
- **No serial numbers** — the display does not show project numbers, only the order they appear in the array
