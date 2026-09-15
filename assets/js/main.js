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
  const resumeBtn = $("#resumeBtn");
  resumeBtn.href = C.meta.resumeFile;
  resumeBtn.setAttribute("download", "");

  $("#navToggle").addEventListener("click", () => {
    $("#navLinks").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => $("#navLinks").classList.remove("open"))
  );

  /* ---------------- Hero ---------------- */
  $("#heroName").textContent = C.meta.name;
  $("#heroRole").textContent = C.meta.role;
  $("#heroTagline").innerHTML = `<span class="accent">${esc(C.meta.tagline)}</span>`;
  $("#heroSub").textContent = C.about.paragraphs[0] || "";

  const statStrip = $("#statStrip");
  C.hero.stats.forEach((s) => {
    const stat = el("div", "stat");
    stat.innerHTML = `<div class="stat-value">${esc(s.value)}${s.unit ? `<span class="unit">${esc(s.unit)}</span>` : ""}</div><div class="stat-label">${esc(s.label)}</div>`;
    statStrip.appendChild(stat);
  });

  /* ---------------- About ---------------- */
  const aboutText = $("#aboutText");
  C.about.paragraphs.forEach((p) => aboutText.appendChild(el("p", null, esc(p))));

  $("#profilePhoto").src = C.meta.profileImage;

  const authTextEl = $("#authText");
  authTextEl.innerHTML = isBlankPlaceholder(C.meta.workAuthorization)
    ? `<span class="needs-input" title="Add your visa/work-authorization status in data/content.js">${esc(C.meta.workAuthorization)}</span>`
    : esc(C.meta.workAuthorization);
  $("#locationText").textContent = "Based in " + C.meta.location;

  const quickContact = $("#quickContact");
  const contactRows = [
    ["Email", `mailto:${C.meta.email}`, C.meta.email],
    ["Phone", `tel:${C.meta.phone}`, C.meta.phone],
    ["LinkedIn", C.meta.linkedin, "linkedin.com/in/arjavjain20"],
    ["GitHub", C.meta.github, isBlankPlaceholder(C.meta.github) ? "add link" : C.meta.github]
  ];
  contactRows.forEach(([label, href, display]) => {
    const li = el("li");
    const placeholder = isBlankPlaceholder(href);
    li.innerHTML = `<a href="${placeholder ? "#" : esc(href)}" class="${placeholder ? "needs-input" : ""}">${esc(label)}: ${esc(display)}</a>`;
    quickContact.appendChild(li);
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

  function renderProjects() {
    projectGrid.innerHTML = "";
    const visible = C.projects.filter(projectMatchesFilters);
    emptyState.style.display = visible.length ? "none" : "block";

    visible.forEach((p) => {
      const card = el("article", "project-card");
      card.innerHTML = `
        <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
        <div class="project-image"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"></div>
        <div class="project-body">
          <div class="project-meta"><span>${esc(p.period)}</span><span class="project-status">${esc(p.status)}</span></div>
          <h3>${esc(p.title)}</h3>
          <div class="project-org">${esc(p.org)}</div>
          <p class="project-summary">${esc(p.summary)}</p>
          <div class="project-tags">${p.tags.map((t) => `<span class="ptag">${esc(t)}</span>`).join("")}<span class="ptag">${esc(p.context)}</span></div>
          <div class="metric-row">${p.metrics.map(metricHtml).join("")}</div>
          <button class="project-toggle" type="button">+ Show full technical breakdown</button>
          <div class="project-details">
            <ul>${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
            ${p.links && p.links.length ? `<div class="project-links">${p.links.map(linkHtml).join("")}</div>` : ""}
          </div>
        </div>
      `;
      const toggleBtn = $(".project-toggle", card);
      const details = $(".project-details", card);
      toggleBtn.addEventListener("click", () => {
        const open = details.classList.toggle("open");
        toggleBtn.textContent = open ? "− Hide technical breakdown" : "+ Show full technical breakdown";
      });
      projectGrid.appendChild(card);
    });
  }
  renderProjects();

  /* ---------------- Experience ---------------- */
  const expList = $("#expList");
  C.experience.forEach((e) => {
    const linkedProject = e.projectRef ? C.projects.find((p) => p.id === e.projectRef) : null;
    const logoHtml = e.logo
      ? `<img src="${esc(e.logo)}" alt="${esc(e.org)} logo">`
      : `<span class="exp-logo-fallback">${esc(e.org.slice(0, 2).toUpperCase())}</span>`;
    const productHtml = e.product ? `<span class="exp-product-tag">${esc(e.product)}</span>` : "";

    const card = el("article", "exp-card");
    card.innerHTML = `
      <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
      <div class="exp-card-top">
        <div class="exp-logo-badge">${logoHtml}</div>
        <div class="exp-head">
          <h3 class="exp-role">${esc(e.role)}</h3>
          <div class="exp-org-row"><span class="exp-org">${esc(e.org)}</span>${productHtml}</div>
          <div class="exp-meta"><span>${esc(e.location)}</span><span>${esc(e.period)}</span></div>
        </div>
      </div>
      <ul class="exp-bullets">${e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      ${linkedProject && linkedProject.metrics && linkedProject.metrics.length ? `<div class="metric-row exp-metric-row">${linkedProject.metrics.map(metricHtml).join("")}</div>` : ""}
    `;
    expList.appendChild(card);
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
    <a class="btn btn-ghost" href="${esc(C.meta.resumeFile)}" download>Download résumé</a>
  `;

  /* ---------------- Footer ---------------- */
  $("#footerText").textContent = `${C.meta.name} — built with plain HTML/CSS/JS, no build step. © ${new Date().getFullYear()}`;
})();
