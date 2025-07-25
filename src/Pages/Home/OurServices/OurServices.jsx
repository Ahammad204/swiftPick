import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import {
  FaBoxes,
  FaMapMarkedAlt,
  FaMoneyCheckAlt,
  FaShippingFast,
  FaUndoAlt,
} from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

const OurServices = () => {
  const Services = [
    {
      Icon: <FaShippingFast />,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      Icon: <FaMapMarkedAlt />,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      Icon: <FaBoxes />,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      Icon: <FaMoneyCheckAlt />,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      Icon: <FaHandshake />,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      Icon: <FaUndoAlt />,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-[#03373D] text-white p-10 my-7 rounded-lg">
      <SectionTitle
        title={"Our Services"}
        subTitle={
          "Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time."
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4">
        {Services.map((service, idx) => (
          <div
            key={idx}
            className="card bg-white hover:bg-[#CAEB66] shadow-sm transition-transform
             duration-300 hover:scale-105 cursor-pointer"
          >
            <figure className="px-10 pt-10">
              <div className="text-4xl iconBg text-[#03373D]">
                {service.Icon}
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#03373D]">{service.title}</h2>
              <p className="text-black">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
