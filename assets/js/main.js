/*
  Renders the page from SITE_CONTENT (data/content.js).
  You should not need to edit this file to update site content —
  edit data/content.js instead. See EDITING_GUIDE.md.
*/
(function () {
  "use strict";

  const C = window.SITE_CONTENT;
  if (!C) {
    document.body.innerHTML = "<p style='padding:40px;font-family:monospace;color:#ff5a36'>SITE_CONTENT failed to load — check data/content.js for a syntax error (missing comma/quote).</p>";
    return;
  }

  const $ = (sel, root) => (root || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const isBlankPlaceholder = (v) => !v || /^—.*—$/.test(String(v).trim());

  /* ---------------- Meta / Nav ---------------- */
  document.title = `${C.meta.name} — ${C.meta.role}`;

  $("#navToggle").addEventListener("click", () => {
    $("#navLinks").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => $("#navLinks").classList.remove("open"))
  );

  /* ---------------- Theme toggle ---------------- */
  const SUN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
  const MOON_ICON = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const themeToggle = $("#themeToggle");
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }
  function paintThemeToggle() {
    const isLight = currentTheme() === "light";
    themeToggle.innerHTML = isLight ? MOON_ICON : SUN_ICON;
    themeToggle.title = isLight ? "Switch to dark theme" : "Switch to light theme";
  }
  paintThemeToggle();
  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "light" ? "dark" : "light";
    if (next === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try { localStorage.setItem("theme", next); } catch (e) {}
    paintThemeToggle();
  });

  /* ---------------- Hero ---------------- */
  $("#heroName").textContent = C.meta.name;
  $("#heroRole").textContent = C.meta.role;
  const heroSub = $("#heroSub");
  if (C.hero.hookLines && C.hero.hookLines.length) {
    const lineEls = C.hero.hookLines.map((line) => {
      const span = el("span", "hook-line", esc(line));
      heroSub.appendChild(span);
      return span;
    });
    // Equalize visual line width with tiny per-letter spacing instead of
    // text-align:justify, which stretches word gaps unevenly and looks bad
    // on short lines. A fraction-of-a-pixel letter-spacing tweak per line
    // reads as normal text while still lining up all 3 right edges.
    // Measured via canvas (not DOM rects) since a block-level nowrap span's
    // own box width doesn't shrink to its overflowing text content.
    const measureCanvas = document.createElement("canvas").getContext("2d");
    const equalize = () => {
      const font = getComputedStyle(lineEls[0]).font;
      measureCanvas.font = font;
      const widths = C.hero.hookLines.map((line) => measureCanvas.measureText(line).width);
      const target = Math.max(...widths);
      lineEls.forEach((s, i) => {
        const len = C.hero.hookLines[i].length;
        const spacing = len > 1 ? (target - widths[i]) / (len - 1) : 0;
        s.style.letterSpacing = spacing.toFixed(3) + "px";
      });
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(equalize);
    else equalize();
    window.addEventListener("resize", equalize);
  } else {
    heroSub.textContent = C.hero.hook || "";
  }

  // Box 1 is generated from the Thesis & Publications data, not authored by
  // hand — it's always accurate and doubles as a click-to-expand summary.
  const allPubs = (C.theses || []).flatMap((t) =>
    (t.publications || []).map((p) => ({ ...p, thesisTitle: t.title, thesisLevel: t.level }))
  );
  const statStrip = $("#statStrip");
  const pubStat = el("button", "stat stat-clickable");
  pubStat.type = "button";
  pubStat.innerHTML = `<div class="stat-value">${allPubs.length}</div><div class="stat-label">publications — click for details</div>`;
  statStrip.appendChild(pubStat);

  const statPopover = $("#statPopover");
  function renderPubPopover() {
    const rows = allPubs.map((p) => {
      if (isBlankPlaceholder(p.title)) {
        return `<li class="pub-item pub-placeholder"><div class="pub-meta">${esc(p.thesisLevel)}</div><span class="needs-input">— add publication details —</span></li>`;
      }
      const isLink = !isBlankPlaceholder(p.url);
      return `<li class="pub-item">
        <div class="pub-meta">${esc(p.thesisLevel)}</div>
        <div class="pub-title">${isLink ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)} →</a>` : esc(p.title)}</div>
        <div class="pub-meta">${esc(p.venue)}${p.status ? ` — <span class="pub-status">${esc(p.status)}</span>` : ""}</div>
      </li>`;
    }).join("");
    statPopover.innerHTML = `
      <div class="stat-popover-head">Publications<button type="button" class="stat-popover-close" id="statPopoverClose" aria-label="Close">✕</button></div>
      <ul class="pub-list">${rows || `<li class="pub-item pub-placeholder"><span class="needs-input">— add publication details —</span></li>`}</ul>
    `;
    $("#statPopoverClose").addEventListener("click", (e) => { e.stopPropagation(); closePopover(); });
  }
  function openPopover() { renderPubPopover(); statPopover.hidden = false; pubStat.classList.add("active"); }
  function closePopover() { statPopover.hidden = true; pubStat.classList.remove("active"); }
  pubStat.addEventListener("click", (e) => {
    e.stopPropagation();
    statPopover.hidden ? openPopover() : closePopover();
  });
  document.addEventListener("click", (e) => {
    if (!statPopover.hidden && !statPopover.contains(e.target) && e.target !== pubStat) closePopover();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePopover(); });

  C.hero.stats.forEach((s) => {
    const stat = el(s.link ? "button" : "div", `stat${s.link ? " stat-clickable" : ""}`);
    if (s.link) stat.type = "button";
    const isPh = s.isPlaceholder || isBlankPlaceholder(s.value);
    stat.innerHTML = isPh
      ? `<div class="stat-value needs-input">add value</div><div class="stat-label needs-input">${esc(s.label)}</div>`
      : `<div class="stat-value">${esc(s.value)}${s.unit ? `<span class="unit">${esc(s.unit)}</span>` : ""}</div><div class="stat-label">${esc(s.label)}</div>`;
    if (s.link) stat.addEventListener("click", () => document.querySelector(s.link)?.scrollIntoView({ behavior: "smooth" }));
    statStrip.appendChild(stat);
  });

  /* ---------------- About ---------------- */
  const aboutText = $("#aboutText");
  C.about.paragraphs.forEach((p) => aboutText.appendChild(el("p", null, esc(p))));

  $("#profilePhoto").src = C.meta.profileImage;
  $("#uniName").textContent = C.meta.university;
  $("#uniLogo").src = C.meta.universityLogo;
  const gpa = (C.education && C.education[0] && C.education[0].score) || "";
  const locationLine = [C.meta.location, gpa].filter(Boolean).join(" · ");
  $("#uniMeta").innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>
    <span>${esc(locationLine)}</span>
  `;

  const CONTACT_ICONS = {
    Email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
    LinkedIn: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  };
  const navSocial = $("#navSocial");
  const navSocialRows = [
    ["Email", `mailto:${C.meta.email}`],
    ["LinkedIn", C.meta.linkedin]
  ];
  navSocialRows.forEach(([label, href]) => {
    const placeholder = isBlankPlaceholder(href);
    const sizeClass = label === "LinkedIn" ? " nav-social-icon-tight" : "";
    const a = el("a", `nav-social-icon${sizeClass}${placeholder ? " needs-input" : ""}`, CONTACT_ICONS[label]);
    a.href = placeholder ? "#" : href;
    a.setAttribute("aria-label", label);
    if (!placeholder) { a.target = "_blank"; a.rel = "noopener"; }
    navSocial.appendChild(a);
  });

  /* ---------------- Projects ---------------- */
  const projectGrid = $("#projectGrid");
  const fsaeGrid = $("#fsaeGrid");

  function metricHtml(m) {
    const isPh = m.isPlaceholder || isBlankPlaceholder(m.value);
    return `<div class="metric">
      <div class="metric-value ${isPh ? "placeholder" : ""}">${isPh ? "add value" : esc(m.value)}</div>
      <div class="metric-label">${esc(m.label)}</div>
    </div>`;
  }

  function linkHtml(l) {
    const isPh = l.isPlaceholder || isBlankPlaceholder(l.url);
    return `<a class="${isPh ? "placeholder" : ""}" href="${isPh ? "#" : esc(l.url)}" ${isPh ? "" : 'target="_blank" rel="noopener"'}>${esc(l.label)} ${isPh ? "(add link)" : "→"}</a>`;
  }

  /* ---------------- Layered detail panel (modal stack) ---------------- */
  const modal = $("#modal"), modalBody = $("#modalBody"), modalCrumbs = $("#modalCrumbs"), modalBack = $("#modalBack");
  let stack = [];
  function paintModal() {
    const v = stack[stack.length - 1];
    modalCrumbs.textContent = stack.length > 1 ? stack.map((s) => s.crumb).join("  /  ") : "";
    modalBack.style.visibility = stack.length > 1 ? "visible" : "hidden";
    modalBody.innerHTML = "";
    modalBody.appendChild(v.render());
    $(".modal-panel").scrollTop = 0;
  }
  function pushView(view) {
    stack.push(view);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    paintModal();
  }
  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    stack = [];
  }
  function popView() {
    stack.pop();
    if (stack.length) paintModal(); else closeModal();
  }
  modalBack.addEventListener("click", popView);
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  const makeTile = (html, onOpen, cls) => {
    const t = el("article", "tile " + (cls || ""));
    t.tabIndex = 0;
    t.setAttribute("role", "button");
    t.innerHTML = html;
    t.addEventListener("click", onOpen);
    t.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } });
    return t;
  };

  const metricsRow = (ms) => ms && ms.length ? `<div class="metric-row">${ms.map(metricHtml).join("")}</div>` : "";
  const shortTitle = (s) => s.length > 32 ? s.slice(0, 30) + "…" : s;

  function subDetail(p, s) {
    const box = el("div", "detail");
    box.innerHTML = `
      <div class="detail-hero"><img src="${esc(s.image)}" alt="${esc(s.title)}"></div>
      <div class="detail-kicker">${esc(p.title)}</div>
      <h2 class="detail-title">${esc(s.title)}</h2>
      ${metricsRow(s.metrics)}
      <h4 class="detail-sub">Development highlights</h4>
      <ul class="detail-list">${s.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
    `;
    return box;
  }

  function projectDetail(p) {
    const subs = (C.subprojects && C.subprojects[p.id]) || [];
    const box = el("div", "detail");
    box.innerHTML = `
      <div class="detail-hero${p.imageFit === "contain" ? " detail-hero-contain" : ""}"><img src="${esc(p.image)}" alt="${esc(p.title)}"></div>
      <div class="detail-kicker">${esc(p.period)} · ${esc(p.org)}</div>
      <h2 class="detail-title">${esc(p.title)}</h2>
      <p class="detail-summary">${esc(p.summary)}</p>
      <div class="project-tags">${p.tags.map((t) => `<span class="ptag">${esc(t)}</span>`).join("")}<span class="ptag">${esc(p.context)}</span></div>
      ${metricsRow(p.metrics)}
    `;
    if (subs.length) {
      const h = el("h4", "detail-sub", "Disciplines &amp; sub-projects — open one for the full detail");
      const grid = el("div", "tile-grid");
      subs.forEach((s) => {
        grid.appendChild(makeTile(`
          <div class="tile-image"><img src="${esc(s.image)}" alt="${esc(s.title)}" loading="lazy"></div>
          <div class="tile-body">
            <h3>${esc(s.title)}</h3>
            <ul class="tile-hl">${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
            <div class="tile-cta">Open detail →</div>
          </div>`, () => pushView({ crumb: shortTitle(s.title), render: () => subDetail(p, s) })));
      });
      box.appendChild(h); box.appendChild(grid);
    } else {
      const h = el("h4", "detail-sub", "Development highlights");
      const ul = el("ul", "detail-list", p.bullets.map((b) => `<li>${esc(b)}</li>`).join(""));
      box.appendChild(h); box.appendChild(ul);
    }
    if (p.links && p.links.length) box.appendChild(el("div", "project-links", p.links.map(linkHtml).join("")));
    if (p.tools && p.tools.length) {
      const h = el("h4", "detail-sub", "Tools Used");
      const row = el("div", "tools-row", p.tools.map(toolBadge).join(""));
      box.appendChild(h); box.appendChild(row);
    }
    return box;
  }

  function toolBadge(t) {
    return t.logo
      ? `<div class="tool-badge" title="${esc(t.name)}"><img src="${esc(t.logo)}" alt="${esc(t.name)}"></div>`
      : `<div class="tool-badge tool-badge-text">${esc(t.name)}</div>`;
  }

  function highlightChips(p) {
    return (p.metrics || []).filter((m) => !m.isPlaceholder && !isBlankPlaceholder(m.value)).slice(0, 3)
      .map((m) => `<span class="hl"><b>${esc(m.value)}</b> ${esc(m.label)}</span>`).join("");
  }

  function projectTile(p) {
    return makeTile(`
      <div class="tile-image${p.imageFit === "contain" ? " tile-image-contain" : ""}"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"></div>
      <div class="tile-body">
        <div class="project-meta"><span>${esc(p.period)}</span></div>
        <h3>${esc(p.title)}</h3>
        <div class="project-org">${esc(p.org)}</div>
        <p class="tile-summary">${esc(p.summary)}</p>
        <div class="hl-row">${highlightChips(p)}</div>
        <div class="tile-cta">View project →</div>
      </div>`, () => pushView({ crumb: shortTitle(p.title), render: () => projectDetail(p) }), "project-tile");
  }

  function renderProjects() {
    // Formula Student projects (context: "Formula Student") render in the
    // dedicated FSAE section instead of here, so each project appears once.
    fsaeGrid.innerHTML = "";
    projectGrid.innerHTML = "";
    C.projects.forEach((p) => {
      const grid = p.context === "Formula Student" ? fsaeGrid : projectGrid;
      grid.appendChild(projectTile(p));
    });
  }
  renderProjects();

  /* ---------------- Software & Manufacturing showcase ---------------- */
  function toolkitDetail(kind, item) {
    const box = el("div", "detail");
    box.innerHTML = `
      <div class="detail-kicker">${esc(kind)}</div>
      <h2 class="detail-title">${esc(item.name)}</h2>
      <div class="skill-items">${item.tools.map((t) => `<span class="skill-item">${esc(t)}</span>`).join("")}</div>
      <h4 class="detail-sub">Evidence</h4>
      <div class="tile-grid">${(item.gallery || []).map((g) => `
        <figure class="gallery-item"><img src="${esc(g.image)}" alt="${esc(g.caption)}" loading="lazy"><figcaption class="${isBlankPlaceholder(g.caption) ? "needs-input" : ""}">${esc(g.caption)}</figcaption></figure>`).join("")}</div>
    `;
    return box;
  }
  function renderToolkit(gridSel, kind, items) {
    const grid = $(gridSel);
    (items || []).forEach((it) => {
      grid.appendChild(makeTile(`
        <div class="tile-image"><img src="${esc(it.image)}" alt="${esc(it.name)}" loading="lazy"></div>
        <div class="tile-body">
          <h3>${esc(it.name)}</h3>
          <div class="tile-caption ${isBlankPlaceholder(it.caption) ? "needs-input" : ""}">${esc(it.caption)}</div>
          <div class="tool-chips">${it.tools.slice(0, 4).map((t) => `<span class="mini-chip">${esc(t)}</span>`).join("")}</div>
        </div>`, () => pushView({ crumb: it.name, render: () => toolkitDetail(kind, it) }), "tool-tile"));
    });
  }
  renderToolkit("#softwareGrid", "Software", C.toolkit && C.toolkit.software);
  renderToolkit("#manufacturingGrid", "Manufacturing", C.toolkit && C.toolkit.manufacturing);

  /* ---------------- Experience (timeline bar + chronological 3-up) ---------------- */
  const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  function parsePeriod(period) {
    const parts = period.split(/[–-]/).map((s) => s.trim());
    const parseOne = (s) => {
      const m = s.match(/([A-Za-z]+)\s+(\d{4})/);
      if (!m) return null;
      const mi = MONTHS.indexOf(m[1].slice(0, 3).toLowerCase());
      return { year: +m[2], month: mi < 0 ? 0 : mi, index: +m[2] * 12 + (mi < 0 ? 0 : mi) };
    };
    const start = parseOne(parts[0]);
    const isPresent = /present/i.test(parts[1] || "");
    const end = isPresent ? null : parseOne(parts[1] || parts[0]);
    return { start, end: end || start, isPresent };
  }

  const expByDate = [...C.experience].sort((a, b) => parsePeriod(a.period).start.index - parsePeriod(b.period).start.index);

  function expDetail(e, linkedProject) {
    const box = el("div", "detail");
    box.innerHTML = `
      <div class="detail-hero"><img src="${esc(e.productImage || e.logo || "assets/img/placeholder-project.svg")}" alt="${esc(e.org)}"></div>
      <div class="exp-title-block">
        ${e.logo ? `<img class="exp-logo-big" src="${esc(e.logo)}" alt="${esc(e.org)} logo">` : ""}
        <div class="exp-title-text">
          <div class="exp-duration">${esc(e.period)} · ${esc(e.location)}</div>
          <h2 class="detail-title">${esc(e.role)}</h2>
          <div class="exp-org-line">${esc(e.org)}</div>
        </div>
      </div>
      <p class="detail-summary">${esc(e.summary || "")}</p>
      ${e.product ? `<div class="project-tags"><span class="ptag">${esc(e.product)}</span></div>` : ""}
      ${linkedProject ? metricsRow(linkedProject.metrics) : ""}
    `;
    const h = el("h4", "detail-sub", "Development highlights");
    const ul = el("ul", "detail-list", e.bullets.map((b) => `<li>${esc(b)}</li>`).join(""));
    box.appendChild(h);
    box.appendChild(ul);
    if (linkedProject) {
      const linkRow = el("div", "project-links");
      const a = el("a", null, "Full project write-up →");
      a.href = "#";
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        pushView({ crumb: shortTitle(linkedProject.title), render: () => projectDetail(linkedProject) });
      });
      linkRow.appendChild(a);
      box.appendChild(linkRow);
    }
    return box;
  }

  const expList = $("#expList");
  expByDate.forEach((e) => {
    const linkedProject = e.projectRef ? C.projects.find((p) => p.id === e.projectRef) : null;
    const summary = e.summary || e.bullets[0];
    expList.appendChild(makeTile(`
      <div class="tile-image"><img src="${esc(e.productImage || e.logo || "assets/img/placeholder-project.svg")}" alt="${esc(e.org)}" loading="lazy"></div>
      <div class="tile-body">
        <div class="exp-title-block">
          ${e.logo ? `<img class="exp-logo-big" src="${esc(e.logo)}" alt="${esc(e.org)} logo">` : ""}
          <div class="exp-title-text">
            <h3>${esc(e.role)}</h3>
            <div class="exp-org-line">${esc(e.org)}</div>
            <div class="exp-location-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>
              <span>${esc(e.location)}</span>
            </div>
          </div>
        </div>
        <p class="tile-summary">${esc(summary)}</p>
        <div class="hl-row">${linkedProject ? highlightChips(linkedProject) : ""}</div>
        <div class="tile-cta">View role →</div>
      </div>
      <div class="exp-date-badge">${esc(e.period)}</div>`, () => pushView({ crumb: shortTitle(e.role), render: () => expDetail(e, linkedProject) }), "project-tile exp-tile"));
  });

  /* ---------------- Thesis & Publications ---------------- */
  const pubListHtml = (pubs) => (pubs || []).map((p) => {
    if (isBlankPlaceholder(p.title)) {
      return `<li class="pub-item pub-placeholder"><span class="needs-input">— add publication details —</span></li>`;
    }
    const isLink = !isBlankPlaceholder(p.url);
    return `<li class="pub-item">
      <div class="pub-title">${isLink ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)} →</a>` : esc(p.title)}</div>
      <div class="pub-meta">${esc(p.venue)}${p.status ? ` — <span class="pub-status">${esc(p.status)}</span>` : ""}</div>
    </li>`;
  }).join("");

  function thesisDetail(t) {
    const box = el("div", "detail");
    box.innerHTML = `
      ${t.image ? `<div class="detail-hero thesis-detail-hero"><img src="${esc(t.image)}" alt="${esc(t.title)}"></div>` : ""}
      <div class="thesis-level">${esc(t.level)}</div>
      <div class="detail-kicker">${esc(t.period)} · ${esc(t.org)}</div>
      <h2 class="detail-title">${esc(t.title)}</h2>
      <p class="detail-summary">${esc(t.summary)}</p>
      ${metricsRow(t.metrics)}
      <h4 class="detail-sub">Development highlights</h4>
      <ul class="detail-list">${t.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="pub-block">
        <div class="pub-block-label">Publications</div>
        <ul class="pub-list">${pubListHtml(t.publications) || `<li class="pub-item pub-placeholder"><span class="needs-input">— add publication details —</span></li>`}</ul>
      </div>
    `;
    return box;
  }

  function thesisTile(t) {
    return makeTile(`
      <div class="tile-image thesis-tile-image"><img src="${esc(t.image || "assets/img/placeholder-project.svg")}" alt="${esc(t.title)}" loading="lazy"></div>
      <div class="tile-body">
        <div class="project-meta"><span>${esc(t.period)}</span></div>
        <div class="thesis-level thesis-level-tile">${esc(t.level)}</div>
        <h3>${esc(t.title)}</h3>
        <div class="project-org">${esc(t.org)}</div>
        <p class="tile-summary">${esc(t.summary)}</p>
        <div class="hl-row">${highlightChips(t)}</div>
        <div class="tile-cta">View thesis →</div>
      </div>`, () => pushView({ crumb: shortTitle(t.title), render: () => thesisDetail(t) }), "project-tile");
  }

  const thesisGrid = $("#thesisGrid");
  (C.theses || []).forEach((t) => thesisGrid.appendChild(thesisTile(t)));

  /* ---------------- Leadership ---------------- */
  const leadershipTimeline = $("#leadershipTimeline");
  (C.leadership || []).forEach((l) => {
    const item = el("div", "tl-item");
    item.innerHTML = `
      <div class="tl-period">${esc(l.period)}</div>
      <div>
        <h3 class="tl-role">${esc(l.role)}</h3>
        <div class="tl-org">${esc(l.org)}</div>
        <ul>${l.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      </div>
    `;
    leadershipTimeline.appendChild(item);
  });

  /* ---------------- Education + Awards ---------------- */
  const eduList = $("#eduList");
  C.education.forEach((ed) => {
    const card = el("div", "edu-card");
    card.innerHTML = `
      <h3>${esc(ed.school)}</h3>
      <div class="edu-degree">${esc(ed.degree)}</div>
      <div class="edu-meta"><span>${esc(ed.score)}</span><span>${esc(ed.period)}</span></div>
      ${ed.thesis ? `<div class="edu-thesis"><span class="edu-thesis-label">Thesis</span>${esc(ed.thesis)}</div>` : ""}
      ${ed.teaching ? `<div class="edu-teaching">${esc(ed.teaching)}</div>` : ""}
      ${ed.coursework && ed.coursework.length ? `
        <div class="edu-coursework-label">Coursework</div>
        <div class="edu-coursework">${ed.coursework.map((c) => `<span class="skill-item">${esc(c)}</span>`).join("")}</div>
      ` : ""}
    `;
    eduList.appendChild(card);
  });

  const awardList = $("#awardList");
  C.awards.forEach((a) => {
    const li = el("li", "award-item");
    li.innerHTML = `
      <div><div class="award-title">${esc(a.title)}</div><div class="award-org">${esc(a.org)}</div></div>
      <div class="award-date">${esc(a.date)}</div>
    `;
    awardList.appendChild(li);
  });

  /* ---------------- Skills ---------------- */
  const skillsGrid = $("#skillsGrid");
  C.skills.forEach((cat) => {
    const block = el("div", "skill-cat");
    block.innerHTML = `<h4>${esc(cat.category)}</h4><div class="skill-items">${cat.items.map((i) => `<span class="skill-item">${esc(i)}</span>`).join("")}</div>`;
    skillsGrid.appendChild(block);
  });

  /* ---------------- Decorative background drawings ---------------- */
  // Sparse, low-opacity engineering-drawing views scattered across content
  // sections (never in #about, which has bare paragraph text with no card
  // behind it). Each sits in a section corner and is free to be covered by
  // that section's cards — see .bg-drawing in style.css.
  // Each entry gives explicit top/bottom/left/right offsets (px, relative to
  // its section) instead of a generic corner, so placement can be tuned
  // precisely — e.g. pushed down past a grid's cards, or bled off-page.
  const BG_DRAWINGS = [
    { section: "experience", image: "motor-mount-front.png", top: 60, right: -40, width: 620, rotate: -6 },
    { section: "experience", image: "front-upright-front.png", bottom: 10, left: -40, width: 580, rotate: 4 },
    { section: "fsae", image: "chassis-tubes-side.png", bottom: -340, right: -40, width: 760, rotate: -3 },
    { section: "thesis", image: "rocker-connect-front.png", bottom: 10, left: -40, width: 580, rotate: -5 },
    { section: "projects", image: "a-arm-upper-front.png", top: 60, right: -40, width: 520, rotate: 6 },
    { section: "projects", image: "roll-damper-front.png", top: 800, left: -60, width: 900, rotate: -35 },
    { section: "projects", image: "front-wing-profile.png", bottom: 10, right: -40, width: 340, rotate: 5 },
    { section: "projects", image: "rack-pinion-side.png", bottom: -35, left: -40, width: 700, rotate: 3 },
    { section: "education", image: "brake-disc-front.png", bottom: 10, left: -40, width: 640, rotate: 4 },
    { section: "toolkit", image: "steering-wheel-front.png", bottom: 10, left: -40, width: 640, rotate: -5 },
    { section: "toolkit", image: "rear-upright-front.png", top: 290, right: -40, width: 420, rotate: 5 },
    { section: "skills", image: "front-upright-struct-front.png", bottom: 10, right: -40, width: 600, rotate: 4 }
  ];
  BG_DRAWINGS.forEach((d) => {
    const host = $("#" + d.section);
    if (!host) return;
    const img = el("img", "bg-drawing");
    img.src = "assets/img/bg-drawings/" + d.image;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.style.width = d.width + "px";
    ["top", "bottom", "left", "right"].forEach((k) => { if (d[k] !== undefined) img.style[k] = d[k] + "px"; });
    img.style.transform = `rotate(${d.rotate}deg)`;
    host.appendChild(img);
  });

  /* ---------------- Footer ---------------- */
  $("#footerText").textContent = `© ${new Date().getFullYear()} ${C.meta.name}`;
})();

