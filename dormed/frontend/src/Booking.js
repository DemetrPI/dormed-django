// import "../static/css/custom.css"
// import React from "react";
// import BookingCarousel from "./components/CarouselBooking";
// import { rooms } from "./components/rooms";
import Footer from "./components/Footer";
import "../static/css/custom.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import { rooms } from "./components/rooms";

class Booking extends React.Component {
  render() {
    return (
      <div>
        <ImageGallery
          items={rooms}
          autoPlay={true}
          thumbnailPosition={"bottom"}
          />
        <Footer />
      </div>
    );
  }
}
export default Booking;
