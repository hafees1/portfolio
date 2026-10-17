# Hafees Portfolio

Plain HTML, CSS and JavaScript. No build step. Open `index.html` to run it.

## Add a project
Open `assets/js/content.js`, copy a block inside `window.PROJECTS`, change title/link/description/tags. Done.

## Add a writing
1. Copy the folder `posts/_template` and rename the copy (e.g. `why-i-love-linux`).
2. Open the copy's `index.html`:
   - set `data-slug="..."` on the `<body>` tag to the same folder name
   - write the article inside `<div class="article-body">`
3. Open `assets/js/content.js` and add a block to `window.POSTS` with the same `slug`, a `title`, `date` (YYYY-MM-DD) and `minutes`.

The home page, writings page, title, date and nav are generated automatically. Newest posts show first.

## Files
- `index.html`, `posts/index.html` — pages (lists are generated)
- `posts/<slug>/index.html` — one page per article
- `assets/js/content.js` — **your projects and writings list**
- `assets/js/render.js` — builds the lists (no need to touch)
- `assets/js/theme.js`, `assets/css/style.css` — theme toggle and design
