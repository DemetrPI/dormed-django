import React from "react";
import Map from "./components/Navigation";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function Contacts() {
  return (
    <div>
      <div className="contactInfo ms-2">
      <h2 className="text-center mt-3"> DOJAZD Z KIERUNKU</h2>
     <h3>KIELCE</h3>
<p>-dojeżdzamy do ronda - na rondzie w prawo, jedziemy prosto mijając 2 skrzyżowania, dojeżdżamy do ronda - na rondzie prosto i jedziemy do kolejnego ronda na którym skręcamy w lewo, czyli 3 zjazd, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu</p>
<h3>PIŃCZÓW</h3>
<p>- dojeżdzamy do ronda - na rondzie w prawo i jedziemy do kolejnego ronda na którym skręcamy w lewo, czyli 3 zjazd, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu</p>
<h3>TARNÓW</h3>
<p>- dojeżdzamy do ronda - na rondzie prosto, jedziemy prosto mijając 2 skrzyżowania, dojeżdżamy do ronda - na rondzie prosto i jedziemy do kolejnego ronda na którym skręcamy w lewo, czyli 3 zjazd, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu
</p>
<h3>KRAKÓW</h3>
<p>- dojeżdzamy do pierwszego skrzyżowania w Busku - skręcamy w lewo (kierunek Pińczów, Kielce, tzw. objazdówka) jedziemy cały czas prosto tak jak prowadzi główna droga po łuku i dojezdżamy do ronda na którym skręcamy w prawo, następnie 3 ulica w prawo (przed kościołem), następnie 2 w prawo i 4 budynek po lewej stronie - jesteśmy na miejscu</p>
        <h2 className="text-center mt-3">Wyślij wiadomość:</h2>
      </div>
      <div className="d-flex justify-content-center">
     <ContactForm />
     </div>
      <h2 className="text-center">Możesz nas znaleźć na mapie Google</h2>
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
