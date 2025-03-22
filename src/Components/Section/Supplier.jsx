import React from "react";

const Supplier = () => {
  return (
    <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 mt-16 sm:mt-20 lg:mt-28 mb-16 sm:mb-20 lg:mb-28">
      <h2 className="font-bold font-poppins text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[72px] w-full lg:w-[350px]">
        The biggest supplier on the country
      </h2>

      <p className="font-medium text-base sm:text-lg leading-relaxed lg:leading-[100%] w-full lg:w-[650px] text-[#6C6C6C]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution.
      </p>
    </div>
  );
};

export default Supplier;
