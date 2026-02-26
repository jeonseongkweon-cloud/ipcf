(() => {
  // year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // mobile nav
  const btn = document.getElementById("navBtn");
  const nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const opened = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", opened ? "true" : "false");
    });
  }
})();
