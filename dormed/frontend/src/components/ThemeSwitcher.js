import React, { useState, useEffect } from "react";
import "../../static/css/themeSwitcher.css";
import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { applyThemeClasses } from "./applyThemeClasses";

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

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeClasses(newTheme);
  };

  
  return (
    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>{t("COLOR THEME")}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeTheme("pink")} id="pink">
          {t("Pink")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeTheme("blue")} id="blue">
          {t("Blue")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeTheme("green")} id="green">
          {t("Green")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeTheme("dark")} id="dark">
          {t("Dark")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

  );
}

export default ColorThemeSwitcher;
