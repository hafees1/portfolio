(() => {
  const root = document.documentElement;
  let theme = "dark";
  try { theme = localStorage.getItem("hafees-theme") || "dark"; } catch (_) {}

  function applyTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    document.querySelectorAll(".theme-toggle").forEach((button) => {
      button.textContent = theme === "light" ? "dark" : "light";
      button.setAttribute("aria-label", `Switch to ${theme === "light" ? "dark" : "light"} theme`);
      button.setAttribute("aria-pressed", String(theme === "dark"));
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#10100f" : "#faf9f6");
    try { localStorage.setItem("hafees-theme", theme); } catch (_) {}
  }
  root.dataset.theme = theme;
  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(theme);
    document.querySelectorAll(".theme-toggle").forEach(button => {
      button.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
    });
  });
})();
