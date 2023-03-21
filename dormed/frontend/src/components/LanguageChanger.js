import Dropdown from "react-bootstrap/Dropdown";
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

function LanguageChanger() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as = {NavLink} className="pulse" id="dropdown"
        ><Trans i18nKey="JĘZYK">JĘZYK</Trans>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => changeLanguage("pl")} className="pulse">
            <Trans i18nKey="polish">Polska</Trans>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage("uk")} className="pulse">
            <Trans i18nKey="ukrainian">Ukrainian</Trans>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage("en")} className="pulse">
            <Trans i18nKey="english">English</Trans>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default LanguageChanger;
