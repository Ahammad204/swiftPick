import React from "react";

const SectionTitle = ({ title, subTitle }) => {
 
  return (
    <div className="text-center">
      <h1 className="text-4xl my-4 font-extrabold">{title}</h1>
      <p className="text-sm font-medium">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
