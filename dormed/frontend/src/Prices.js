import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { PRICE_API_URL } from "./constants";
import { useApi } from "./components/customHook";
import Footer from "./components/Footer";
import PriceList from "./components/PriceList";
import Search from "./components/Search";
import Select from 'react-select';
import { useTranslation, } from "react-i18next";


function Price() {
  const [prices, error, fetchData] = useApi(PRICE_API_URL);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSearch = (query) => {
    const filteredItems = prices.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredItems(filteredItems);
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
      <Search onSearch={handleSearch} />

      <Select
        options={options}
        onChange={handleCategoryChange}
        value={selectedCategory}
        className="select"
        placeholder={t("Tutaj możesz wybrać kategorię... ")}
      />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            {error ? (
              <div>Error: {error.message}</div>
            ) : (
              <PriceList prices={prices} filteredItems={filteredItems} selectedCategory={selectedCategory} />
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Price;
