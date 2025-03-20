import React from "react";
import servicesImg1 from "/public/servicesImg1.svg";
import servicesImg2 from "/public/servicesImg2.svg";
import servicesImg3 from "/public/servicesImg3.svg";
import servicesImg4 from "/public/servicesImg4.svg";

const Services = () => {
  return (
    <div>
      <div className="flex justify-between">
        <img src={servicesImg1} alt="" />
        <img src={servicesImg2} alt="" />
        <img src={servicesImg3} alt="" />
        <img src={servicesImg4} alt="" />
      </div>
      <div>
        <div>
          <h3>our services</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
