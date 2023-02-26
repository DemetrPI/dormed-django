import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { PRICE_API_URL } from "./constants";
import Footer from './components/Footer'
import PriceList from "./components/PriceList";
import axios from "axios";

class Price extends Component {
  state = {
    prices: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPrices = () => {
    axios.get(PRICE_API_URL).then(res => this.setState({ prices: res.data }));
  };

  resetState = () => {
    this.getPrices();
  };

  render() {
    return (
          <>
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PriceList
              prices={this.state.prices}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        
      </Container>
      <Footer/>
      </>
    );
  }
}

export default Price;