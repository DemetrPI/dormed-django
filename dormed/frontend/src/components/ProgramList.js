import React from "react";
import "../../static/css/custom.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const ProgramList = ({ programs }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div>
      {!programs || programs.length <= 0 ? (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3><Trans i18nKey="Ops, no one here yet">Ops, no one here yet</Trans></h3>
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        programs.map((program) => (
          <div key={program.pk}>
            <Accordion flush>
              <Accordion.Item eventKey={program.pk}>
                <Accordion.Header>
                  <h3>{program[`title_${currentLanguage}`]}</h3>
                </Accordion.Header>
                <Accordion.Body>
                <h4>{program[`description_${currentLanguage}`]}</h4>
                <p>{program[`results_${currentLanguage}`]}</p>
                  <Button>
                    <a href="https://wirtualny-kalendarz.pl/rezerwacje-online/5d72d7ed85ec833211caec159436a6df">
                    <Trans i18nKey = "order">Zamów!</Trans>
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
