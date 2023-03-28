import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { PRICE_API_URL } from "./constants";
import { useApi } from "./components/customHook";
import Footer from "./components/Footer";
import PriceList from "./components/PriceList";
import Search from "./components/Search";

function Price() {
  const [prices, error, fetchData] = useApi(PRICE_API_URL);
  const [filteredItems, setFilteredItems] = useState([]);

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

  return (
    <>
      <Search onSearch={handleSearch} />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            {error ? (
              <div>Error: {error.message}</div>
            ) : (
              <PriceList prices={prices} filteredItems={filteredItems} />
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Price;
