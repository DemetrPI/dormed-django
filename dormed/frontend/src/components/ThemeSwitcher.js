import React, { useState, useEffect } from "react";
import "../../static/css/themeSwitcher.css";

function ColorThemeSwitcher() {
  const [theme, setTheme] = useState("pink");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
      applyThemeClasses(currentTheme);
    }
  }, []);

  const changeTheme = (e) => {
    const newTheme = e.target.value;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeClasses(newTheme);
  };

  const applyThemeClasses = (themeName) => {
    // Remove any existing theme classes from the document
    const themeClasses = ["pink", "blue", "green", "dark"];
    document.body.classList.remove(...themeClasses);
    document
      .querySelectorAll(
        ".nav, .accordion-button, .accordion-body, .hero, .modal-90w, .submitButton, .accordion-item, label, [aria-expanded='true'], [aria-modal='true'], a, h1, h2, h3, h4, h5, h6"
      )
      .forEach((element) => {
        element.classList.remove(...themeClasses);
      });

    // Add the appropriate theme class to the document and elements
    document.body.classList.add(themeName);
    document
      .querySelectorAll(
        ".nav, .accordion-button, .accordion-body, .hero, .modal-90w, .submitButton, .accordion-item, label, [aria-expanded='true'], [aria-modal='true'], a, h1, h2, h3, h4, h5, h6"
      )
      .forEach((element) => {
        element.classList.add(themeName);
      });
  };

  return (
    <div>
      <label htmlFor="theme-select"></label>
      <select id="theme-select" onChange={changeTheme} value={theme}>
        SelectTheme
        <option value="pink" id="pink">Pink</option>
        <option value="blue" id= "blue">Blue</option>
        <option value="green" id="green">Green</option>
        <option value="dark" id="dark">Dark</option>
      </select>
    </div>
  );
}

export default ColorThemeSwitcher;
