import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import { NEWS_API_URL } from "./constants";
import { Button } from "reactstrap";
import { useTranslation } from "react-i18next";
import "../static/css/custom.css";

function News() {
   const { t, i18n } = useTranslation();
   const currentLanguage = i18n.language;
   const [news, setNews] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  function fetchNews(page) {
    axios
      .get(`${NEWS_API_URL}?page=${page}`)
      .then((response) => {
        setNews(response.data.results);
        setTotalPages(
          Math.ceil(response.data.count / response.data.results.length)
        );
      })
      .catch((error) => console.error(error));
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      {!news || news.length <=0 ? (
<h2>{t("No news yet!")}</h2>
      ) : (
        news.map((news) => (
          <div key={news.pk}>
            <h2 className="text-center mt-3">{news[`title_${currentLanguage}`]}</h2>
            <h4 className="text-center mt-2">{news[`header_${currentLanguage}`]}</h4>
            <p>{news[`description_${currentLanguage}`]}</p>
            <p>{news[`features_${currentLanguage}`]}</p>
            <p>{t("Posted on: ")}{news.posted_on}</p>
          </div>
        ))
      )}
      <div className="text-center ">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className="news me-2"
            >
              {pageNumber}
            </Button>
          )
        )}
      </div>
      <Footer />
    </div>
  );
}

export default News;
