import React from "react";
import Footer from "./components/Footer";
import "../static/css/Home.css";

function Home() {
  return (
    <div>
      <div>
        <div className="bgimg-1">
          <div className="caption">
            <span className="border">KLINIKA ZDOROWIA I URODU</span>
          </div>
        </div>

        <div className="parallax-text">
          <h3 className="">Dormed Klinika zdorowia i urody</h3>
          <p>
          Klinika Zdrowia i Urody Dormed Medical SPA dr n. med. Doroty Sagan znajduje w cichej uzdrowiskowej części Buska-Zdroju, bezpośrednio przy Nowym Parku Zdrojowym. Oferujemy Państwu 10 pokoi, komfortowo wyposażonych, 1 i 2-osobowych, zarówno na pobyty wypoczynkowe, weekendowe, jak i turnusy zdrowotne, sanatoryjno-rehabilitacyjne. W naszej Klinice możecie Państwo skorzystać z zabiegów balneologicznych (kąpiele siarczkowe, kolagenowe, borowinowe), fizjoterapeutycznych, masaży oraz zadbać o lepszy wygląd (kosmetyka, kosmetologia i estetyka) i zdrowe stopy (podologia). Nad waszym bezpieczeństwem czuwa zespół wysokiej klasy profesjonalistów - fizjoterapeuci, pielęgniarki, lekarze, kosmetolodzy, podolodzy.
          </p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border"></span>
          </div>
        </div>

        <div className="relative">
          <div className="scrollText">
            <p>
              Scroll up and down to really get the feeling of how Parallax
              Scrolling works.
            </p>
          </div>
        </div>

        <div className="bgimg-3">
          <div className="caption">
            <span className="border"></span>
          </div>
        </div>

        <div className="relative">
          <div className="scrollText">
            <p>
      
            </p>
          </div>
        </div>

        <div className="bgimg-1">
          <div className="caption">
            <span className="border"></span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
