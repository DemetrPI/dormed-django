import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";
import { NEWS_API_URL } from "./constants";
import NewsList from "./components/NewsList";
import Paginator from "./components/Paginator";
import {Container } from "reactstrap";


function News() {
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
    <>
    <Container fluid>
      <NewsList news={news} />
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
</Container>
      <Footer />
      </>
  );
}

export default News;
