import React from "react";
import Map from "./components/Navigation";
import MailUsForm from "./components/MailUsForm";
import Footer from "./components/Footer";
import { Trans, useTranslation } from "react-i18next";

function Contacts() {
  const {t} = useTranslation();
  return (
    <div>
      <div className="contactInfo ms-2">
      <h2 className="text-center mt-3"> {t("DOJAZD Z KIERUNKU")}</h2>
     <h3>{t("KIELCE")}</h3>
<p>{t("-dojeżdzamy do ronda - na rondzie w prawo, jedziemy prosto mijając 2 skrzyżowania, dojeżdżamy do ronda - na rondzie prosto i jedziemy do kolejnego ronda na którym skręcamy w lewo, czyli 3 zjazd, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu")}</p>
<h3>{t("PIŃCZÓW")}</h3>
<p>{t("- dojeżdzamy do ronda - na rondzie w prawo i jedziemy do kolejnego ronda na którym skręcamy w lewo, czyli 3 zjazd, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu")}</p>
<h3>{t("TARNÓW")}</h3>
<p>{t("- dojeżdzamy do ronda - na rondzie prosto, jedziemy prosto mijając 2 skrzyżowania, dojeżdżamy do ronda - na rondzie prosto i jedziemy do kolejnego ronda na którym skręcamy w lewo, czyli 3 zjazd, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu")}
</p>
<h3>{t("KRAKÓW")}</h3>
<p>{t("- dojeżdzamy do pierwszego skrzyżowania w Busku - skręcamy w lewo (kierunek Pińczów, Kielce, tzw. objazdówka) jedziemy cały czas prosto tak jak prowadzi główna droga po łuku i dojezdżamy do ronda na którym skręcamy w prawo, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu")}</p>
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
     <Footer/>
      </div>
    </div>
  );
}

export default Contacts;
