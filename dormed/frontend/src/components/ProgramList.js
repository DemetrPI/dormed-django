import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "reactstrap";
import { useTranslation, Trans } from "react-i18next";

const ProgramList = ({ programs, filteredItems, handleThemeChange, selectedCategory }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [activeKey, setActiveKey] = useState(null);
  
  const filteredByCategory = selectedCategory
  ? programs.filter((program) => program.category === selectedCategory.value)
  : programs;
  
  const itemsToRender = filteredItems.length ? filteredItems : filteredByCategory;
  

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      handleThemeChange(currentTheme);
    }
  }, [handleThemeChange]);

  const handleAccordionClick = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <div className="programList">
      {!itemsToRender || itemsToRender.length <= 0 ? (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3>
                <Trans i18nKey="Ops, no one here yet">
                  Ops, no one here yet
                </Trans>
              </h3>
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        itemsToRender.map((program) => (
          <div key={program.pk}
          >
            <Accordion activeKey={activeKey}>
              <Accordion.Item
                key={program.pk}
                eventKey={program.pk}
                onClick={() => handleAccordionClick(program.pk)}
              >
                <Accordion.Header>
                  <h3 className="accordBtnText">
                    {program[`title_${currentLanguage}`]}
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <h4>{program[`description_${currentLanguage}`]}</h4>
                  <p className="programEffects">{program[`results_${currentLanguage}`]}</p>
                  <Button className="accordBtn">
                    <a href="https://wirtualny-kalendarz.pl/rezerwacje-online/5d72d7ed85ec833211caec159436a6df">
                      <Trans i18nKey="order">Zamów!</Trans>
                    </a>
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))
      )}
    </div>
  );
};

export default ProgramList;
