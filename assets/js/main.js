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
  $("#nav-name").textContent = C.meta.name.toUpperCase();

  $("#navToggle").addEventListener("click", () => {
    $("#navLinks").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => $("#navLinks").classList.remove("open"))
  );

  /* ---------------- Hero ---------------- */
  $("#heroName").textContent = C.meta.name;
  $("#heroRole").textContent = C.meta.role;
  $("#heroSub").innerHTML = (C.hero.hookLines && C.hero.hookLines.length
    ? C.hero.hookLines.map(esc).join("<br>")
    : esc(C.hero.hook || ""));

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
      if (p.isPlaceholder || isBlankPlaceholder(p.url)) {
        return `<li class="pub-item pub-placeholder"><div class="pub-meta">${esc(p.thesisLevel)}</div><span class="needs-input">— add publication details —</span></li>`;
      }
      return `<li class="pub-item">
        <div class="pub-meta">${esc(p.thesisLevel)}</div>
        <div class="pub-title"><a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)} →</a></div>
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
    const stat = el("div", "stat");
    stat.innerHTML = `<div class="stat-value">${esc(s.value)}${s.unit ? `<span class="unit">${esc(s.unit)}</span>` : ""}</div><div class="stat-label">${esc(s.label)}</div>`;
    statStrip.appendChild(stat);
  });

  /* ---------------- About ---------------- */
  const aboutText = $("#aboutText");
  C.about.paragraphs.forEach((p) => aboutText.appendChild(el("p", null, esc(p))));

  $("#profilePhoto").src = C.meta.profileImage;
  $("#uniLogo").src = C.meta.universityLogo;
  $("#uniName").textContent = C.meta.university;

  $("#locationBadge").innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>
    <span>${esc(C.meta.location)}</span>
  `;

  const CONTACT_ICONS = {
    Email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg>`,
    Phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.6 2.5h3l1.3 4.2-2.2 1.7a13.4 13.4 0 0 0 6.9 6.9l1.7-2.2 4.2 1.3v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 4.7a2 2 0 0 1 2-2.2z"/></svg>`,
    LinkedIn: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    GitHub: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`
  };
  const quickContact = $("#quickContact");
  const contactRows = [
    ["Email", `mailto:${C.meta.email}`],
    ["Phone", `tel:${C.meta.phone}`],
    ["LinkedIn", C.meta.linkedin],
    ["GitHub", C.meta.github]
  ];
  contactRows.forEach(([label, href]) => {
    const placeholder = isBlankPlaceholder(href);
    const a = el("a", `contact-icon${placeholder ? " needs-input" : ""}`, CONTACT_ICONS[label]);
    a.href = placeholder ? "#" : href;
    a.title = label;
    a.setAttribute("aria-label", label);
    if (!placeholder) { a.target = "_blank"; a.rel = "noopener"; }
    quickContact.appendChild(a);
  });

  /* ---------------- Projects + Filters ---------------- */
  const projectGrid = $("#projectGrid");
  const filterBar = $("#filterBar");
  const emptyState = $("#emptyState");
  const activeFilters = new Set();

  function makeChip(label, group) {
    const btn = el("button", "chip");
    btn.textContent = label;
    btn.dataset.group = group;
    btn.dataset.value = label;
    btn.addEventListener("click", () => {
      const key = group + ":" + label;
      if (activeFilters.has(key)) activeFilters.delete(key);
      else activeFilters.add(key);
      btn.classList.toggle("active");
      renderProjects();
    });
    return btn;
  }

  const gLabel1 = el("span", "filter-group-label", "Discipline");
  filterBar.appendChild(gLabel1);
  C.filters.disciplines.forEach((d) => filterBar.appendChild(makeChip(d, "discipline")));
  filterBar.appendChild(el("span", "filter-sep"));
  const gLabel2 = el("span", "filter-group-label", "Context");
  filterBar.appendChild(gLabel2);
  C.filters.contexts.forEach((c) => filterBar.appendChild(makeChip(c, "context")));

  const clearBtn = el("button", "chip", "Clear filters");
  clearBtn.addEventListener("click", () => {
    activeFilters.clear();
    filterBar.querySelectorAll(".chip.active").forEach((c) => c.classList.remove("active"));
    renderProjects();
  });
  filterBar.appendChild(clearBtn);

  function projectMatchesFilters(p) {
    const disciplineFilters = [...activeFilters].filter((f) => f.startsWith("discipline:")).map((f) => f.split(":")[1]);
    const contextFilters = [...activeFilters].filter((f) => f.startsWith("context:")).map((f) => f.split(":")[1]);
    const disciplineOk = disciplineFilters.length === 0 || disciplineFilters.some((f) => p.tags.includes(f));
    const contextOk = contextFilters.length === 0 || contextFilters.includes(p.context);
    return disciplineOk && contextOk;
  }

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
    modalCrumbs.textContent = stack.map((s) => s.crumb).join("  /  ");
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
      <div class="detail-hero"><img src="${esc(p.image)}" alt="${esc(p.title)}"></div>
      <div class="detail-kicker">${esc(p.period)} · ${esc(p.status)} · ${esc(p.org)}</div>
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
    return box;
  }

  function highlightChips(p) {
    return (p.metrics || []).filter((m) => !m.isPlaceholder && !isBlankPlaceholder(m.value)).slice(0, 3)
      .map((m) => `<span class="hl"><b>${esc(m.value)}</b> ${esc(m.label)}</span>`).join("");
  }

  function renderProjects() {
    projectGrid.innerHTML = "";
    const visible = C.projects.filter(projectMatchesFilters);
    emptyState.style.display = visible.length ? "none" : "block";
    visible.forEach((p) => {
      projectGrid.appendChild(makeTile(`
        <div class="tile-image"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"></div>
        <div class="tile-body">
          <div class="project-meta"><span>${esc(p.period)}</span><span class="project-status">${esc(p.status)}</span></div>
          <h3>${esc(p.title)}</h3>
          <div class="project-org">${esc(p.org)}</div>
          <p class="tile-summary">${esc(p.summary)}</p>
          <div class="hl-row">${highlightChips(p)}</div>
          <div class="tile-cta">View project →</div>
        </div>`, () => pushView({ crumb: shortTitle(p.title), render: () => projectDetail(p) }), "project-tile"));
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

  function renderExpTimeline() {
    const track = $("#expTimeline");
    if (!expByDate.length) return;
    const spans = expByDate.map((e) => parsePeriod(e.period));
    const nowIndex = (() => { const d = new Date(); return d.getFullYear() * 12 + d.getMonth(); })();
    const globalStart = Math.min(...spans.map((s) => s.start.index));
    const globalEnd = Math.max(...spans.map((s) => (s.isPresent ? nowIndex : s.end.index)));
    const pad = 2;
    const totalSpan = (globalEnd - globalStart) + pad * 2;

    const years = [];
    const startYear = Math.floor((globalStart - pad) / 12);
    const endYear = Math.ceil((globalEnd + pad) / 12);
    for (let y = startYear; y <= endYear; y++) years.push(y);

    const segHtml = expByDate.map((e, i) => {
      const s = spans[i];
      const endIdx = s.isPresent ? nowIndex : s.end.index;
      const leftPct = ((s.start.index - (globalStart - pad)) / totalSpan) * 100;
      const rightPct = ((endIdx - (globalStart - pad)) / totalSpan) * 100;
      const widthPct = Math.max(rightPct - leftPct, 0.6);
      const midPct = leftPct + widthPct / 2;
      const short = e.org.split(",")[0].split(" ")[0];
      return `
        <div class="exp-tl-range" style="left:${leftPct}%;width:${widthPct}%" title="${esc(e.org)}: ${esc(e.period)}"></div>
        <div class="exp-tl-marker" style="left:${leftPct}%" title="${esc(e.org)} starts ${esc(e.period.split(/[–-]/)[0].trim())}"></div>
        <div class="exp-tl-marker" style="left:${rightPct}%" title="${esc(e.org)} ends ${esc(e.period.split(/[–-]/)[1] ? e.period.split(/[–-]/)[1].trim() : "")}"></div>
        <div class="exp-tl-label" style="left:${midPct}%">${esc(short)}</div>
      `;
    }).join("");

    const yearHtml = years.map((y) => {
      const leftPct = ((y * 12 - (globalStart - pad)) / totalSpan) * 100;
      if (leftPct < 0 || leftPct > 100) return "";
      return `<div class="exp-tl-tick" style="left:${leftPct}%"><span>${y}</span></div>`;
    }).join("");

    track.innerHTML = `
      <div class="exp-tl-track">
        <div class="exp-tl-dash"></div>
        ${segHtml}
      </div>
      <div class="exp-tl-axis">${yearHtml}</div>
    `;
  }
  renderExpTimeline();

  function expDetail(e, linkedProject) {
    const box = el("div", "detail");
    box.innerHTML = `
      <div class="detail-hero"><img src="${esc(e.productImage || e.logo || "assets/img/placeholder-project.svg")}" alt="${esc(e.org)}"></div>
      <div class="detail-kicker">${esc(e.period)} · ${esc(e.location)} · ${esc(e.org)}</div>
      <h2 class="detail-title">${esc(e.role)}</h2>
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
        <div class="project-meta"><span>${esc(e.period)}</span><span class="project-status">${esc(e.location)}</span></div>
        <h3>${esc(e.role)}</h3>
        <div class="project-org">${esc(e.org)}</div>
        <p class="tile-summary">${esc(summary)}</p>
        <div class="hl-row">${linkedProject ? highlightChips(linkedProject) : ""}</div>
        <div class="tile-cta">View role →</div>
      </div>`, () => pushView({ crumb: shortTitle(e.role), render: () => expDetail(e, linkedProject) }), "project-tile"));
  });

  /* ---------------- Thesis & Publications ---------------- */
  const thesisGrid = $("#thesisGrid");
  (C.theses || []).forEach((t) => {
    const pubsHtml = (t.publications || []).map((p) => {
      if (p.isPlaceholder || isBlankPlaceholder(p.url)) {
        return `<li class="pub-item pub-placeholder">
          <span class="needs-input">— add publication details —</span>
        </li>`;
      }
      const isLink = !isBlankPlaceholder(p.url);
      return `<li class="pub-item">
        <div class="pub-title">${isLink ? `<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)} →</a>` : esc(p.title)}</div>
        <div class="pub-meta">${esc(p.venue)}${p.status ? ` — <span class="pub-status">${esc(p.status)}</span>` : ""}</div>
      </li>`;
    }).join("");

    const card = el("article", "thesis-card");
    card.innerHTML = `
      <div class="thesis-level">${esc(t.level)}</div>
      <h3 class="thesis-title">${esc(t.title)}</h3>
      <div class="thesis-org">${esc(t.org)}</div>
      <div class="exp-meta thesis-meta"><span>${esc(t.period)}</span><span class="project-status">${esc(t.status)}</span></div>
      <p class="thesis-summary">${esc(t.summary)}</p>
      <ul class="exp-bullets">${t.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      ${t.metrics && t.metrics.length ? `<div class="metric-row exp-metric-row">${t.metrics.map(metricHtml).join("")}</div>` : ""}
      <div class="pub-block">
        <div class="pub-block-label">Publications</div>
        <ul class="pub-list">${pubsHtml}</ul>
      </div>
    `;
    thesisGrid.appendChild(card);
  });

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

  /* ---------------- Contact ---------------- */
  $("#contactHeading").textContent = C.contact.heading;
  $("#contactBody").textContent = C.contact.body;
  const contactActions = $("#contactActions");
  contactActions.innerHTML = `
    <a class="btn btn-primary" href="mailto:${esc(C.meta.email)}">Email me →</a>
    <a class="btn btn-ghost" href="${esc(C.meta.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
  `;

  /* ---------------- Footer ---------------- */
  $("#footerText").textContent = `${C.meta.name} — built with plain HTML/CSS/JS, no build step. © ${new Date().getFullYear()}`;
})();

