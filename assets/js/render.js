(() => {
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const esc = (s) => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const fmt = (iso) => { const [y,m,d] = iso.split("-").map(Number); return `${MONTHS[m-1]} ${d}, ${y}`; };
  const posts = [...(window.POSTS || [])].sort((a,b) => b.date.localeCompare(a.date));
  const projects = window.PROJECTS || [];

  // prefix = path from the current page back to the site root
  const root = document.body.dataset.root || "";

  const postRow = (p) =>
    `<li><a href="${root}posts/${esc(p.slug)}/index.html"><span class="date">${fmt(p.date)}</span><span class="title">${esc(p.title)}</span><span class="read">${p.minutes} min read</span></a></li>`;

  const projectItem = (p) =>
    `<li><a href="${esc(p.link)}" target="_blank" rel="noreferrer"><span>${esc(p.title)}</span> <span class="project-arrow" aria-hidden="true">↗</span></a>` +
    `<p>${esc(p.description)}</p>` +
    ((p.tags && p.tags.length) ? `<div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : "") +
    `</li>`;

  document.querySelectorAll('[data-render="posts"]').forEach((el) => {
    const limit = Number(el.dataset.limit) || posts.length;
    el.innerHTML = posts.slice(0, limit).map(postRow).join("");
  });
  document.querySelectorAll('[data-render="projects"]').forEach((el) => {
    el.innerHTML = projects.map(projectItem).join("");
  });

  // Article pages: fill in title and date from content.js using <body data-slug="...">
  const slug = document.body.dataset.slug;
  if (slug) {
    const post = posts.find((p) => p.slug === slug);
    if (post) {
      document.title = `${post.title} — Hafees`;
      const h1 = document.querySelector(".article-header h1");
      const meta = document.querySelector(".article-meta");
      if (h1) h1.textContent = post.title;
      if (meta) meta.textContent = `${fmt(post.date)} · ${post.minutes} min read`;
    }
  }

  // On the live website (http/https) show clean links without "index.html".
  // When opened from your computer (file://) keep index.html so folders don't show a file listing.
  if (location.protocol === "http:" || location.protocol === "https:") {
    document.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      if (/(^|\/)index\.html$/.test(href) && !/^[a-z]+:/i.test(href)) {
        const clean = href.replace(/index\.html$/, "");
        a.setAttribute("href", clean || "./");
      }
    });
  }
})();
