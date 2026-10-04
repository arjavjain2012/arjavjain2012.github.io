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
  const DISCIPLINE_ORDER = ["Design", "Thermal", "Electronics", "Controls"];
  const PROJECT_FILTER_CATEGORIES = [
    { label: "Mechanical Design", tag: "Structures & Composites" },
    { label: "Thermal", tag: "Thermal & Energy Systems" },
    { label: "Electronics & Control", tag: "Electronics & Controls" },
    { label: "Vehicle Dynamics & Simulation", tag: "Vehicle Dynamics & Simulation" }
  ];
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
    (t.publications || []).filter((p) => !p.hideFromHero).map((p) => ({ ...p, thesisTitle: t.title, thesisLevel: t.level }))
  ).concat((C.independentPublications || []).map((p) => ({ ...p, thesisLevel: p.level || "Independent Research" })));
  const statStrip = $("#statStrip");
  const pubStat = el("button", "stat stat-clickable");
  pubStat.type = "button";
  pubStat.innerHTML = `<div class="stat-value">${allPubs.length}</div><div class="stat-label">Publications — click for details</div>`;
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
    const rendered = v.render();
    modalBody.appendChild(rendered);
    // The car+project split view needs more than the standard panel width
    // to give each of its two boxes real room.
    $(".modal-panel").classList.toggle("modal-panel-wide", rendered.classList.contains("sub-detail"));
    $(".modal-panel").scrollTop = 0;
  }
  // Push a history entry per open card level, so the mobile back gesture /
  // browser back button (which fires `popstate`) closes one card level at a
  // time instead of navigating away from the site entirely. `originTile`,
  // when given, is the card that was clicked to get here — a snapshot of it
  // is kept on the view so both the open animation and, later, the matching
  // close animation can reuse it. `secondaryTile` (FSAE dispersed cards
  // only) is the adjacent car tile, which grows/shrinks alongside it.
  function pushView(view, originTile, secondaryTile) {
    view.originRect = originTile ? thumbnailRect(originTile) : null;
    view.originClone = originTile ? cloneThumbnail(originTile) : null;
    view.secondaryRect = secondaryTile ? thumbnailRect(secondaryTile) : null;
    view.secondaryClone = secondaryTile ? cloneThumbnail(secondaryTile) : null;
    stack.push(view);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    history.pushState({ modalDepth: stack.length }, "");
    paintModal();
    morphOpen(view);
  }
  // Only the clicked card's own thumbnail grows into its place in the
  // detail view (its own hero image), then shrinks back on close — the
  // card's text/body is never touched or cloned, so there's nothing to
  // distort or reflow strangely mid-animation, and everything else in the
  // detail view (title, text, close button) just appears around the
  // now-settled image instead of being part of the motion.
  const thumbnailContainer = (tile) => tile.querySelector(".tile-image") || tile;
  const thumbnailRect = (tile) => thumbnailContainer(tile).getBoundingClientRect();
  function cloneThumbnail(tile) {
    const img = tile.querySelector("img");
    if (!img) return null;
    const wrap = el("div", "morph-thumb-clone");
    wrap.setAttribute("aria-hidden", "true");
    const imgClone = img.cloneNode(true);
    // Match the source's own fit/background exactly (imageFit:"contain"
    // items use object-fit:contain on a white backing, not cover) — a
    // hardcoded object-fit here would visibly change the image's own crop
    // at the swap instead of only the box around it changing.
    const imgStyle = getComputedStyle(img);
    imgClone.style.objectFit = imgStyle.objectFit;
    imgClone.style.background = getComputedStyle(thumbnailContainer(tile)).backgroundColor;
    wrap.appendChild(imgClone);
    return wrap;
  }
  function placeMorphClone(clone, rect) {
    Object.assign(clone.style, {
      position: "fixed", margin: "0", zIndex: "201", pointerEvents: "none",
      top: rect.top + "px", left: rect.left + "px", width: rect.width + "px", height: rect.height + "px",
      transition: "none"
    });
    document.body.appendChild(clone);
  }
  const MORPH_DURATION = 0.4;
  const MORPH_TRANSITION = `top ${MORPH_DURATION}s cubic-bezier(0.22, 1, 0.36, 1), left ${MORPH_DURATION}s cubic-bezier(0.22, 1, 0.36, 1), width ${MORPH_DURATION}s cubic-bezier(0.22, 1, 0.36, 1), height ${MORPH_DURATION}s cubic-bezier(0.22, 1, 0.36, 1)`;
  // Same duration/easing as the clone's grow/shrink, so the detail box's
  // own fade always finishes at the exact instant the thumbnail lands.
  const PANEL_FADE_TRANSITION = `opacity ${MORPH_DURATION}s cubic-bezier(0.22, 1, 0.36, 1)`;
  function growClone(clone, fromRect, toRect) {
    placeMorphClone(clone, fromRect);
    void clone.offsetWidth; // force layout so the "from" state above paints before the "to" state below animates it away
    clone.style.transition = MORPH_TRANSITION;
    clone.style.top = toRect.top + "px";
    clone.style.left = toRect.left + "px";
    clone.style.width = toRect.width + "px";
    clone.style.height = toRect.height + "px";
  }
  // Where a card's thumbnail should land: its own hero image once the real
  // view is rendered — checked most-specific first, since a sub-detail view
  // has TWO .detail-hero elements (car, then sub-project) and a plain
  // `.querySelector(".detail-hero")` always found the car's (the first one
  // in document order), so a sub-project opened from *inside* a car's own
  // grid — not the FSAE dispersed cards, which pass a secondary tile and
  // never hit this path — grew into the car's hero instead of its own.
  // Toolkit tiles have no target at all: their layout puts kicker/title/
  // skills before the "Evidence" gallery, so the tile's own image (the
  // gallery's first cell) sits far down/across the panel — morphing into it
  // meant a long cross-panel travel that made the thumbnail feel like an
  // afterthought next to the title, not the thing that "opened". These fall
  // through to the plain-fade path below instead of forcing a bad morph.
  // Returns null if this view has nowhere good for the clone to land, in
  // which case the caller skips the clone animation entirely.
  function primaryMorphTargetEl(root) {
    if (root.querySelector(".toolkit-detail")) return null;
    return root.querySelector(".sub-detail-project .detail-hero") || root.querySelector(".detail-hero");
  }
  function secondaryMorphTargetEl(root) {
    return root.querySelector(".sub-detail-car-box .detail-hero");
  }
  function morphOpen(view) {
    const panel = $(".modal-panel");
    panel.style.transition = "none";
    panel.style.transform = "none";
    panel.style.visibility = "visible";
    if (modalBody.querySelector(".toolkit-detail")) {
      // Software & Manufacturing: no animation at all, the original
      // pre-animation baseline — a thumbnail morph here always had to
      // travel too far (see primaryMorphTargetEl), and even a plain fade
      // still read as unwanted motion for these specifically.
      panel.style.opacity = "1";
      panel.style.pointerEvents = "";
      return;
    }
    panel.style.opacity = "0";
    panel.style.pointerEvents = "none";
    const primaryEl = view.originRect && view.originClone ? primaryMorphTargetEl(modalBody) : null;
    const secondaryEl = primaryEl && view.secondaryRect && view.secondaryClone ? secondaryMorphTargetEl(modalBody) : null;
    // The panel's own fade-in (below) would otherwise show the real hero
    // image fading in through the gaps the still-growing clone hasn't
    // covered yet — a fading thumbnail visible underneath the morphing one.
    // Hiding the hero element(s) outright and only making them visible
    // again once the clone has fully landed keeps the fade to everything
    // else in the box while the thumbnail itself does a clean hard cut.
    if (primaryEl) primaryEl.style.visibility = "hidden";
    if (secondaryEl) secondaryEl.style.visibility = "hidden";
    if (primaryEl) {
      growClone(view.originClone, view.originRect, primaryEl.getBoundingClientRect());
      if (secondaryEl) growClone(view.secondaryClone, view.secondaryRect, secondaryEl.getBoundingClientRect());
    }
    void panel.offsetWidth; // force layout so the opacity:0 above paints before the fade-in below animates it away
    panel.style.transition = PANEL_FADE_TRANSITION;
    panel.style.opacity = "1";
    setTimeout(() => {
      panel.style.pointerEvents = "";
      if (primaryEl) primaryEl.style.visibility = "";
      if (secondaryEl) secondaryEl.style.visibility = "";
      if (view.originClone) view.originClone.remove();
      if (view.secondaryClone) view.secondaryClone.remove();
    }, MORPH_DURATION * 1000 + 20);
  }
  // Mirrors morphOpen: the clone(s) (when there are any) reappear already
  // grown into their hero image's current spot and shrink back to their
  // card's thumbnail slot while the detail box fades out at the same pace,
  // both finishing together, so the detail visibly collapses back into the
  // card it came from instead of just disappearing.
  // fullClose: true only when this close empties the whole stack (the
  // backdrop should fade with it, revealing the real page underneath).
  // popView() closes just the top view with a lower one still underneath,
  // so the backdrop must stay fully opaque the whole time — fading it was
  // briefly showing the real page through the modal on every back-navigation.
  function morphClose(view, onDone, fullClose) {
    const panel = $(".modal-panel");
    const backdrop = $(".modal-backdrop");
    if (modalBody.querySelector(".toolkit-detail")) {
      onDone();
      return;
    }
    if (fullClose) {
      backdrop.style.transition = "opacity 0.34s ease";
      backdrop.style.opacity = "0";
    }
    panel.style.pointerEvents = "none";
    panel.style.transition = PANEL_FADE_TRANSITION;
    panel.style.opacity = "0";
    const primaryEl = view && view.originRect && view.originClone ? primaryMorphTargetEl(modalBody) : null;
    const secondaryEl = primaryEl && view.secondaryClone ? secondaryMorphTargetEl(modalBody) : null;
    // Hide the real hero(es) immediately, before the panel starts fading
    // out and the clone starts shrinking away — otherwise the fading-out
    // hero shows through behind the departing clone, the same double-image
    // as on open.
    if (primaryEl) primaryEl.style.visibility = "hidden";
    if (secondaryEl) secondaryEl.style.visibility = "hidden";
    if (primaryEl) {
      growClone(view.originClone, primaryEl.getBoundingClientRect(), view.originRect);
      if (secondaryEl) growClone(view.secondaryClone, secondaryEl.getBoundingClientRect(), view.secondaryRect);
    }
    setTimeout(() => {
      if (view && view.originClone) view.originClone.remove();
      if (view && view.secondaryClone) view.secondaryClone.remove();
      if (fullClose) {
        backdrop.style.transition = "";
        backdrop.style.opacity = "";
      }
      panel.style.pointerEvents = "";
      onDone();
    }, MORPH_DURATION * 1000);
  }
  function closeModal() {
    if (modal.hidden) return;
    const top = stack[stack.length - 1];
    const depth = stack.length;
    const finish = () => {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      stack = [];
      if (depth) history.go(-depth);
    };
    morphClose(top, finish, true);
  }
  function popView() {
    morphClose(stack[stack.length - 1], () => history.back(), false);
  }
  modalBack.addEventListener("click", popView);
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) {
      if (stack.length > 1) popView(); else closeModal();
    }
  });
  window.addEventListener("popstate", (e) => {
    const depth = (e.state && e.state.modalDepth) || 0;
    if (depth > 0 && depth <= stack.length) {
      stack.length = depth;
      modal.hidden = false;
      document.body.classList.add("modal-open");
      paintModal();
      // morphClose() left the panel faded out and non-interactive; bring it
      // straight back for the level we've returned to.
      const panel = $(".modal-panel");
      panel.style.transition = "none";
      panel.style.opacity = "1";
      panel.style.pointerEvents = "";
    } else {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      stack = [];
    }
  });

  const makeTile = (html, onOpen, cls) => {
    const t = el("article", "tile " + (cls || ""));
    t.tabIndex = 0;
    t.setAttribute("role", "button");
    t.innerHTML = html;
    t.addEventListener("click", () => onOpen(t));
    t.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(t); } });
    return t;
  };

  const metricsRow = (ms) => ms && ms.length ? `<div class="metric-row">${ms.map(metricHtml).join("")}</div>` : "";
  const shortTitle = (s) => s.length > 32 ? s.slice(0, 30) + "…" : s;

  // Sub-project detail: two independent boxes side by side — the left one
  // is the parent car's own full detail (reusing projectDetail(p) as-is,
  // disciplines grid and all), the right one is the sub-project's write-up.
  function subDetail(p, s) {
    const box = el("div", "detail sub-detail");
    const carBox = el("div", "sub-detail-car-box");
    carBox.appendChild(projectDetail(p, s.category));

    const projectCol = el("div", "sub-detail-project");
    projectCol.innerHTML = `
      <div class="detail-hero${s.imageFit === "contain" ? " detail-hero-contain" : ""}"><img src="${esc(s.image)}" alt="${esc(s.title)}"></div>
      <div class="detail-kicker">${esc(p.title)}</div>
      <h2 class="detail-title">${esc(s.title)}</h2>
      ${metricsRow(s.metrics)}
      ${s.writeup ? `
      <h4 class="detail-sub">Overview</h4>
      <p class="detail-summary">${esc(s.writeup.overview)}</p>
      <h4 class="detail-sub">Approach</h4>
      <p class="detail-summary">${esc(s.writeup.approach)}</p>
      <h4 class="detail-sub">Technical Achievements</h4>
      <ul class="detail-list">${s.writeup.achievements.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
      <h4 class="detail-sub">Tools Used</h4>
      <div class="skill-items">${s.writeup.tools.map((t) => `<span class="skill-item">${esc(t)}</span>`).join("")}</div>` : `
      <h4 class="detail-sub">Development highlights</h4>
      <ul class="detail-list">${(s.bullets || []).map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`}
      ${(s.gallery && s.gallery.length) ? `
      <h4 class="detail-sub">Gallery</h4>
      <div class="tile-grid">${s.gallery.map((g) => `
        <figure class="gallery-item${g.imageFit === "contain" ? " gallery-item-contain" : ""}"><div class="gallery-img-wrap"><img src="${esc(g.image)}" alt="${esc(g.caption || s.title)}" loading="lazy">${ZOOM_ICON_BADGE}</div>${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ""}</figure>`).join("")}</div>` : ""}
    `;
    wireGalleryLightboxes(projectCol);

    box.appendChild(carBox);
    box.appendChild(projectCol);
    return box;
  }

  function projectDetail(p, initialCategory) {
    const subs = (C.subprojects && C.subprojects[p.id]) || [];
    const filterable = subs.length > 0 && subs.every((s) => s.category);
    const box = el("div", "detail");
    box.innerHTML = `
      <div class="detail-hero${p.imageFit === "contain" ? " detail-hero-contain" : ""}"><img src="${esc(p.image)}" alt="${esc(p.title)}"${p.heroPosition ? ` style="object-position: ${esc(p.heroPosition)}"` : ""}></div>
      ${(() => {
        const catTags = p.tags.filter((t) => PROJECT_FILTER_CATEGORIES.some((c) => c.tag === t));
        return (!filterable && !p.hideTagsRow && catTags.length) ? `<div class="project-tags">${catTags.map((t) => `<span class="ptag ptag-category">${esc(t)}</span>`).join("")}</div>` : "";
      })()}
      <div class="detail-kicker">${esc(p.period)} · ${p.orgLink ? `<a href="${esc(p.orgLink)}" target="_blank" rel="noopener">${esc(p.org)} →</a>` : esc(p.org)}</div>
      <h2 class="detail-title">${esc(p.title)}</h2>
      <p class="detail-summary">${esc(p.summary)}</p>
      ${metricsRow(p.metrics)}
    `;
    // Optional CAD orthographic views (side/top/front), shown above the
    // "Disciplines & sub-projects" section for cars that have them — side
    // and top stacked on the left, front spanning their combined height on
    // the right via a plain flex row's default stretch. Each view expands
    // via openImageLightbox — a standalone overlay, not the site's modal
    // stack — since these have no title/caption of their own and the car
    // detail underneath must stay fully visible, not get replaced by a
    // pushed view the way every other morph on the site works.
    if (p.cadViews) {
      const makeCadCell = (label, src, extraCls) => makeTile(
        `<img src="${esc(src)}" alt="${esc(p.title)} — ${esc(label)} view" loading="lazy">${ZOOM_ICON_BADGE}`,
        (tile) => openImageLightbox(tile),
        "cad-cell" + (extraCls ? " " + extraCls : "")
      );
      const cad = el("div", "cad-views");
      const left = el("div", "cad-views-left");
      left.appendChild(makeCadCell("Side", p.cadViews.side));
      left.appendChild(makeCadCell("Top", p.cadViews.top));
      cad.appendChild(left);
      cad.appendChild(makeCadCell("Front", p.cadViews.front, "cad-views-front"));
      box.appendChild(cad);
    }
    // Downloadable reference documents (e.g. a competition Design Spec
    // Sheet) — sits right under the CAD views when there are any, or in
    // that same spot when there aren't. Reuses the exact same pill style
    // as a project's "Final report"-type links (.project-links/linkHtml):
    // sized to its own text, not the full card width.
    if (p.dssFiles && p.dssFiles.length) {
      const dssBox = el("div", "project-links dss-links");
      dssBox.innerHTML = p.dssFiles.map(linkHtml).join("");
      box.appendChild(dssBox);
    }
    if (subs.length) {
      const headingText = filterable ? "Disciplines &amp; sub-projects" : "Disciplines &amp; sub-projects — open one for the full detail";
      box.appendChild(el("h4", "detail-sub", headingText));

      const grid = el("div", "tile-grid");
      const renderGrid = (activeCat) => {
        grid.innerHTML = "";
        const visible = (filterable && activeCat) ? subs.filter((s) => s.category === activeCat) : subs;
        visible.forEach((s) => {
          grid.appendChild(makeTile(`
            <div class="tile-image${s.imageFit === "contain" ? " tile-image-contain" : ""}"><img src="${esc(s.image)}" alt="${esc(s.title)}" loading="lazy"></div>
            <div class="tile-body">
              <h3>${esc(s.title)}</h3>
              <ul class="tile-hl">${s.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
              <div class="tile-cta">Open detail →</div>
            </div>`, (tile) => pushView({ crumb: shortTitle(s.title), render: () => subDetail(p, s) }, tile)));
        });
      };

      if (filterable) {
        let activeCat = p.tags.includes(initialCategory) ? initialCategory : null;
        const filterRow = el("div", "project-tags proj-filter-row");
        const buttons = p.tags.map((cat) => {
          const btn = el("span", "ptag ptag-filter" + (cat === activeCat ? " ptag-active" : ""), esc(cat));
          btn.tabIndex = 0;
          btn.setAttribute("role", "button");
          filterRow.appendChild(btn);
          return btn;
        });
        buttons.forEach((btn, i) => {
          const onActivate = () => {
            const cat = p.tags[i];
            activeCat = activeCat === cat ? null : cat;
            buttons.forEach((b, j) => b.classList.toggle("ptag-active", p.tags[j] === activeCat));
            renderGrid(activeCat);
          };
          btn.addEventListener("click", onActivate);
          btn.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); onActivate(); } });
        });
        box.appendChild(filterRow);
        renderGrid(activeCat);
      } else {
        renderGrid(null);
      }
      box.appendChild(grid);
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

  // A small always-on badge marking a CAD view as expandable.
  const ZOOM_ICON_BADGE = `<span class="cad-zoom-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></span>`;

  // Standalone image lightbox (CAD views, sub-project/toolkit galleries):
  // no title, no caption, no backdrop — the card it came from (and
  // everything else already on screen, including the modal underneath)
  // stays exactly as it is. The clicked image itself grows in place to a
  // large centered size and shrinks back to the exact same spot on close,
  // with a small close button that only appears pinned to the enlarged
  // image's own corner.
  function openImageLightbox(cell) {
    const img = cell.querySelector("img");
    const srcRect = img.getBoundingClientRect();
    const ratio = img.naturalWidth / img.naturalHeight || srcRect.width / srcRect.height;
    const MORPH = 0.4;
    const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

    const overlay = el("div", "cad-lightbox");
    const clone = img.cloneNode(true);
    // Carry the thumbnail's own fit and letterbox colour onto the clone so it
    // doesn't stretch (or lose its white matte) while it grows; at full size
    // the box matches the image's ratio, so every fit looks identical.
    const imgCs = getComputedStyle(img);
    const matte = imgCs.backgroundColor === "rgba(0, 0, 0, 0)" ? getComputedStyle(cell).backgroundColor : imgCs.backgroundColor;
    clone.className = "cad-lightbox-img";
    Object.assign(clone.style, {
      objectFit: imgCs.objectFit, objectPosition: imgCs.objectPosition, background: matte,
      top: srcRect.top + "px", left: srcRect.left + "px",
      width: srcRect.width + "px", height: srcRect.height + "px", transition: "none"
    });
    const closeBtn = el("button", "cad-lightbox-close", "✕");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.style.opacity = "0";
    overlay.appendChild(clone);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    img.style.visibility = "hidden"; // avoid a flash of the thumbnail once the clone grows away from it

    void clone.offsetWidth; // force layout so the "from" rect above paints before animating away
    // Wide drawings are tiny at 88% of a phone's width — use nearly all of it.
    const fill = window.innerWidth < 620 ? 0.95 : 0.88;
    const maxW = window.innerWidth * fill, maxH = window.innerHeight * 0.88;
    let w = maxW, h = maxW / ratio;
    if (h > maxH) { h = maxH; w = maxH * ratio; }
    const top = (window.innerHeight - h) / 2, left = (window.innerWidth - w) / 2;
    clone.style.transition = `top ${MORPH}s ${EASE}, left ${MORPH}s ${EASE}, width ${MORPH}s ${EASE}, height ${MORPH}s ${EASE}`;
    clone.style.top = top + "px";
    clone.style.left = left + "px";
    clone.style.width = w + "px";
    clone.style.height = h + "px";
    // Pre-positioned (while invisible) to its final spot on the enlarged
    // image's corner, then just fades in once the grow finishes.
    closeBtn.style.top = Math.max(top - 14, 6) + "px";
    closeBtn.style.left = Math.min(left + w - 18, window.innerWidth - 38) + "px";
    const fadeInTimer = setTimeout(() => {
      closeBtn.style.transition = "opacity 0.15s ease";
      closeBtn.style.opacity = "1";
    }, MORPH * 1000);

    const close = () => {
      clearTimeout(fadeInTimer);
      document.removeEventListener("keydown", onKey, true);
      closeBtn.style.transition = "opacity 0.15s ease";
      closeBtn.style.opacity = "0";
      clone.style.top = srcRect.top + "px";
      clone.style.left = srcRect.left + "px";
      clone.style.width = srcRect.width + "px";
      clone.style.height = srcRect.height + "px";
      setTimeout(() => {
        overlay.remove();
        img.style.visibility = "";
      }, MORPH * 1000);
    };
    // Capture phase + stopImmediatePropagation so this runs before (and
    // suppresses) the site modal's own Escape handler underneath — both are
    // listening on document, and without this, one Escape press closed the
    // lightbox AND the modal at the same time.
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      e.stopImmediatePropagation();
      e.preventDefault();
      close();
    };
    document.addEventListener("keydown", onKey, true);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  }

  // Makes every ".gallery-item" figure inside a detail view (sub-project
  // galleries, toolkit evidence galleries) open via openImageLightbox,
  // the same click-to-enlarge/morph-back behavior as the CAD views.
  function wireGalleryLightboxes(root) {
    root.querySelectorAll(".gallery-item").forEach((fig) => {
      fig.tabIndex = 0;
      fig.setAttribute("role", "button");
      fig.addEventListener("click", () => openImageLightbox(fig));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openImageLightbox(fig); }
      });
    });
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
      <div class="tile-image${p.imageFit === "contain" ? " tile-image-contain" : ""}"><img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy"${p.heroPosition ? ` style="object-position: ${esc(p.heroPosition)}"` : ""}></div>
      <div class="tile-body">
        <div class="project-meta"><span>${esc(p.period)}</span></div>
        <h3>${esc(p.title)}</h3>
        <div class="project-org">${esc(p.org)}</div>
        <p class="tile-summary">${esc(p.summary)}</p>
        <div class="hl-row">${highlightChips(p)}</div>
        <div class="tile-cta">View project →</div>
      </div>`, (tile) => pushView({ crumb: shortTitle(p.title), render: () => projectDetail(p) }, tile), "project-tile");
  }

  // FSAE row: the car tile on the left with all of its sub-projects to the
  // right as one compact grid of image cards — no discipline headings, and
  // the whole grid is exactly as tall as the car tile beside it. Cards are
  // laid out in justified rows: every row spans the full width and shares the
  // same height, and within a row each card's width follows its thumbnail's
  // aspect ratio, so wide thumbnails get wide cards and square ones get
  // small ones. The disciplines still exist as filter chips in the opened
  // car, and nothing is pulled into the Featured Projects grid.
  const phoneMq = window.matchMedia("(max-width: 620px)");
  const stackedMq = window.matchMedia("(max-width: 860px)");
  let subgrids = [];

  // Beside the tile (desktop) the row count sets card height, so it follows
  // how many cards there are; stacked layouts use fixed-height rows instead
  // (see CSS), with two or three cards per row.
  function subgridRowCount(n) {
    if (phoneMq.matches) return Math.ceil(n / 2);
    if (stackedMq.matches) return Math.ceil(n / 3);
    return n <= 2 ? 1 : n <= 6 ? 2 : n <= 9 ? 3 : 4;
  }

  // Split cards, in order, into `rows` rows whose summed aspect ratios are as
  // even as possible, keeping at least one card in every row.
  function partitionRows(aspects, rows) {
    const target = aspects.reduce((a, b) => a + b, 0) / rows;
    const out = [];
    let cur = [], sum = 0;
    aspects.forEach((a, i) => {
      const cardsLeft = aspects.length - i;
      const rowsAfterCur = rows - out.length - 1;
      const mustBreak = cur.length && cardsLeft <= rowsAfterCur;
      const betterToBreak = cur.length && out.length < rows - 1 && Math.abs(sum + a - target) > Math.abs(sum - target);
      if (mustBreak || betterToBreak) { out.push(cur); cur = []; sum = 0; }
      cur.push(i);
      sum += a;
    });
    out.push(cur);
    return out;
  }

  function layoutSubgrid(entry) {
    const { grid, cards, aspects, raw } = entry;
    entry.mode = layoutMode();
    grid.innerHTML = "";
    const solo = cards.length <= 2;
    grid.classList.toggle("fsae-subgrid-solo", solo);
    const rowsWrap = el("div", "fsae-subrows");
    cards.forEach((c) => { c.classList.remove("subproj-card-tall"); c.style.aspectRatio = ""; });

    if (solo) {
      // One or two sub-projects: small fixed-size cards, not a stretched grid.
      const rowEl = el("div", "fsae-subrow");
      cards.forEach((c) => { c.style.flex = "none"; rowEl.appendChild(c); });
      rowsWrap.appendChild(rowEl);
      grid.appendChild(rowsWrap);
      return;
    }

    // A portrait thumbnail becomes a tall card standing at the right end of
    // the grid, full height; everything else is justified into rows beside it.
    const tall = [], rest = [];
    // (Only beside the car tile: stacked under it, a tall strip would run the
    // whole height of the grid, so portrait thumbnails are just normal cards.)
    cards.forEach((_, i) => (raw[i] < 0.8 && !stackedMq.matches ? tall : rest).push(i));
    const rows = Math.max(1, Math.min(rest.length, subgridRowCount(rest.length)));
    partitionRows(rest.map((i) => aspects[i]), rows).forEach((idxs) => {
      const rowEl = el("div", "fsae-subrow");
      idxs.forEach((k) => {
        cards[rest[k]].style.flex = `${aspects[rest[k]]} 1 0`;
        rowEl.appendChild(cards[rest[k]]);
      });
      rowsWrap.appendChild(rowEl);
    });
    grid.appendChild(rowsWrap);
    tall.forEach((i) => {
      cards[i].classList.add("subproj-card-tall");
      cards[i].style.flex = "none";
      cards[i].style.aspectRatio = String(raw[i]);
      grid.appendChild(cards[i]);
    });
  }
  // Re-flow every grid whenever the layout mode (desktop / stacked / phone)
  // changes. Media-query change events cover real resizes; the window-resize
  // check is a fallback for environments that don't fire them.
  const layoutMode = () => (phoneMq.matches ? "phone" : stackedMq.matches ? "stacked" : "desktop");
  function relayoutSubgrids() {
    subgrids = subgrids.filter((e) => e.grid.isConnected);
    const mode = layoutMode();
    subgrids.forEach((e) => { if (e.mode !== mode) layoutSubgrid(e); });
  }
  [phoneMq, stackedMq].forEach((mq) => mq.addEventListener("change", relayoutSubgrids));
  window.addEventListener("resize", relayoutSubgrids);

  function fsaeCarRow(p) {
    const row = el("div", "fsae-row");
    const carTile = projectTile(p);
    row.appendChild(carTile);
    const subs = (C.subprojects && C.subprojects[p.id]) || [];
    if (subs.length) {
      const grid = el("div", "fsae-subgrid");
      const cards = subs.map((s) => {
        // Letterboxed (contain) thumbnails get a blurred copy of themselves
        // behind them, so a wide card shows a soft matte instead of hard bars.
        const matte = s.imageFit === "contain" ? `<span class="subproj-card-matte" style="background-image:url('${esc(s.image)}')"></span>` : "";
        // Passing carTile as a second origin makes the open/close morph
        // grow/shrink the car alongside the sub-project's own thumbnail,
        // instead of only the clicked card, so the whole row appears to
        // expand together into the two-box detail view.
        return makeTile(`
          ${matte}<img src="${esc(s.image)}" alt="" loading="lazy">
          <span class="subproj-card-title">${esc(s.title)}</span>`,
          (tile) => pushView({ crumb: shortTitle(s.title), render: () => subDetail(p, s) }, tile, carTile),
          "subproj-card" + (s.imageFit === "contain" ? " subproj-card-contain" : ""));
      });
      const raw = subs.map((s) => s.thumbAspect || 1.6);
      const entry = { grid, cards, raw, aspects: raw.map((a) => Math.min(2.8, Math.max(1, a))) };
      layoutSubgrid(entry);
      subgrids.push(entry);
      row.appendChild(grid);
    }
    return row;
  }

  // Search blob per project: its own title/org/summary/bullets/tags, plus
  // (for FSAE cars) every sub-project's title/highlights/category, so
  // searching e.g. "brake bias" surfaces the car it's nested inside without
  // ever pulling sub-projects out into their own listing.
  function projectSearchText(p) {
    const own = [p.title, p.org, p.summary, p.context, ...(p.bullets || []), ...(p.tags || [])];
    const subs = (C.subprojects && C.subprojects[p.id]) || [];
    subs.forEach((s) => { own.push(s.title, s.category, ...(s.highlights || [])); });
    return own.filter(Boolean).join(" ").toLowerCase();
  }

  function renderProjects() {
    const searchIndex = new Map();
    C.projects.forEach((p) => searchIndex.set(p.id, projectSearchText(p)));
    let searchQuery = "";
    const matchesSearch = (p) => !searchQuery || searchIndex.get(p.id).includes(searchQuery);

    const noResultsNode = (query) => {
      const n = el("p", "search-empty", `No projects match "${esc(query)}".`);
      return n;
    };

    // Formula Student projects (context: "Formula Student") render in the
    // dedicated FSAE section instead of here, so each project appears once.
    const fsaeCars = C.projects.filter((p) => p.context === "Formula Student");
    const renderFsae = () => {
      fsaeGrid.innerHTML = "";
      const visible = fsaeCars.filter(matchesSearch);
      if (!visible.length) { fsaeGrid.appendChild(noResultsNode(searchQuery)); return; }
      visible.forEach((p) => fsaeGrid.appendChild(fsaeCarRow(p)));
    };

    const featured = C.projects.filter((p) => p.context !== "Formula Student");
    let activeFilter = null;
    const renderFeatured = () => {
      projectGrid.innerHTML = "";
      const visible = featured.filter((p) => (!activeFilter || (p.tags || []).includes(activeFilter)) && matchesSearch(p));
      if (!visible.length) { projectGrid.appendChild(noResultsNode(searchQuery)); return; }
      visible.forEach((p) => projectGrid.appendChild(projectTile(p)));
    };

    const bar = el("div", "project-tags project-filter-bar");
    const buttons = PROJECT_FILTER_CATEGORIES.map((cat) => {
      const btn = el("span", "ptag ptag-filter", esc(cat.label));
      btn.tabIndex = 0;
      btn.setAttribute("role", "button");
      bar.appendChild(btn);
      return btn;
    });
    buttons.forEach((btn, i) => {
      const onActivate = () => {
        const cat = PROJECT_FILTER_CATEGORIES[i].tag;
        activeFilter = activeFilter === cat ? null : cat;
        buttons.forEach((b, j) => b.classList.toggle("ptag-active", PROJECT_FILTER_CATEGORIES[j].tag === activeFilter));
        renderFeatured();
      };
      btn.addEventListener("click", onActivate);
      btn.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); onActivate(); } });
    });
    projectGrid.parentNode.insertBefore(bar, projectGrid);
    renderFsae();
    renderFeatured();

    /* ---- nav search bar: filters FSAE cars + Featured Projects together ---- */
    const searchInput = $("#projectSearch");
    const searchClear = $("#projectSearchClear");
    if (searchInput) {
      let debounceTimer;
      const applyQuery = (raw) => {
        searchQuery = raw.trim().toLowerCase();
        searchClear.hidden = !searchQuery;
        document.body.classList.toggle("search-active", !!searchQuery);
        renderFsae();
        renderFeatured();
      };
      searchInput.addEventListener("input", (e) => {
        clearTimeout(debounceTimer);
        const val = e.target.value;
        debounceTimer = setTimeout(() => applyQuery(val), 120);
      });
      searchClear.addEventListener("click", () => {
        searchInput.value = "";
        searchInput.focus();
        applyQuery("");
      });
    }
  }
  renderProjects();

  /* ---------------- Software & Manufacturing showcase ---------------- */
  function toolkitDetail(kind, item) {
    // Original layout restored (no separate hero) — the "toolkit-detail"
    // marker just lets the morph system (primaryMorphTargetRect) find the
    // first evidence cell as this card's real thumbnail landing spot,
    // without changing anything about how the view itself looks.
    const box = el("div", "detail toolkit-detail");
    box.innerHTML = `
      <div class="detail-kicker">${esc(kind)}</div>
      <h2 class="detail-title">${esc(item.name)}</h2>
      <div class="skill-items">${item.tools.map((t) => `<span class="skill-item">${esc(t)}</span>`).join("")}</div>
      <h4 class="detail-sub">Evidence</h4>
      <div class="tile-grid">${[{ image: item.image, caption: item.caption, position: item.imagePosition }, ...(item.gallery || [])].map((g) => `
        <figure class="gallery-item${item.imageFit === "contain" ? " gallery-item-contain" : ""}"><div class="gallery-img-wrap"><img src="${esc(g.image)}" alt="${esc(g.caption)}" loading="lazy"${g.position ? ` style="object-position: ${esc(g.position)}"` : ""}>${ZOOM_ICON_BADGE}</div><figcaption class="${isBlankPlaceholder(g.caption) ? "needs-input" : ""}">${esc(g.caption)}</figcaption></figure>`).join("")}</div>
    `;
    wireGalleryLightboxes(box);
    return box;
  }
  function renderToolkit(gridSel, kind, items) {
    const grid = $(gridSel);
    (items || []).forEach((it) => {
      grid.appendChild(makeTile(`
        <div class="tile-image${it.imageFit === "contain" ? " tile-image-contain" : ""}"><img src="${esc(it.image)}" alt="${esc(it.name)}" loading="lazy"${it.imagePosition ? ` style="object-position: ${esc(it.imagePosition)}"` : ""}></div>
        <div class="tile-body">
          <h3>${esc(it.name)}</h3>
          <div class="tile-caption ${isBlankPlaceholder(it.caption) ? "needs-input" : ""}">${esc(it.caption)}</div>
          <div class="tool-chips">${it.tools.slice(0, 4).map((t) => `<span class="mini-chip">${esc(t)}</span>`).join("")}</div>
        </div>`, (tile) => pushView({ crumb: it.name, render: () => toolkitDetail(kind, it) }, tile), "tool-tile"));
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

  const expByDate = [...C.experience].sort((a, b) => parsePeriod(b.period).start.index - parsePeriod(a.period).start.index);

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
    if (e.subProjects && e.subProjects.length) {
      if (e.achievements && e.achievements.length) {
        box.appendChild(el("h4", "detail-sub", "Achievements"));
        const aul = el("ul", "award-list");
        e.achievements.forEach((a) => {
          const li = el("li", "award-item");
          li.innerHTML = `
            <div><div class="award-title">${esc(a.title)}</div><div class="award-org">${esc(a.org)}</div></div>
            <div class="award-date">${esc(a.date)}</div>
          `;
          aul.appendChild(li);
        });
        box.appendChild(aul);
      }

      box.appendChild(el("h4", "detail-sub", "Projects"));
      const projRow = el("div", "tile-grid jlr-proj-row");
      projRow.style.setProperty("--jlr-proj-cols", String(e.subProjects.length));
      const fullDetail = el("div", "jlr-proj-fulldetail");
      fullDetail.hidden = true;
      fullDetail.innerHTML = `<button type="button" class="jlr-detail-close" aria-label="Close project detail">✕</button><div class="jlr-detail-content"></div>`;
      const detailContent = fullDetail.querySelector(".jlr-detail-content");

      let activeId = null;
      const cards = e.subProjects.map((p) => {
        const card = el("article", "tile project-tile jlr-proj-card");
        card.dataset.id = p.id;
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.innerHTML = `
          <div class="tile-image"><img src="${esc(p.image || "assets/img/placeholder-project.svg")}" alt="${esc(p.title)}" loading="lazy"></div>
          <div class="tile-body">
            <h3>${esc(p.title)}</h3>
            <p class="tile-summary">${esc(p.summary || "")}</p>
            <div class="tile-cta jlr-proj-cta">View details →</div>
          </div>`;
        projRow.appendChild(card);
        return card;
      });

      const setActive = (id) => {
        activeId = id;
        cards.forEach((c) => c.classList.toggle("jlr-proj-selected", c.dataset.id === id));
        if (id) {
          const p = e.subProjects.find((sp) => sp.id === id);
          const orderedCats = p.categories && p.categories.length
            ? [...p.categories].sort((a, b) => DISCIPLINE_ORDER.indexOf(a.name) - DISCIPLINE_ORDER.indexOf(b.name))
            : null;
          const bulletsHtml = orderedCats
            ? orderedCats.map((cat) => `
                <div class="jlr-proj-cat">${esc(cat.name)}</div>
                <ul class="detail-list">${cat.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
              `).join("")
            : `<ul class="detail-list">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;
          detailContent.innerHTML = `
            <h3 class="jlr-detail-title">${esc(p.title)}</h3>
            ${bulletsHtml}
            ${p.tools && p.tools.length ? `<div class="detail-sub">Tools Used</div><div class="tools-row">${p.tools.map(toolBadge).join("")}</div>` : ""}
          `;
          fullDetail.hidden = false;
          fullDetail.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          fullDetail.hidden = true;
        }
      };
      cards.forEach((card) => {
        const onActivate = () => setActive(activeId === card.dataset.id ? null : card.dataset.id);
        card.addEventListener("click", onActivate);
        card.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); onActivate(); } });
      });
      fullDetail.querySelector(".jlr-detail-close").addEventListener("click", () => setActive(null));

      box.appendChild(projRow);
      box.appendChild(fullDetail);
    } else {
      box.appendChild(el("h4", "detail-sub", "Development highlights"));
      box.appendChild(el("ul", "detail-list", e.bullets.map((b) => `<li>${esc(b)}</li>`).join("")));
      if (e.tools && e.tools.length) {
        box.appendChild(el("h4", "detail-sub", "Tools Used"));
        box.appendChild(el("div", "tools-row", e.tools.map(toolBadge).join("")));
      }
    }
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
      <div class="exp-date-badge">${esc(e.period)}</div>`, (tile) => pushView({ crumb: shortTitle(e.role), render: () => expDetail(e, linkedProject) }, tile), "project-tile exp-tile"));
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
      </div>`, (tile) => pushView({ crumb: shortTitle(t.title), render: () => thesisDetail(t) }, tile), "project-tile");
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
  if (C.leadershipPhoto) {
    const leadershipPhoto = $("#leadershipPhoto");
    leadershipPhoto.src = C.leadershipPhoto;
    leadershipPhoto.hidden = false;
  }

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

  /* ---------------- Learnings ---------------- */
  const learningsGrid = $("#learningsGrid");
  (C.learnings || []).forEach((l) => {
    const block = el("div", "learning-item");
    block.innerHTML = `<h4>${esc(l.title)}</h4><p>${esc(l.text)}</p>`;
    learningsGrid.appendChild(block);
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
    { section: "experience", image: "front-upright-front.png", bottom: 10, left: -40, width: 580, rotate: 4 },
    { section: "thesis", image: "rocker-connect-front.png", bottom: 10, left: -40, width: 580, rotate: -5 },
    { section: "projects", image: "a-arm-upper-front.png", top: 60, right: -40, width: 520, rotate: 6 },
    { section: "projects", image: "roll-damper-front.png", top: 800, left: -60, width: 900, rotate: -35, opacity: 0.22 },
    { section: "projects", image: "front-wing-profile.png", top: 1115, right: 0, width: 340, rotate: 5 },
    { section: "projects", image: "rack-pinion-side.png", bottom: -35, left: -40, width: 700, rotate: 3 },
    { section: "education", image: "brake-disc-front.png", bottom: 10, left: -40, width: 640, rotate: 4 },
    { section: "toolkit", image: "steering-wheel-front.png", bottom: 10, left: -40, width: 640, rotate: -5 },
    { section: "toolkit", image: "rear-upright-front.png", top: 290, right: -40, width: 420, rotate: 5 },
    { section: "learnings", image: "front-upright-struct-front.png", bottom: 10, right: -40, width: 600, rotate: 4 }
  ];
  function placeDrawing(host, d) {
    const img = el("img", "bg-drawing");
    img.src = "assets/img/bg-drawings/" + d.image;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.style.width = d.width + "px";
    ["top", "bottom", "left", "right"].forEach((k) => { if (d[k] !== undefined) img.style[k] = d[k] + "px"; });
    img.style.transform = `${d.flipV ? "scaleY(-1) " : ""}rotate(${d.rotate}deg)`;
    if (d.opacity !== undefined) img.style.opacity = d.opacity;
    host.appendChild(img);
  }
  BG_DRAWINGS.forEach((d) => {
    const host = $("#" + d.section);
    if (host) placeDrawing(host, d);
  });
  // These two are pinned to specific FSAE cars, whose vertical position
  // within the section now depends on how many sub-projects each car has —
  // no longer a fixed spot, so they're placed relative to that car's own
  // rendered row instead of a static section-relative offset. The elements
  // are created immediately (so initParallax's synchronous scan below picks
  // them up like every other .bg-drawing), but their `top` is only
  // finalized once webfonts finish loading: measuring against the
  // pre-webfont fallback-font layout (taller, since the custom fonts here
  // run narrower) stranded them hundreds of pixels below the row they were
  // meant to sit next to, once the real fonts swapped in and reflowed it.
  function fsaeRowFor(titlePart) {
    const fsaeSection = $("#fsae");
    const rows = fsaeSection ? Array.from(fsaeSection.querySelectorAll(".fsae-row")) : [];
    return rows.find((row) => {
      const h3 = row.querySelector(".project-tile h3");
      return h3 && h3.textContent.includes(titlePart);
    });
  }
  function positionNextToFsaeRow(img, titlePart, topOffset) {
    const fsaeSection = $("#fsae");
    const row = fsaeRowFor(titlePart);
    if (!img || !row || !fsaeSection) return;
    const top = Math.round(row.getBoundingClientRect().top - fsaeSection.getBoundingClientRect().top);
    img.style.top = top + topOffset + "px";
  }
  const fsaeDrawingSpecs = [
    { titlePart: "RMSE'21", topOffset: 20, image: "chassis-tubes-side.png", right: -40, width: 760, rotate: 60, flipV: true },
    { titlePart: "IEM'26", topOffset: 10, image: "motor-mount-front.png", right: -40, width: 620, rotate: -6 }
  ];
  const fsaeDrawingEls = fsaeDrawingSpecs.map((spec) => {
    const fsaeSection = $("#fsae");
    if (!fsaeSection) return null;
    const img = el("img", "bg-drawing");
    img.src = "assets/img/bg-drawings/" + spec.image;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.style.width = spec.width + "px";
    img.style.right = spec.right + "px";
    img.style.transform = `${spec.flipV ? "scaleY(-1) " : ""}rotate(${spec.rotate}deg)`;
    fsaeSection.appendChild(img);
    return img;
  });
  const positionFsaeDrawings = () => fsaeDrawingSpecs.forEach((spec, i) => positionNextToFsaeRow(fsaeDrawingEls[i], spec.titlePart, spec.topOffset));
  positionFsaeDrawings(); // best-effort now, corrected below once fonts settle
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionFsaeDrawings);

  /* ---------------- Footer ---------------- */
  $("#footerText").textContent = `© ${new Date().getFullYear()} ${C.meta.name}`;

  /* ---------------- Scroll reveal ---------------- */
  // Fades + rises section headings and grid/list cards into place as they
  // cross into view, and staggers siblings within a grid so they cascade
  // rather than popping in together. Anything inside the modal system is
  // left alone — it's opened deliberately, not scrolled to.
  (function initScrollReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll(".section-head").forEach((head) => {
      head.querySelector(".section-title")?.classList.add("reveal");
      head.querySelector(".section-rule")?.classList.add("reveal-rule");
    });

    const staggerContainers = [
      "#expList", "#thesisGrid", "#projectGrid",
      "#softwareGrid", "#manufacturingGrid", "#leadershipTimeline",
      "#eduList", "#awardList", "#learningsGrid"
    ];
    staggerContainers.forEach((sel) => {
      const container = $(sel);
      if (!container) return;
      const step = sel === "#awardList" ? 45 : 70; // awards' current pace was called out as already right
      // Multi-column CSS grids (project/tile/learnings grids) repeat the
      // stagger every row instead of running it once across the whole grid --
      // otherwise rows past the first couple all land on the same clamped
      // delay and pop in together instead of cascading like earlier rows.
      const gtc = getComputedStyle(container).gridTemplateColumns;
      const cols = gtc && gtc !== "none" ? gtc.split(" ").filter(Boolean).length : 0;
      Array.from(container.children).forEach((child, i) => {
        child.classList.add("reveal");
        const cycleIndex = cols > 1 ? i % cols : Math.min(i, 6);
        child.style.transitionDelay = cycleIndex * step + "ms";
      });
    });

    // The sub-project cards cascade in with the stagger restarting every
    // five cards, the same per-row pattern Featured Projects uses, so a long
    // grid doesn't pile every late card onto one delay.
    document.querySelectorAll("#fsaeGrid .fsae-row").forEach((row) => {
      const carTile = row.querySelector(".project-tile");
      if (carTile) { carTile.classList.add("reveal"); carTile.style.transitionDelay = "0ms"; }
      row.querySelectorAll(".subproj-card").forEach((card, i) => {
        card.classList.add("reveal");
        card.style.transitionDelay = (i % 5) * 70 + "ms";
      });
    });

    const heroBits = [".hero-name-block", ".hero-sub", ".stat-strip-wrap"];
    heroBits.forEach((sel, i) => {
      const node = $(sel);
      if (!node) return;
      node.classList.add("reveal");
      node.style.transitionDelay = i * 90 + "ms";
    });

    $("#aboutText")?.classList.add("reveal");
    $(".auth-col")?.classList.add("reveal");

    if (reduceMotion) return; // CSS already renders these at full opacity, no observer needed

    // Toggles both ways (not just once) so scrolling back up resets a
    // section's cards, and scrolling down into them again replays the reveal.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("reveal-visible", entry.isIntersecting);
      });
    }, { threshold: 0.01, rootMargin: "0px" });

    document.querySelectorAll(".reveal, .reveal-rule").forEach((node) => observer.observe(node));
  })();

  /* ---------------- Parallax: hero sketch + section background drawings ---------------- */
  (function initParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heroImg = document.querySelector(".hero-blueprint img");
    const drawings = Array.from(document.querySelectorAll(".bg-drawing"));
    if (!heroImg && !drawings.length) return;

    drawings.forEach((d) => { d.dataset.baseTransform = d.style.transform || ""; });

    let ticking = false;
    function update() {
      if (heroImg) heroImg.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      drawings.forEach((d) => {
        const rect = d.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        const drift = Math.max(-24, Math.min(24, center * -0.04));
        d.style.transform = `${d.dataset.baseTransform} translateY(${drift}px)`;
      });
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  })();
})();

