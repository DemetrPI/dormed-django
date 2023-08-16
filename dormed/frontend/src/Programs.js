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
import Select from 'react-select';

function Program() {
  const [programs, error, fetchData] = useApi(PROGRAM_API_URL);
  const [filteredItems, setFilteredItems] = useState([]);
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const [theme, setTheme] = useState("pink");
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  
  const handleCategoryChange = (selectedOption) => {
    if (selectedOption && selectedOption.value === "") {
      setSelectedCategory(null); // Reset selectedCategory to null
    } else {
      setSelectedCategory(selectedOption);
    }
  };

  const options = [
    { value:'', label: t('Wszystkie kategorie')},
    { value: 'KS', label: t('Kosmetologia') },
    { value: 'LS', label: t('Laseroterapia') },
    { value: 'KT', label: t('Kosmetyka') },
    { value: 'ZE', label: t('Zabiegi Estetyczne') },
    { value: 'TR', label: t('Trychologia') },
    { value: 'PD', label: t('Podologia') },
    { value: 'MS', label: t('Masaże')}
  ];

  return (
    <>
      <Container fluid style={{ marginTop: "20px" }}>
        <div className="p-lg-5 p-md-3 p-xs-1 shadow-lg">
          <ProgramCarousel data={ImagesForSliders} />
        </div>
        <Search onSearch={handleSearch} />
        <Select
        options={options}
        onChange={handleCategoryChange}
        value={selectedCategory}
        className="select"
        placeholder={t("Tutaj możesz wybrać kategorię... ")}
      />
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ProgramList
            programs={programs}
            filteredItems={filteredItems}
            resetState={resetState}
            handleThemeChange={handleThemeChange}
            selectedCategory={selectedCategory}
          />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Program;
