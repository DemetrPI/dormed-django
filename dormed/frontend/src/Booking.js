import Footer from "./components/Footer";
import "../static/css/custom.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import { rooms } from "./components/rooms";

class Booking extends React.Component {
  render() {
    return (
      <div>

<div className="dormedDescription ms-3">
<h2 className="text-center mt-3">Willa Dorotka pokoje</h2>
          <p> W willi posiadamy pokoje jednoosobowe, dwuosobowe oraz pokoje rodzinne.</p>
          <p>W pokojach jednoosobowych znajduje się łoże małżeńskie.</p>
          <p>Pokoje dwuosobowe posiadają dwa pojedyncze łóżka.Pokoje rodzinne mają jedno łoze małżeńskie oraz jedno łóżko pojedyncze.</p>
          <p>Wszystkie pokoje z łazienkami (kabina prysznicowa, umywalka, wc, suszarka do włosów, ręczniki) i dostępem do Internetu. Internet bezprzewodowy, również na zewnątrz budynku.</p>
          <p>W każdym pokoju znajduje się telewizor, radio, lodówka, czajnik bezprzewodowy i komplet naczyń (talerze, sztućce, szklanki, kieliszki).</p>
          <p>Do dyspozycji gości również: żelazko i deska do prasowania, leżaki, plac zabaw dla dzieci, grill, monitorowany parking</p>
        
          </div>
        
        <ImageGallery
          items={rooms}
          autoPlay={true}
          thumbnailPosition={"bottom"}
          />
        <Footer />
      </div>
    );
  }
}
export default Booking;
