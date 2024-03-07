import React from "react";

const SecondaryBtn = () => {
  return (
    <button className=" relative secondaryBtnTop w-32 h-11">
      <span className=" flex items-center justify-center w-32 h-11 text-lg text-primaryColor hover:text-white secondaryBtnTopInner transition-all duration-200 ease-in-out transform-gpu">
        Shop Now
      </span>
    </button>
  );
};

export default SecondaryBtn;
