# Editing Guide (no coding required)

Everything on the site is driven by one file: **`data/content.js`**.
You will do almost all future edits there. This guide walks through the
common ones.

You can edit it three ways:
1. **On GitHub.com** — open the file in your repo, click the pencil icon,
   edit, commit directly to `main`. Simplest option, no local setup.
2. **In a text editor** (VS Code, Notepad++, etc.) on your own machine,
   then `git add . && git commit -m "..." && git push`.
3. Ask a Claude Code session to make the edit for you and describe what
   you want changed — but the whole point of this structure is that you
   shouldn't need to.

## The golden rules

- Every piece of text is inside quotes: `"like this"`.
- Every item in a list (the things inside `[ ... ]`) needs a comma after
  it, **except the very last one**.
- If you copy an existing block and edit it, you're very unlikely to break
  anything — the format is repetitive on purpose.
- If the site goes blank after an edit, you almost certainly have a
  missing comma or an unmatched quote. Open the browser console (press
  F12, click "Console") — it'll show something like "Unexpected token" and
  a line number. Or just undo your last change and try again more
  carefully.

## Placeholders — how they work

Anything I couldn't pull a real number or link for from your resumes is
written as a placeholder, e.g.:

```js
{ label: "Competition result", value: "", isPlaceholder: true }
```

or for a link:

```js
{ label: "Team site", url: "— add Illini Electric Motorsports link —", isPlaceholder: true }
```

On the live page these render in dashed gold text so they're obviously
unfinished — visitors will read them as "not filled in yet," not as
broken. To fill one in:

- **Metric:** replace `value: ""` with the real value, e.g. `value: "3rd overall"`,
  and delete the `, isPlaceholder: true` part entirely.
- **Link:** replace the `— add ... —` text with the real URL, and delete
  `, isPlaceholder: true`.

You don't have to remove every placeholder before publishing — a
dashed-gold "add value" on a project card is normal and honest while
you're still gathering that information (e.g. IEM'26 hasn't competed yet).

## Common edits

### Update a metric on an existing project

Find the project by its `title` inside the `projects: [ ... ]` list, then
edit the matching entry in its `metrics: [ ... ]` array.

### Add a new project

Copy an entire `{ id: "...", title: "...", ... }` block inside `projects`,
paste it as a new entry (remember the comma between entries), then edit
every field. Fields:

- `id` — short unique lowercase slug, used internally only.
- `context` — `"Formula Student"` puts the project in the FSAE section
  instead of Projects; any other value (`"Industry"`, `"Research"`, etc.)
  keeps it in Projects. That's the only thing this field controls.
- `tags` — a short list of discipline strings (e.g. "Thermal & Energy
  Systems"); shown as chips in the project detail view, free-form.
- `bullets` — as many as you want; they show in the expandable "technical
  breakdown" on the card. Skip this field if the project has an entry in
  `subprojects` (see below) — its bullets show there instead and a
  top-level `bullets` array would just be unused.
- `metrics` — 2-4 stat tiles. Use real numbers where you have them,
  placeholders otherwise.
- `links` — optional; delete the array entirely (`links: []`) if there's
  nothing to link yet.
- `image` — path to a photo; see `assets/img/projects/README.txt`.

### Add a new work experience entry

Same idea, inside `experience: [ ... ]`. Most recent should go first —
order in the file is the order shown on the page. `experience` is only for
formal paid roles; a one-off academic/industry collaboration (like the
Dorle Controls engagement) belongs in `projects` instead, tagged
`context: "Industry"`.

Each entry also takes:
- `logo` — path to a company logo SVG/PNG (see `assets/img/logos/`); set
  it to `null` if you don't have one and a two-letter fallback badge (from
  the org name) renders instead.
- `product` — optional short product name shown as a small pill next to
  the org (e.g. `"RapidX"`); omit the field entirely if there's no named
  product to call out.
- `projectRef` — if this job also has a matching entry in `projects`, its
  `id` here pulls that project's metric tiles into the experience card
  automatically. Leave it out if there's no matching project.
