import React, { useState, useEffect } from "react";
import ProgramList from "./components/ProgramList";
import ProgramCarousel from "./components/Carousel";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import { PROGRAM_API_URL } from "./constants";
import { ImagesForSliders } from "./components/imagesForSlides";
import axios from "axios";

function Program() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    getPrograms();
  }, []);

  const getPrograms = () => {
    axios.get(PROGRAM_API_URL)
      .then(res => setPrograms(res.data))
      .catch(error => console.error(error));
  };

  const resetState = () => {
    getPrograms();
  };

  return (
    <>
      <Container style={{ marginTop: "20px" }}>
        <div className="p-5 shadow-lg">
          <ProgramCarousel data={ImagesForSliders} />
        </div>
        <ProgramList
          programs={programs}
          resetState={resetState}
        />
      </Container>
      <Footer />
    </>
  );
}

export default Program;
