import React from "react";
import Facade from "../../frontend/static/images/facade.jpg";
import Markoni from "../../frontend/static/images/Markoni_Busko.jpg";
import Church from "../../frontend/static/images/BuskoZdrojWoodenChurch.jpg";
import { useTranslation } from "react-i18next";

import "../static/css/custom.css";

function About() {
    const { t } = useTranslation();
  return (
    <div className="row ms-1 me-1">
      <p>
        <h4 >
          {t("Klinika Zdrowia i Urody Dormed Medical SPA dr n. med. Doroty Sagan")}
        </h4>{" "}
        <img src={Facade} className="leftImage" height={250}></img>
        {t("Znajduje w cichej uzdrowiskowej części Buska-Zdroju, bezpośrednio przy Nowym Parku Zdrojowym. Oferujemy Państwu 10 pokoi, komfortowo wyposażonych, 1 i 2-osobowych, zarówno na pobyty wypoczynkowe, weekendowe, jak i turnusy zdrowotne, sanatoryjno-rehabilitacyjne. W naszej Klinice możecie Państwo skorzystać z zabiegów balneologicznych (kąpiele siarczkowe, kolagenowe, borowinowe), fizjoterapeutycznych, masaży oraz zadbać o lepszy wygląd (kosmetyka, kosmetologia i estetyka) i zdrowe stopy (podologia). Nad waszym bezpieczeństwem czuwa zespół wysokiej klasy profesjonalistów - fizjoterapeuci, lekarze, kosmetolodzy, podolodzy.")}
      </p>
      <span className="h4">
       {t(" Busko-Zdrój słynie z unikalnych w kraju i Europie siarczkowych źródeł mineralnych.")}
      </span>
      <p>
        <img src={Markoni} className="rightImage" height={250}></img>
        {("Pierwszy dokument w którym wspomina się o solankach występujących w Busku to przywilej Bolesława Wstydliwego z 1252 r. Pierwsze badania nad wykorzystaniem wód do leczenia przeprowadził pińczowski lekarz Jan Winterfeld w 1808 r. Po przejęciu Buska w dzierżawę w 1820 r. Feliks Rzewuski wybudował łazienki zaprojektowane przez Henryka Marconiego. Uroczystość otwarcia uzdrowiska miała miejsce w 1836 r. Pierwszej pełnej analizy wody z ujęcia Rotunda, z próbki pobranej w sierpniu 1830 r., dokonał farmaceuta warszawski Ferdynand Werner. Wyniki badań opublikował w 1832 r. Utrata praw miejskich w 1869 r. niekorzystnie wpłynęła na rozwój uzdrowiska. Dopiero w latach 80. i 90. XIX w., gdy dzierżawcą został lekarz dr Aleksander Dobrzański, nastał dobry czas i Busko stało się jednym z najważniejszych uzdrowisk w kraju. W roku 1890 liczba kąpieli w sezonie przekroczyła 50 tysięcy. W 1893 r. geolog inż. Aleksander Michalski wykonał i uruchomił cztery nowe odwierty, dzięki którym potroiła się ilość pozyskiwanej do celów leczniczych wody. Zwięzłą, rzeczową charakterystykę dynamiki, właściwości fizycznych i składu chemicznego wód z nowych ujęć przedstawił w 1897 r. Franciszek Gervais. Po I wojnie światowej znowu zaczęli przybywać kuracjusze. Intensywna rozbudowa uzdrowiska nastąpiła w latach międzywojennych m.in. z inicjatywy dra Szymona Starkiewicza, który założył sanatorium dziecięce „Górka”. W 1966 r. Busko zajęło pierwsze miejsce w konkursie na najładniejsze polskie uzdrowisko. W 1972 r. oddano do użytku największe z sanatoriów _ „Włókniarz”. 30 grudnia 2008 r. otwarto Uzdrowiskowy Zakład Górniczy „Las Winiarski”, zaopatrujący buskie sanatoria w wody siarczkowe z nowego odwiertu w miejscowości Las Winiarski.")}
      </p>
      <span className="h4">
{t("Kościół św. Leonarda w Busku-Zdroju")}</span>
      <p>
        <img src={Church} className="leftImage" height={250}></img>
        {t("Świątynia wybudowana w 1699 roku, w miejscu istniejącego tam wcześniej kościoła, jest najstarszą budowlą w Busku-Zdroju. Wykonawcą był cieśla Walenty. Była tu siedziba najstarszej w Busku parafii, erygowanej jeszcze przed założeniem klasztoru norbertanów. Wyremontowana w latach 1997-1998. Budowla drewniana na podmurówce, konstrukcji zrębowej wzmacnianej lisicami, orientowana, jednonawowa, z węższym, zamkniętym trójbocznie prezbiterium, niewielką zakrystią od północy i kruchtą od zachodu. Dach nad nawą i prezbiterium wspólny, dwuspadowy kryty gontem z arkadową sygnaturką krytą miedzianą blachą. Ściany szalowane. We wnętrzu profilowana belka tęczowa oraz Grupa Ukrzyżowania z rzeźbami Matki Bożej, św Jana oraz wyciętym w blasze krucyfiksem[5]. Na stropie prezbiterium zachowały się fragmenty późnobarokowej polichromii[6]. W późnobarokowym ołtarzu figura św. Leonarda. W kościele znajduje się rzeźba Matki Bożej z ruchomymi rękami w stawach łokciowych i barkowych, są one wzorowane na XVIII wiecznych lalkach niemieckich.")}
      </p>
      

    </div>
  );
}

export default About;
