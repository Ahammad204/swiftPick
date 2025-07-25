import React from "react";
import logo1 from "../../../assets/brands/casio.png";
import logo2 from "../../../assets/brands/amazon.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";

const logos = [logo1, logo2, logo4, logo5, logo6, logo7];

const Brands = () => {
  return (
    <div className="my-20">
      <h1 className="text-[#03373D] text-center text-2xl font-medium">
        We've helped thousands of sales teams
      </h1>
      <Marquee pauseOnHover={true}>
        <div className="flex gap-10 my-10 cursor-pointer">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="" />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
