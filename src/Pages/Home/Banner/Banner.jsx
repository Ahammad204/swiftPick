import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/Banner/banner1.png";
import banner2 from "../../../assets/Banner/banner2.png";
import banner3 from "../../../assets/Banner/banner3.png";

const Banner = () => {
  return (
    <Carousel
      className="text-center mt-3"
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
    >
      <div>
        <img src={banner1} alt={"banner"} />
      </div>
      <div>
        <img src={banner2} alt={"banner"} />
      </div>
      <div>
        <img src={banner3} alt={"banner"} />
      </div>
    </Carousel>
  );
};

export default Banner;
