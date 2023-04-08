import React from "react";
import { useTranslation } from "react-i18next";
import "../static/css/packages.css";
import seniors from "../static/images/seniors_on_the_bench.jpg";
import seniors1 from "../static/images/seniors_on_the_bench_back.jpg";
import chess from "../static/images/playing_chess.jpg";
import Footer from "./components/Footer";

function Packages() {
  const { t } = useTranslation();
  return (
    <>
      <div className="tm-container mx-auto">
        <section className="tm-sector tm-sector-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="tm-bg-circle-white tm-flex-center-v">
                  <header className="text-center">
                    <h1 className="tm-site-title">
                      {t("Pakiety Rehabilitacja")}
                    </h1>
                    <h2>{t("PAKIETY PROMOCYJNE Z ZABIEGAMI I WYŻYWIENIEM")}</h2>
                    <p>
                      {t("w WILLI DOROTKA i Pensjonacie Dormed*** Medical SPA")}
                    </p>
                    <h3>{t("obowiązują od 1.01.2019!!!")}</h3>
                  </header>
                  <p className="text-center mt-4 mb-0">
                    <a
                      data-scroll
                      href="#tm-sector-2"
                      className="btn tm-btn-secondary"
                    >
                      {t("Continue...")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tm-sector-2" className="tm-sector pt-2 pb-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 tm-flex-center-v tm-text-container tm-sector-left">
                <h4>{t("Rehabilitacja 7 dni (6 noclegów i 18 zabiegów)")}</h4>
                <p>{t("Willa Dorotka - 960 zl/doba")}</p>
                <p>{t("Dormed Medical Spa - 1080 zł/osoba")}</p>
                <h4>{t("Rehabilitacja 14 dni (13 noclegów i 39 zabiegów)")}</h4>
                <p>{t("Willa Dorotka - 2080 zl/doba")}</p>
                <p>{t("Dormed Medical Spa - 2340 zł/osoba")}</p>
                <p className="text-right mb-0">
                  <a href="#tm-sector-3" className="btn tm-btn-secondary">
                    {t("Continue...")}
                  </a>
                </p>
              </div>
              <div className="col-xl-7 col-lg-6 tm-circle-img-container">
                <img
                  src={seniors1}
                  alt="Image"
                  className="rounded-circle tm-circle-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="tm-sector-3" className="tm-sector tm-sector-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 tm-sector-2-right">
                <div className="tm-bg-circle-white tm-bg-circle-pad-2 tm-flex-center-v">
                  <header className="text-center">
                    <h2 className="tm-color-primary">
                      {t("PAKIET 1 - 14 - dniowy")}
                    </h2>
                  </header>
                  <p>
                    {" "}
                    {t("w WILLI DOROTKA w cenie promocyjnej 160 zł/doba/osoba")}
                  </p>
                  <p>
                    {t(
                      "Pensjonacie*** Dormed Medical SPA  w promocyjnej cenie 180 zł/doba/osoba zawiera:"
                    )}
                  </p>

                  <ul className="dashed">
                    <li>{t("nocleg w przytulnym pokoju")}</li>
                    <li>
                      {" "}
                      {t(
                        "śniadanie formie bufetu lub podawane do pokoju,"
                      )}{" "}
                    </li>
                    <li> {t("opiekę pielęgniarską")} </li>
                    <li> {t("opiekę fizjoterapeuty")} </li>
                    <li> {t("3 zabiegi dziennie z listy do wyboru:")} </li>
                  </ul>
                  <p className="text-center mb-0">
                    <a href="#tm-sector-4" className="btn tm-btn-secondary">
                      {t("Continue...")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tm-sector-4" className="tm-sector pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 tm-flex-center-v tm-sector-left">
                <p>
                  {t(
                    "Kąpiel siarczkowa, Kąpiel w zawiesinie borowinowej, Kapiel mineralna, Kąpiel solankowa, Kąpiel kwasowęglowa, Inhalacja, Kuracja pitna wodą siarczkową, Jonoforeza 10 min, Galwanizacja 10 min, Diadynamik, Prądy Nemeca, Prądy Traberta, Prądy Tensa, Prądy Kotza, Elektrostymulacja/Pulsatronic, Prądy interferencyjne, Magnetronik, Ultradźwięki, Sonoforeza/Fonoforeza, Laseroterapia, Sollux,Plastry borowinowe, Krioterapia miejscowa, masaż klasyczny 15 min, Gimnastyka, Masaż nefrytowy 20 min, Masaż turmalinowy 15 min, Hydrojet 20 min, Łóżko BMS terapia biomechaniczna 15 min, Masaż ondulacyjny 15 min, Fotel masujący 15 min, Platforma wibracyjna BMS 10 min, Masaż wibracyjny 10 min, Masaż stóp z podczerwienią,"
                  )}
                </p>
                <p className="text-center mb-0">
                  <a href="#tm-sector-5" className="btn tm-btn-secondary">
                    {t("Continue...")}
                  </a>
                </p>
              </div>
              <div className="col-xl-7 col-lg-6 tm-circle-img-container">
                <img
                  src={seniors}
                  alt="Image"
                  className="rounded-circle tm-circle-img"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="tm-sector-5" className="tm-sector tm-sector-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 tm-sector-2-right">
                <div className="tm-bg-circle-white tm-bg-circle-pad-2 tm-flex-center-v">
                  <h3 className="text-center">{t("Możliwość bezpłatnego korzystania:")}</h3>
                  <ul className="dashed">
                    <li>{t("rower stacjonarny - 1h/dziennie")}</li>
                    <li>{t("rower górski - 1h/dziennie")}</li>
                    <li>{t("orbitrek - 1h/dziennie")}</li>
                    <li>{t("kije Nordic Walking - 1h/dziennie")}</li>
                    <li>{t("z internetu Wi-Fi")}</li>
                    <li>{t("z placu zabaw")}</li>
                    <li>{t("z grilla ogrodowego")}</li>
                    <li>{t("z leżaków")}</li>
                  </ul>
                  <p>{t("dziecko do 5 lat* - bezpłatnie")}</p>
                  <p>
                    {t(
                      "* zakwaterowanie z dwoma osobami dorosłymi lub na wspólnym łóżku z 1 osobą dorosłą, bez wyżywienia"
                    )}
                  </p>

                  <p className="text-center mb-0">
                    <a href="#tm-sector-6" className="btn tm-btn-secondary">
                      {t("Continue...")}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="tm-sector-6" className="tm-sector pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 tm-flex-center-v tm-sector-left">
                <p>
                  {t(
                    "Pobyt rozpoczyna się o godzinie 15 w dniu przyjazdu, a kończy o godzinie 12 w dniu wyjazdu.Rezerwację pobytu, uważa się za dokonaną po uprzednim uzgodnieniu rodzaju pokoju oraz wpłaceniu zadatku w wysokości 100,00 zł od osoby. W przypadku rezygnacji zadatek przepada. Cena pakietu zawiera podatek VAT.Parking niestrzeżony monitorowany na terenie Willi, liczba miejsc parkingowych ograniczona - nie jest możliwa wcześniejsza rezerwacja w cenie 10 zł/doba lun 40 zł/tydzień lub parking bezpłatny ogólnodostepny naprzeciwko pensjonatu Dormed Medical SPA"
                  )}
                </p>
              </div>
              <div className="col-xl-7 col-lg-6 tm-circle-img-container">
                <img
                  src={chess}
                  alt="Image"
                  className="rounded-circle tm-circle-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-center mb-3 mt-3">{t("ZAPRASZAMY!")}</h2>
          <p className="ms-3">
            {t(
              "Na Państwa życzenie, bezpłatnie wstawimy do pokoju łóżeczko dla małego dziecka, wanienkę, podgrzewacz, nakładkę na sedes."
            )}
          </p>
          <h3 className="text-center mb-3 mt-3">{t("Dodatkowe atrakcje:")}</h3>
          <ul className="dashed">
            <li>
              {t(
                "zabiegi kosmetyczne w Dormed Medical SPA – ceny promocyjne już od 70 zł"
              )}
            </li>
            <li>
              {t(
                "manicure, pedicure w Dormed Medical SPA - ceny promocyjne już od 25 zł"
              )}
            </li>
            <li>
              {t(
                "medycyna estetyczna  w Dormed Medical SPA – spłycanie i wypełnianie zmarszczek - ceny promocyjne już od 150 zł"
              )}
            </li>
          </ul>
        </section>
      </div>
<Footer/>
    </>
  );
}

export default Packages;
