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
          <h3>Dormed Klinika zdorowia i urody</h3>
          <p>
            Szanowni Państwo, dziękujemy bardzo za wybranie pobytu w naszej
            firmie Dormed Medical SPA dr n. med. Dorota Sagan. Mamy nadzieję, że
            spełnimy państwa oczekiwania i będziecie mile wspominać czas
            spędzony w naszych obiektach Willa Dorotka i Dormed Medical SPA.
            Przedstawiamy ofertę zabiegów, która umili i urozmaici państwa pobyt
            u nas. Serdecznie zapraszamy do skorzystania z niej. Prosimy również
            o zapoznanie się regulaminem. który znaiduie się na 2 ostatnich
            stronach — umieszczone sq tam niezbędne informacje
          </p>
        </div>

        <div className="bgimg-2">
          <div className="caption">
            <span className="border">LESS HEIGHT</span>
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
            <span className="border">SCROLL UP</span>
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

        <div className="bgimg-1">
          <div className="caption">
            <span className="border">COOL!</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