- `productImage` / `productCaption` — an optional photo of something the
  company makes (e.g. Tesla's Powerwall), shown alongside the bullets.
  Set both to `null` if you don't have a photo you're cleared to use —
  don't use a random photo pulled off the web without checking its
  license; company press pages and Wikimedia Commons (check the license
  on the file page) are the safest sources.

### The three layers (projects → sub-projects → detail)

- **Layer 1** — the project tiles on the main page (image, title, summary,
  top 3 metrics). Comes from `projects`.
- **Layer 2** — clicking a tile opens a panel with the full project. If the
  project has an entry in `subprojects` (keyed by project `id`, e.g.
  `rmse23`), layer 2 shows those disciplines as tiles; otherwise it shows
  the project's `bullets` directly.
- **Layer 3** — clicking a sub-project tile shows its `bullets`, `metrics`
  and `image`. Each sub-project is `{ id, title, image, highlights: [2 short
  lines], bullets: [...], metrics: [...] }`.

### Software & Manufacturing tiles

`toolkit.software` and `toolkit.manufacturing` each hold tiles:
`{ name, caption, image, tools: [...], gallery: [{ image, caption }, ...] }`.
`image` is the tile thumbnail (your most complex example in that tool);
`gallery` is the extra evidence shown when the tile is opened. Put files in
`assets/img/projects/` and point the paths there.

### Add or edit a thesis (Thesis & Publications section)

Each entry in `theses: [ ... ]` renders as its own card, side by side.
`publications` is a list of `{ title, venue, status, url }` — set
`isPlaceholder: true` (and leave `url` as an "— add ... —" string) until
you have the real citation and link; it'll render as an obvious
dashed-gold "add publication details" placeholder until then.

### Update education (degree, thesis, teaching, coursework)

Each entry in `education: [ ... ]` has an optional `thesis` string (shown
in a highlighted callout — leave it out entirely for a degree with no
thesis), an optional `teaching` string (a one-line TA credit, e.g. "Graduate
Teaching Assistant — Heat Transfer (166 students)" — leave it out if none),
and a `coursework` array of short course-name strings, which render as a
chip row. Add or remove strings from any of these freely.

### Change your headline / bio

Edit `meta.role`, `hero.hook`, and `about.paragraphs` near the top of the
file. `hero.hook` is the one big sentence under your name in the hero —
keep it to roughly 3 lines at desktop width, or it'll wrap awkwardly.

### Update contact info

`email`, `phone`, and `linkedin` are in the `meta: { ... }` block near the
top. They render as the row of 3 icon links below the About photo — each
opens `mailto:`, `tel:`, or the URL directly. `meta.github` still exists
in case you want to bring GitHub back later, but it isn't rendered.

### The Experience timeline bar and cards

The bar above the Work Experience tiles is computed automatically from
each entry's `period` string — there's nothing to edit by hand. Just keep
`period` in the "Mon YYYY – Mon YYYY" format (e.g. `"May 2026 – Aug
2026"`) when you add or edit a role, and the bar's segment position/width
and the tile order (left = earliest) update themselves. The tiles below
the bar use the same tile-and-modal template as Projects — add a
`summary` string to an experience entry (one line) for the tile, and its
`bullets`/`productImage` show in the detail view when it's clicked.

### Add your profile photo

Drop an image in `assets/img/` and set `meta.profileImage` in `content.js`
to its path. It fills the top block next to the About text — any aspect
ratio works, it's cropped to fill the block (`object-fit: cover`). The
block below it shows `meta.university`, `meta.location`, and the GPA from
your first `education` entry; the block below that is the 3 contact icons.

### Reorder sections or change the nav

That's in `index.html`, not `content.js` — each `<section id="...">`
corresponds to one nav link. Reordering sections means cutting/pasting a
whole `<section>...</section>` block to a new position, and reordering the
matching `<li><a href="#...">` in the nav list to match.

## Things that live in code (rarely touched)

- **Visual design/colors/spacing** — `assets/css/style.css`. The color
  variables are all declared once at the top in `:root { ... }` if you
  want to try a different accent color.
- **Filtering logic, card rendering** — `assets/js/main.js`. You shouldn't
  need to touch this for content changes.
