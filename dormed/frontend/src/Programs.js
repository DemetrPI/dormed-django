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
import { applyThemeClasses } from "./components/applyThemeClasses";

function Program() {
  const [programs, error, fetchData] = useApi(PROGRAM_API_URL);
  const [filteredItems, setFilteredItems] = useState([]);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [theme, setTheme] = useState("pink");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
      applyThemeClasses(currentTheme);
    }
  }, []);

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

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeClasses(newTheme);
  };

  return (
    <>
      <Container fluid style={{ marginTop: "20px" }}>
        <div className="p-lg-5 p-md-3 p-xs-1 shadow-lg">
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
            handleThemeChange={handleThemeChange}
          />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Program;
