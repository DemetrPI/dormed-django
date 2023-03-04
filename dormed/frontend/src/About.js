import React from "react";
import Facade from "../../frontend/static/images/facade.jpg"
import "../static/css/custom.css";

function About() {
   return (
  <div className="row">
      <span className="h3">Klinika Zdrowia i Urody Dormed Medical SPA
       dr n. med. Doroty Sagan</span> <p><img src={Facade} className="leftImage" height={250}></img>
      znajduje w cichej uzdrowiskowej części Buska-Zdroju, bezpośrednio przy
      Nowym Parku Zdrojowym. Oferujemy Państwu 10 pokoi, komfortowo
      wyposażonych, 1 i 2-osobowych, zarówno na pobyty wypoczynkowe, weekendowe,
      jak i turnusy zdrowotne, sanatoryjno-rehabilitacyjne. W naszej Klinice
      możecie Państwo skorzystać z zabiegów balneologicznych (kąpiele
      siarczkowe, kolagenowe, borowinowe), fizjoterapeutycznych, masaży oraz
      zadbać o lepszy wygląd (kosmetyka, kosmetologia i estetyka) i zdrowe stopy
      (podologia). Nad waszym bezpieczeństwem czuwa zespół wysokiej klasy
      profesjonalistów - fizjoterapeuci, lekarze, kosmetolodzy, podolodzy.
    </p>
  </div>
   )
}

export default About;
