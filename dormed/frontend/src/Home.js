import React from "react";
import Footer from "./components/Footer";
import "../static/css/Home.css";
import Dorota from "../static/images/Dormed_photos/Dorota.jpg";

function Home() {
  return (
    <div>
      <div>
        <div className="bgimg-1">
          <div className="caption">
            <span className="spanBorder pulse">WILLA DOROTKA</span>
          </div>
        </div>

        <div className="parallax-text">
          <h3 className="">WILLA DOROTKA</h3>
          <p>
            Willa Dorotka znajduje w cichej uzdrowiskowej części Buska-Zdroju, bezpośrednio
            przy Nowym Parku Zdrojowym. Oferujemy Państwu 14 pokoi, komfortowo
            wyposażonych, 1 i 2-osobowych, zarówno na pobyty wypoczynkowe,
            weekendowe, jak i turnusy zdrowotne, sanatoryjno-rehabilitacyjne. Państwo możecie skorzystać z zabiegów
            balneologicznych (kąpiele siarczkowe, kolagenowe, borowinowe),
            fizjoterapeutycznych, masaży oraz zadbać o lepszy wygląd (kosmetyka,
            kosmetologia i estetyka) i zdrowe stopy (podologia). Nad waszym
            bezpieczeństwem czuwa zespół wysokiej klasy profesjonalistów -
            fizjoterapeuci, pielęgniarki, lekarze, kosmetolodzy, podolodzy, w Dormed Klinika zdorowia i urody, który jest w pobliżu.
          </p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="spanBorder pulse">DORMED KLINIKA ZDOROWIA I URODY</span>
          </div>
        </div>

        <div className="relative">
          <div className="scrollText">
            <p>
              Od wielu lat prowadzę Klinikę Zdrowia i Urody, w której
              wykorzystuję swoje bogate doświadczenie praktyczne, poparte wiedzą
              zdobytą na studiach. Pobyt w Klinice Zdrowia i Urody Dormed
              Medical SPA to również doskonała okazja do zobaczenia i zwiedzenia
              interesujących miejsc znajdujących się w pobliżu Buska-Zdroju oraz
              atrakcji regionu Ponidzia.
            </p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="spanBorder pulse">MEDYCYNA ESTETYCZNA, PODOLOGIA, KOSMETOLOGIA</span>
          </div>
        </div>

        <div className="relative">
          <div className="scrollText">
            <p>
              Lecznictwo uzdrowiskowe oparte jest na wodach mineralnych,
              solankach siarczkowo- siarkowodorowych i borowinie, które
              stosowane są w leczeniu stawów, zapalenia stawów kręgosłupa,
              dyskopatii, rwie kulszowej, w niektórych chorobach
              neurologicznych, stanach pourazowych, w nadciśnieniu tętniczym,
              zwężeniach naczyń kończyn dolnych i chorobach dermatologicznych,
              łuszczycy. Dla ceniących spokojniejsze formy wypoczynku polecamy
              spacery w najbliższym otoczeniu przyrody, po trasach
              turystycznych, po alejkach Parku Zdrojowego, grzybobranie w
              pobliskich lasach, wędkowanie nad brzegiem rzeki Nidy, relaks w
              Ogrodzie na Rozstajach położonym w Młodzawach Małych. W okresie
              letnim również Park Zdrojowy zapewnia liczne atrakcje, m.in.
              Festiwal im. Krystyny Jamroz, Konkurs Chopinowski, Przegląd Kapel
              i Orkiestr Ludowych.
            </p>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <span className="spanBorder pulse">Usuwanie zmarszczek, 
Kwas Hialuronowy, Botox</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
