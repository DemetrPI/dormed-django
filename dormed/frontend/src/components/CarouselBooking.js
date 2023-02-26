import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BookingCarousel = (props) => {
  const carouselData = props.data.map((rooms) => {
    return (
      
      <Carousel.Item key={rooms.id} >
        <img
          className="d-block rounded-5 "
          height={"100%"}
          width={'100%'}        
          src={rooms.src}
          alt={rooms.alt}
                   
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      
    );
  });
  return <Carousel fade >{carouselData}</Carousel>;
};

export default BookingCarousel;
