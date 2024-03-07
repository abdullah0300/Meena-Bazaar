import React from "react";
import SellingCard from "./SellingCard";
import { bestSelling } from "../../../data/BestSelling";

const BestSellingSection = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-8 md:px-[60px] px-[16px] my-20">
        {/* HEADINGS SECTION */}
        <div className=" flex flex-col gap-1 text-center">
          <h4 className=" md:text-base text-sm text-primaryColor uppercase">
            STUNNING DESIGN
          </h4>
          <h3 className="md:text-4xl text-2xl text-headingColor capitalize">
            Our Best Selling
          </h3>
        </div>

        {/* CARDS SECTION */}
        <div className=" flex w-full overflow-x-auto whitespace-nowrap scrollbarHide">
        <div className="md:grid md:grid-cols-4 flex md:gap-2">

          {bestSelling.map((item, i) => (
            <SellingCard key={i} {...item} />
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default BestSellingSection;
