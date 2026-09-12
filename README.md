# Arjav Jain — Portfolio Site

A single-page portfolio built with plain HTML/CSS/JS — no build step, no
framework, no `npm install`. That's deliberate: it means you can edit the
site directly on GitHub.com, or in any text editor, and just push.

- **Edit content:** [`EDITING_GUIDE.md`](EDITING_GUIDE.md) — start here.
- **All page text/data lives in:** `data/content.js`
- **Page structure:** `index.html`
- **Styling:** `assets/css/style.css`
- **Behavior (filtering, rendering, nav):** `assets/js/main.js`

## Why this structure

Everything visible on the page — your bio, stats, projects, experience,
skills, links — is data inside `data/content.js`. `index.html`/`main.js`
just render whatever is in that file. That means 95% of future edits
(new project, updated metric, new job, new link) only touch one file and
never touch HTML/CSS, so there's very little to break.

## Previewing locally

Because there's no build step, you can just open `index.html` in a browser
— but Windows will block it from loading `data/content.js` in some setups
(local file security restrictions), so the more reliable option is to run
a tiny local server:

```bash
# from inside the Portfolio Website folder, if you have Python:
python -m http.server 8080
```

Then open `http://localhost:8080`. (If you don't have Python, any static
server works — `npx serve`, the VS Code "Live Server" extension, etc.)

## Deploying to GitHub Pages

Git isn't installed on this machine, so pick whichever of these you're
most comfortable with:

**Option A — GitHub Desktop (recommended if you don't already use git)**
Install [GitHub Desktop](https://desktop.github.com/), sign in, "Add
existing repository" pointing at this folder, publish it, then use its
UI to commit/push future changes. No command line needed, ever.

**Option B — install Git and use the command line**
Install [Git for Windows](https://git-scm.com/download/win), then from
inside this folder:
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

**Option C — no install, upload via GitHub.com**
Create the repo on GitHub.com, then use "Add file → Upload files" and
drag this whole folder in. Works for the first upload; after that,
`EDITING_GUIDE.md` shows how to edit files directly on GitHub.com without
ever installing anything.

For any option: name the repo `<your-username>.github.io` if you want the
site at `https://<your-username>.github.io`, or any other name if you're
fine with `https://<your-username>.github.io/<repo-name>`.

Once the repo exists on GitHub: **Settings → Pages** → under "Build and
deployment", set **Source** to "Deploy from a branch", branch `main`,
folder `/ (root)`. Save. GitHub gives you a live URL within a minute or
two. Every future push/commit redeploys automatically — no build step.

### Custom domain (optional)

If you buy a domain later: add a `CNAME` file at the repo root containing
just the domain (e.g. `arjavjain.com`), then point the domain's DNS at
GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
Not required — the default `github.io` URL is perfectly fine to put on a
resume/LinkedIn.

### Why GitHub Pages (vs. Netlify/Vercel)

You asked to host on GitHub Pages, and it's a good fit here: free, no
backend needed (this site has none), version-controlled by nature, and a
push-to-deploy workflow that matches "edit content.js, push" perfectly.
Netlify/Vercel would give you the same result with marginally nicer preview
links for pull requests — not worth switching for a static personal site.

## What's still a placeholder

Search `data/content.js` for the string `add ` inside quotes, or look for
anything wrapped like `— add X —` — those are the spots the site
deliberately leaves for you to fill in with real values (competition
rankings, GitHub URL, visa/work-authorization status, project links,
photos). On the live page they render in a dashed gold color so they're
easy to spot. See `EDITING_GUIDE.md` for exactly how to fill each one in.
