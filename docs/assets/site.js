(() => {
  const yearNodes = document.querySelectorAll("[data-current-year]");
  const year = String(new Date().getFullYear());

  yearNodes.forEach((node) => {
    node.textContent = year;
  });

  document.querySelectorAll("[data-back]").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
        return;
      }

      window.location.href = "../";
    });
  });

  const mobileViewport = window.matchMedia("(max-width: 760px)");

  document.querySelectorAll(".legal-toc").forEach((toc) => {
    if (mobileViewport.matches) {
      toc.removeAttribute("open");
    }

    toc.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileViewport.matches) {
          toc.removeAttribute("open");
        }
      });
    });
  });
})();
