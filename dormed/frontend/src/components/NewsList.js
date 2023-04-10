import React, { useState, useEffect } from "react";
import "../../static/css/custom.css";
import "../../static/css/news.css";
import { useTranslation } from "react-i18next";

const NewsList = ({ news }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [bgImageLeft, setBgImageLeft] = useState("url('static/images/green-tree-red-cup.jpg')");
  const [bgImageRight, setBgImageRight] = useState("url('static/images/girl-01.jpg')");


  useEffect(() => {
    if (news && news.length > 0) {
      if (news[0].image_left) {
        setBgImageLeft(`url('${news[0].image_left}')`);
      } else {
        setBgImageLeft(`url('static/images/green-tree-red-cup.jpg')`);
      }
      if (news[0].image_right) {
        setBgImageRight(`url('${news[0].image_right}')`);
      } else {
        setBgImageRight(`url('static/images/girl-01.jpg')`);
      }
    } else {
      setBgImageLeft(`url('static/images/green-tree-red-cup.jpg')`);
      setBgImageRight(`url('static/images/girl-01.jpg')`);
    }
  }, [news]);
  
  return (
    <>
      {/* Use the CSS variables in the CSS class definitions */}
      <style>{`.tm-img-container-1 { background-image: ${bgImageLeft}; }`}</style>
      <style>{`.tm-img-container-2 { background-image: ${bgImageRight}; }`}</style>
      {!news || news.length <= 0 ? (
        <div>
          <section className="row tm-section-mb tm-section-2">
            <div className="col-md-12 tm-section-2-inner">
              <div className="tm-section-2-left">
                <div className="tm-img-container tm-img-container-1"></div>
                <div className="tm-img-container tm-img-container-2"></div>
              </div>
              <div className="tm-section-2-right tm-bg-primary">
                <div className="tm-section-2-text">
                  <h2 className="tm-section-2-header tm-mb-45 text-center">
                    {t("No news yet!")}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        news.map((news) => (
          <div key={news.pk} className="mt-3">
            <section className="row tm-section-mb tm-section-2">
              <div className="col-md-12 tm-section-2-inner">
                <div className="tm-section-2-left">
                  <div className="tm-img-container tm-img-container-1"></div>
                  <div className="tm-img-container tm-img-container-2"></div>
                </div>
                <div className="tm-section-2-right tm-bg-primary">
                  <div className="tm-section-2-text">
                    <h2 className="tm-section-2-header tm-mb-45 text-center">
                      {news[`title_${currentLanguage}`]}
                    </h2>
                    <h4 className="text-center mt-2">
                      {news[`header_${currentLanguage}`]}
                    </h4>
                    <p>{news[`description_${currentLanguage}`]}</p>
                    <p>{news[`features_${currentLanguage}`]}</p>
                    <p>
                      {t("Posted on: ")}
                      {news.posted_on}
                    </p>
                  </div>
                </div>
              </div>
            </section>
     </div>
        ))
      )}
    </>
  );
};

export default NewsList;
