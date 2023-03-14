import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { PRICE_API_URL } from "./constants";
import Footer from './components/Footer';
import PriceList from "./components/PriceList";
import axios from "axios";
import Search from "./components/Search";


function Price() {
  const [prices, setPrices] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    resetState();
  }, []);

  const getPrices = () => {
    axios.get(PRICE_API_URL).then((res) => setPrices(res.data));
  };

  const resetState = () => {
    getPrices();
  };

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
      <Search onSearch={handleSearch}/> 
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PriceList 
             prices={filteredItems} 
             resetState={resetState}
             onSearch={handleSearch} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Price;



// import React, { Component } from "react";
// import { Col, Container, Row } from "reactstrap";
// import { PRICE_API_URL } from "./constants";
// import Footer from './components/Footer'
// import PriceList from "./components/PriceList";
// import axios from "axios";

// class Price extends Component {
//   state = {
//     prices: []
//   };

//   componentDidMount() {
//     this.resetState();
//   }

//   getPrices = () => {
//     axios.get(PRICE_API_URL).then(res => this.setState({ prices: res.data }));
//   };

//   resetState = () => {
//     this.getPrices();
//   };

//   render() {
//     return (
//           <>
//       <Container style={{ marginTop: "20px" }}>
//         <Row>
//           <Col>
//             <PriceList
//               prices={this.state.prices}
//               resetState={this.resetState}
//             />
//           </Col>
//         </Row>
        
//       </Container>
//       <Footer/>
//       </>
//     );
//   }
// }

// export default Price;"
