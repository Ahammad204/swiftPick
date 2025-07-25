import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaBuilding, FaTruckPickup, FaWarehouse } from "react-icons/fa6";


const HowItWorks = () => {
  const data = [
    {
      Icon: <FaTruckPickup />,
      Title: "Booking Pick & Drop",
      Text: "Easily book pickup and delivery services with real-time tracking.",
    },
    {
      Icon: <FaMoneyBillAlt />,
      Title: "Cash On Delivery",
      Text: "Collect payment upon delivery to ensure safe transactions.",
    },
    {
      Icon: <FaWarehouse />,
      Title: "Delivery Hub",
      Text: "Use our secure delivery hubs for efficient parcel routing.",
    },
    {
      Icon: <FaBuilding />,
      Title: "Booking SME & Corporate",
      Text: "Customized logistics solutions for SMEs and large enterprises.",
    },
  ];

  return (
    <div>
      <h1 className="text-[#03373D] my-10 text-2xl font-bold">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((d, idx) => (
          <div key={idx} className="card  shadow-sm">
            <div className="card-body">
              <div className="text-4xl text-[#03373D]">{d.Icon}</div>
              <h2 className="card-title">{d.Title}</h2>
              <p>{d.Text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
