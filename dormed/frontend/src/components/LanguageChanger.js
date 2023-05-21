import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function LanguageChanger(props) {
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    props.onChange(); // Invoke onChange prop to trigger collapse
  };

  return (
    <Dropdown as={NavItem} onClick={props.handleSelect} ref={dropdownRef} autoclose="inside">
      <Dropdown.Toggle as={NavLink} className="pulse language" id="dropdown">
        <Trans i18nKey="JĘZYK">JĘZYK</Trans>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage("pl")} className="pulse language">
          <Trans i18nKey="polish">Polska</Trans>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage("uk")} className="pulse language">
          <Trans i18nKey="ukrainian">Ukrainian</Trans>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage("en")} className="pulse language">
          <Trans i18nKey="english">English</Trans>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageChanger;
