export const applyThemeClasses = (themeName) => {
    // Remove any existing theme classes from the document
    const themeClasses = ["pink", "blue", "green", "dark"];
    document.body.classList.remove(...themeClasses);
    document
      .querySelectorAll(
        ".nav, .accordion-button, .accordion-body, .hero, .modal-90w, .submitButton, .accordion-item, .scrollTop, label, [aria-expanded='true'], [aria-modal='true'], a, h1, h2, h3, h4, h5, h6, table, td, th, .programEffects"
      )
      .forEach((element) => {
        element.classList.remove(...themeClasses);
      });
    // Add the appropriate theme class to the document and elements
    document.body.classList.add(themeName);
    document
      .querySelectorAll(
        ".nav, .accordion-button, .accordion-body, .hero, .modal-90w, .submitButton, .accordion-item, .scrollTop, label, [aria-expanded='true'], [aria-modal='true'], a, h1, h2, h3, h4, h5, h6, table, td, th, .programEffects"
      )
      .forEach((element) => {
        element.classList.add(themeName);
      });
  };
  