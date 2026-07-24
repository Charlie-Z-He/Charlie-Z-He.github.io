(() => {
  const lightbox = document.querySelector("#image-lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const lightboxClose = document.querySelector("#lightbox-close");
  if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxClose) return;

  let activeFigureTrigger = null;

  function openFigure(trigger) {
    const figure = trigger.closest("figure");
    const sourceImage = trigger.querySelector("img");
    const sourceCaption = figure?.querySelector("figcaption");
    if (!sourceImage) return;

    activeFigureTrigger = trigger;
    lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
    lightboxImage.alt = sourceImage.alt;
    lightboxImage.width = Number(sourceImage.getAttribute("width"));
    lightboxImage.height = Number(sourceImage.getAttribute("height"));
    lightboxCaption.textContent = sourceCaption?.textContent.trim() || "";
    lightbox.showModal();
    lightboxClose.focus();
  }

  document.querySelectorAll(".figure-open").forEach((trigger) => {
    trigger.addEventListener("click", () => openFigure(trigger));
    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
      event.preventDefault();
      openFigure(trigger);
    });
  });

  lightboxClose.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      event.preventDefault();
      lightbox.close();
    }
  });
  lightbox.addEventListener("close", () => {
    lightboxImage.removeAttribute("src");
    activeFigureTrigger?.focus();
  });
})();
