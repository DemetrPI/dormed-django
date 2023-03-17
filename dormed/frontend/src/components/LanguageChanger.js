import Dropdown from "react-bootstrap/Dropdown";
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
      <Dropdown>
        <Dropdown.Toggle
          className="justify-content-end regulamin pulse"
          id="dropdown"
        >
          <Trans trKey="JĘZYK">JĘZYK</Trans>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => changeLanguage("pl")} className="pulse">
            <Trans trKey="polish">Polska</Trans>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage("uk")} className="pulse">
            <Trans trKey="ukrainian">Ukrainian</Trans>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeLanguage("en")} className="pulse">
            <Trans trKey="english">English</Trans>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default LanguageChanger;
