(() => {
  document.querySelectorAll(".legal-toc").forEach((toc) => {
    toc.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", () => {
        toc.removeAttribute("open");
      });
    });
  });
})();
