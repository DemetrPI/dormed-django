import React, { useState, useEffect } from "react";
import "../../static/css/themeSwitcher.css";
import { useTranslation } from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function ColorThemeSwitcher() {
  const [theme, setTheme] = useState("pink");
  const { t } = useTranslation();


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
        (t{"SelectTheme"})
        <option value="pink" id="pink">{t("Pink")}</option>
        <option value="blue" id= "blue">{t("Blue")}</option>
        <option value="green" id="green">{t("Green")}</option>
        <option value="dark" id="dark">{t("Dark")}</option>
      </select>
    </div>
  );
}

export default ColorThemeSwitcher;
