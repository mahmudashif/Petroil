import React from "react";
import servicesImg1 from "/public/servicesImg1.svg";
import servicesImg2 from "/public/servicesImg2.svg";
import servicesImg3 from "/public/servicesImg3.svg";
import servicesImg4 from "/public/servicesImg4.svg";
import servicesImg5 from "/public/servicesImg5.svg";
import servicesImg6 from "/public/servicesImg6.svg";
import servicesImg7 from "/public/servicesImg7.svg";

const Services = () => {
  return (
    <div>
      <div className="flex justify-between">
        <img src={servicesImg1} alt="" />
        <img src={servicesImg2} alt="" />
        <img src={servicesImg3} alt="" />
        <img src={servicesImg4} alt="" />
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-[50%]">
          <h3>our services</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="w-[50%]">
          <img src={servicesImg5} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <img src={servicesImg6} alt="" />
        </div>
        <div className="w-[50%]">
          <img src={servicesImg7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
