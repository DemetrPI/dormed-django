import React, { Component } from "react";
import ProgramList from "./components/ProgramList";
import ProgramCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import { PROGRAM_API_URL } from "./constants";
import { ImagesForSliders } from "./components/imagesForSlides";
import axios from "axios";

class Program extends Component {
  state = {
    programs: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getPrograms = () => {
    axios
      .get(PROGRAM_API_URL)
      .then((res) => this.setState({ programs: res.data }));
  };

  resetState = () => {
    this.getPrograms();
  };

  render() {
    return (
      <>
        <Container style={{ marginTop: "20px" }}>
          <div className="p-5 shadow-lg">
            <ProgramCarousel data={ImagesForSliders} />
          </div>
          <ProgramList
            programs={this.state.programs}
            resetState={this.resetState}
          />
        </Container>
        <Footer />
      </>
    );
  }
}

export default Program;
