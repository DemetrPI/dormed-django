import Footer from "./components/Footer";
import React from "react";
import ImageGallery from "react-image-gallery";
import { useTranslation } from "react-i18next";

const images = [];
const importAll = (r) => {
  r.keys().forEach((key) => {
    images.push({
      original:r(key),
      thumbnail:r(key),
      originalAlt: "Villa Dorota rooms",
    });
  });
};

importAll(require.context("../static/images/rooms/", false, /\.(png|jpe?g|svg)$/));



const Booking = () => {
  const { t } = useTranslation();
    return (
      <div>

<div className="dormedDescription ms-3">
<h2 className="text-center mt-3">{t("Willa Dorotka pokoje")}</h2>
          <p>{t(" W willi posiadamy pokoje jednoosobowe, dwuosobowe oraz pokoje rodzinne.")}</p>
          <p>{t("W pokojach jednoosobowych znajduje się łoże małżeńskie")}.</p>
          <p>{t("Pokoje dwuosobowe posiadają dwa pojedyncze łóżka.Pokoje rodzinne mają jedno łoze małżeńskie oraz jedno łóżko pojedyncze")}.</p>
          <p>{t("Wszystkie pokoje z łazienkami (kabina prysznicowa, umywalka, wc, suszarka do włosów, ręczniki) i dostępem do Internetu. Internet bezprzewodowy, również na zewnątrz budynku")}.</p>
          <p>{t("W każdym pokoju znajduje się telewizor, radio, lodówka, czajnik bezprzewodowy i komplet naczyń (talerze, sztućce, szklanki, kieliszki)")}.</p>
          <p>{t("Do dyspozycji gości również: żelazko i deska do prasowania, leżaki, plac zabaw dla dzieci, grill, monitorowany parking")}</p>     
          </div>
        
        <ImageGallery
          items={images}
          autoPlay={true}
          thumbnailPosition={"bottom"}
          />
        <Footer />
      </div>
    );
  }
export default Booking;
