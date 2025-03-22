import React from "react";
import companyLogo from "/public/companyLogo.svg";

const CompanyLogo = () => {
  return (
    <div className="py-12 sm:py-16 md:py-24 lg:py-[117px]">
      <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <img
          src={companyLogo || "/placeholder.svg"}
          alt="Company Logos"
          className="w-full max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CompanyLogo;
