import React from "react";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import "../static/css/Home.css";


function Home() {
  const {t} = useTranslation();

  return (
    <div>
      <div>
        <div className="bgimg-1">
          <div className="caption">
            <span className="spanBorder pulse">{t("WILLA DOROTKA")}</span>
          </div>
        </div>

        <div className="parallax-text">
          <h3 className="">{t("WILLA DOROTKA")}</h3>
          <p>
            {t("Willa Dorotka description")}
          </p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="spanBorder pulse">{t("DORMED KLINIKA ZDOROWIA I URODY")}</span>
          </div>
        </div>

        <div className="relative">
          <div className="scrollText">
            <p>
              {t("Od wielu")}
            </p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="spanBorder pulse">{t("MEDYCYNA ESTETYCZNA, PODOLOGIA, KOSMETOLOGIA")}</span>
          </div>
        </div>

        <div className="relative">
          <div className="scrollText">
            <p>{t('Lecznictwo') }
             
            </p>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <span className="spanBorder pulse">{t("USUWANIE ZMARZCZEK, KWAS HIALURONOWY, BOTOX")}</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
