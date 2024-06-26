import React from "react";
import { shops } from "../../../data/shop";
import SecondaryBtn from "../../shared/SecondaryBtn";
import { Link } from "react-router-dom";

const ShopSection = ({ categories }) => {
  return (
    <div className=" flex mb-5 w-full overflow-x-auto scrollbarHide">
      <div className=" md:grid md:grid-cols-3 flex md:gap-10 gap-4 md:px-20">
        {categories?.slice(1, 4).map((item, i) => (
          <div className={` relative md:w-full w-80 xl:h-48 md:h-44`}>
            <img
              src={shops[i]?.img || ""}
              alt="img1"
              className=" absolute h-full  w-full"
            />
            <div className=" flex flex-col justify-center py-6 px-8">
              <img
                src={shops[i]?.imgb || ""}
                alt="img1b"
                className=" relative  h-10  w-4/5"
              />
              <h3 className="  relative xl:text-base md:text-sm uppercase tracking-wide pb-2 text-white">
                {item.description || shops[i].description}
              </h3>
              <Link to={`/ProductPage/${item._id}/${item.name}`}>
                <SecondaryBtn />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
