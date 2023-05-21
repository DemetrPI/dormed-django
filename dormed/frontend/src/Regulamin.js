import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

function Regulamin() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Nav.Link className="pulse" onClick={() => setShow(true)}>
        <Trans i18nKey="REGULAMIN">REGULAMIN</Trans>
      </Nav.Link>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        fullscreen
        centered
      >
        <Modal.Header closeButton className="modalHeader"></Modal.Header>
        <Modal.Title className="text-center modalTitle">
          <h1>{t("Regulamin Willi Dorotka i Dormed Medical SPA")}</h1>
          <p>{t("(obowiązuje od 01.11.2017)")}</p>
        </Modal.Title>

        <Modal.Body className="modalBody">
          <p>{t("Właściciel")}</p>
          <p>{t("Recepcja ogólna")}</p>
          <ol type="I">
            <li>
              {t("zakaz palenia")}
              <p>{t("przypadku")}</p>
            </li>
            <li>
              {t("Określenie doby hotelowej")}
              <p>{t("Doba hotelowa")}</p>
              <p>{t("Gość przybywający")}</p>
              <p>{t("Zajmujący")}</p>
              <p>{t("Płatność")} </p>
              <p>{t("W przypadku braku")}</p>
            </li>
            <li>
              {t(" Tryb przedłużania pobytu")}
              <p>{t("Życzenia")}</p>
            </li>
            <li>
              {t(
                "Willa Dorotka oraz pensjonat Dormed Medical SPA ma obowiązek zapewnić: "
              )}
              <ol type="i">
                <li>{t("Warunki")}</li>
                <li>{t("Profesjonalną i miłą obsługę.")}</li>
                <li>{t("Sprzątanie pokoju 2 razy w tygodniu")}</li>
                <li>{t("Bezpłatną ręczników")}</li>
                <li>{t("Bezpłatną pościeli")}.</li>
                <li>{t("Wykonywanie")}</li>
              </ol>
            </li>
            <li>
              {t("Świadczenie usług")}
              <p>{t("Na życzenie")}</p>
              <ol type="i">
                <li>
                  {t("udzielanie informacji związanych z pobytem lub podróżą")}
                </li>
                <li>{t("zamawianie taxi")}</li>
                <li>{t("udostępnienia grilla ogrodowego")}</li>
                <li>{t("bezprzewodowe łącze internetowe")}</li>
                <li>{t("udostępnienie żelazka")}</li>
                <li>{t("parking monitorowany")}</li>
              </ol>
              <p>{t("Ze względu")}</p>
            </li>
            <p>{t("Odpłatne usługi")}</p>
            <ol type="i">
              <li>{t("śniadania na ustaloną z recepcją godzinę")}</li>
              <li>{t("obiady na ustaloną z recepcją godzinę")}</li>
              <li>{t("kolacje na ustaloną z recepcją godzinę")}</li>
              <li>{t("kawa Lavazza z expresu ciśnieniowego")}</li>
              <li>{t("herbata owocowa, zielona lub czarna z cytryną")}</li>
              <li>{t("zabiegi z zakresu fizykoterapii i balneologii")}</li>
              <li>{t("zabiegi z zakresu kosmetyki, manicure, pedicure")}</li>
              <li>
                {t("Zabiegi z zakresu kosmetologii i medycyny estetycznej")}
              </li>
              <li>{t("Masaż")}</li>
              <li>{t("Rowerek")}</li>
              <li>{t("Rowery")}</li>
              <li>{t("Solarium")}</li>
            </ol>
            <li>
              {t("Podejmowanie")}
              <p>{t("Pokój wynajmowany")}</p>
            </li>
            <li>
              {t(
                "Przebywanie osób trzecich w pokojach gościnnych w porze nocnej "
              )}
              <p> {t("Osoby nie zameldowane")}</p>
            </li>
            <li>
              {t("Obowiązywanie ciszy nocnej")}
              <p>{t("spokojnego pobytu")}</p>
            </li>
            <li>
              {t(" Tryb składania reklamacji")}
              <p>
                {t("Goście mają prawo")}
                <span>
                  <a href="mailto:willadorotka@gmail.com">
                    willadorotka@gmail.com
                  </a>
                </span>{" "}
                {t("lub")}{" "}
                <span>
                  <a href="mailto:salon@salondorotka.pl">
                    salon@salondorotka.pl
                  </a>
                </span>
              </p>
            </li>
            <li>
              {t(
                "Odpowiedzialność za utratę lub uszkodzenie rzeczywniesionych przez gości"
              )}
              <p>{t("Właściciel nie ponosi")}</p>
            </li>
            <li>
              {t("Ograniczenie w korzystaniu z urządzeń elektrycznych ")}
              <p>{t("Ze bezpieczeństwo")}</p>
            </li>
            <li>
              {t(
                "Odpowiedzialność za utratę lub uszkodzenie wyposażenia pokoi"
              )}
              <p> {t("Każdy pokój")}</p>
            </li>
            <li>
              {t("Przebywanie zwierząt")}
              <p>{t("Za odpowiednią zwierzętami")}</p>
              <p className="text-danger text-center">
                {t("nie przyjmuje zwierząt")}
              </p>
            </li>
            <li>
              {t("BEZPIECZNE")}
              <span className="text-success">
                {t("Centrum Rozliczeniowego Dotpay")}
              </span>
              <p>{t("wymaga wpłaty")}</p>
            </li>
          </ol>
          <h4 className="text-center text-success">
            {t("OCHRONA DANYCH OSOBOWYCH")}
          </h4>
          <p>
            <span className="text-success">Dotpay</span>
            {t("przykłada")}
          </p>
          <p>
            {t(
              "Skargi i wnioski proszę składać osobiście lub za pomocą e-maila:"
            )}
            <span>
              {" "}
              <a href="mailto:willadorotka@gmail.com">willadorotka@gmail.com</a>
            </span>{" "}
            {t("lub")}
            <span>
              <a href="mailto:salon@salondorotka.pl">salon@salondorotka.pl</a>
            </span>
          </p>
          <h4 className="text-success text-center">
            {t("Życzę Państwu miłego pobytu!")}
          </h4>
          <h4 className="text-success text-center">
            {t("dr n. med. Dorota Sagan")}
          </h4>
        </Modal.Body>
        <Modal.Footer className="modalHeader"></Modal.Footer>
      </Modal>
    </>
  );
}

export default Regulamin;
