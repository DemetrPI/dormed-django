import React from "react";
import Facade from "../../frontend/static/images/facade.jpg";
import Markoni from "../../frontend/static/images/Markoni_Busko.jpg";
import Church from "../../frontend/static/images/BuskoZdrojWoodenChurch.jpg";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";

import "../static/css/custom.css";

function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="row ms-1 me-1">
        <p>
          <h4>
            {t(
              "Klinika Zdrowia i Urody Dormed Medical SPA dr n. med. Doroty Sagan"
            )}
          </h4>{" "}
          <img src={Facade} className="leftImage" height={250}></img>
          {t("Znajduje")}
        </p>
        <span className="h4">
          {t(
            "Busko-Zdrój słynie z unikalnych w kraju i Europie siarczkowych źródeł mineralnych."
          )}
        </span>
        <p>
          <img src={Markoni} className="rightImage" height={250}></img>
          {t("Pierwszy")}
        </p>
        <span className="h4">{t("Kościół św. Leonarda w Busku-Zdroju")}</span>
        <p>
          <img src={Church} className="leftImage" height={250}></img>
          {t("Świątynia")}
        </p>
        <Footer />
      </div>
    </>
  );
}

export default About;
