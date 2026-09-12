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
- `context` — must be exactly one of `"Formula Student"`, `"Industry"`,
  or `"Research"` (these power the filter chips).
- `tags` — a list of one or more of the five strings in
  `filters.disciplines` at the top of the file (also powers filtering).
  Don't invent a new tag string without also adding it to
  `filters.disciplines`, or it won't show up as a filter chip.
- `bullets` — as many as you want; they show in the expandable "technical
  breakdown" on the card.
- `metrics` — 2-4 stat tiles. Use real numbers where you have them,
  placeholders otherwise.
- `links` — optional; delete the array entirely (`links: []`) if there's
  nothing to link yet.
- `image` — path to a photo; see `assets/img/projects/README.txt`.

### Add a new work experience entry

Same idea, inside `experience: [ ... ]`. Most recent should go first —
order in the file is the order shown on the page.

### Change your headline / tagline / bio

Edit `meta.role`, `meta.tagline`, and `about.paragraphs` near the top of
the file.

### Update contact info, GitHub link, work authorization

All in the `meta: { ... }` block near the top:
`email`, `phone`, `linkedin`, `github`, `workAuthorization`.
`workAuthorization` is worth prioritizing — EU/UK motorsport teams filter
hard on visa sponsorship, and stating your situation plainly (e.g. "UK
Graduate visa, no sponsorship required until [date]" or "will require
sponsorship") saves everyone time and reads as confident, not as a
weakness.

### Swap the résumé PDF

Drop the file in `resume/` and either name it `Arjav_Jain_Resume.pdf` or
update `meta.resumeFile` in `content.js` to match your filename.

### Add your profile photo

Drop an image in `assets/img/` (a square crop works best, e.g. 400x400px),
then set `meta.profileImage` in `content.js` to its path. It shows up as
the small photo in the "Status" card in the About section.

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
