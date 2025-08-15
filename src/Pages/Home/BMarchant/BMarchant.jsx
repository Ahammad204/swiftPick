import React from "react";
import locationImg from "../../../assets/Image/location-merchant.png";

const BMarchant = () => {
  return (
    <div data-aos="zoom-in" className="bg-no-repeat my-20 bg-[url('assets/Image/be-a-merchant-bg.png')] bg-[#03373D] rounded-4xl text-white p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={locationImg} className="max-w-sm rounded-lg  " />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. SwiftPick courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-5">
            <button className="btn border-none outline-none rounded-full bg-[#CAEB66] transition-transform duration-300 hover:scale-105 cursor-pointer">
              Become a Merchant
            </button>
            <button className="btn  text-[#CAEB66] outline-none border border-[#CAEB66] rounded-full bg-transparent transition-transform duration-300 hover:scale-105 cursor-pointer">
              Earn with SwiftPick Courier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMarchant;
