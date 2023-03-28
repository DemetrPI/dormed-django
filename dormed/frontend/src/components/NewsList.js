import React from "react";
import "../../static/css/custom.css";
import "../../static/css/news.css";
import { useTranslation } from "react-i18next";

const NewsList = ({ news }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <>
      {!news || news.length <= 0 ? (
        <div className="container">
          <section className="row tm-section-mb tm-section-2">
            <div className="col-md-12 tm-section-2-inner">
              <div className="tm-section-2-left">
                <div className="tm-img-container tm-img-container-1"></div>
                <div className="tm-img-container tm-img-container-2"></div>
              </div>
              <div className="tm-section-2-right tm-bg-primary">
                <div className="tm-section-2-text">
                  <h2 className="tm-section-2-header tm-mb-45">
                    {t("No news yet!")}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        news.map((news) => (
          <div className="container">
            <section className="row tm-section-mb tm-section-2">
              <div className="col-md-12 tm-section-2-inner">
                <div className="tm-section-2-left">
                  <div className="tm-img-container tm-img-container-1"></div>
                  <div className="tm-img-container tm-img-container-2"></div>
                </div>
                <div className="tm-section-2-right tm-bg-primary">
                  <div className="tm-section-2-text">
                    <h2 className="tm-section-2-header tm-mb-45">
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