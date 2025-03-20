import React from "react";
import companyLogo from "/public/companyLogo.svg";

const CompanyLogo = () => {
  return (
    <div className="py-[117px]">
      <div className="max-w-max-width mx-auto">
        <img src={companyLogo} alt="" />
      </div>
    </div>
  );
};

export default CompanyLogo;
