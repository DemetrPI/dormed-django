import React from "react";
import Map from "./components/Navigation";
import MailUsForm from "./components/MailUsForm";
import Footer from "./components/Footer";
import { Trans, useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="contactInfo ms-2">
        <h2 className="text-center mt-3"> {t("DOJAZD Z KIERUNKU")}</h2>
        <h3>{t("KIELCE")}</h3>
        <p>{t("KIELCE-ronda")}</p>
        <h3>{t("PIŃCZÓW")}</h3>
        <p>{t("PIŃCZÓW-ronda")}</p>
        <h3>{t("TARNÓW")}</h3>
        <p>{t("TARNÓW-ronda")}</p>
        <h3>{t("KRAKÓW")}</h3>
        <p>{t("KRAKÓW-ronda")}</p>
        <h2 className="text-center mt-3">{t("Wyślij wiadomość:")}</h2>
      </div>
      <div className="d-flex justify-content-center">
        <MailUsForm />
      </div>
      <h2 className="text-center">{t("Możesz nas znaleźć na mapie Google")}</h2>
      <div className="d-flex justify-content-center">
        <Map />
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Contacts;
