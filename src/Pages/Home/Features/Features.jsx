import React from "react";
import img1 from "../../../assets/illustrations/Illustration.png";
import img2 from "../../../assets/illustrations/img2.png";

const data = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: img1,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: img2,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: img2,
  },
];

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-1  gap-10 ">
        {data.map((d, idx) => (
          <div
            className="card card-side  p-5 bg-white hover:bg-[#CAEB66] shadow-sm transition-transform duration-300 hover:scale-105 cursor-pointer"
            key={idx}
          >
            <figure>
              <img src={d.image} alt="Movie" />
            </figure>
            <div
              className="lg:divider-horizontal w-px h-auto mx-10"
              style={{
                borderLeft: "3px dashed #03464D",
              }}
            ></div>

            <div className="card-body">
              <h2 className="card-title">{d.title}</h2>
              <p>{d.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
