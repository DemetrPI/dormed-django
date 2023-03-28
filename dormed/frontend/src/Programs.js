import React, { useEffect, useState } from "react";
import ProgramList from "./components/ProgramList";
import ProgramCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import { PROGRAM_API_URL } from "./constants";
import { ImagesForSliders } from "./components/imagesForSlides";
import { useApi } from "./components/customHook";
import Search from "./components/Search";
import { useTranslation } from "react-i18next";

function Program() {
  const [programs, error, fetchData] = useApi(PROGRAM_API_URL);
  const [filteredItems, setFilteredItems] = useState([]);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const resetState = () => {
    fetchData();
  };

  const handleSearch = (query) => {
    const filteredItems = programs.filter((programs) =>
      programs[`title_${currentLanguage}`]
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <div className="p-5 shadow-lg">
          <ProgramCarousel data={ImagesForSliders} />
        </div>
        <Search onSearch={handleSearch} />
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ProgramList
            programs={programs}
            filteredItems={filteredItems}
            resetState={resetState}
          />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Program;
