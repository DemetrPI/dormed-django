import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ProgramCarousel = (props) => {
  const carouselData = props.data.map((ImagesForSliders) => {
    return (
      
      <Carousel.Item key={ImagesForSliders.id} >
        <img
          className="d-block rounded-5 "
          height={"100%"}
          width={'100%'}        
          src={ImagesForSliders.src}
          alt={ImagesForSliders.alt}
                   
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      
    );
  });
  return <Carousel fade >{carouselData}</Carousel>;
};

export default ProgramCarousel;
