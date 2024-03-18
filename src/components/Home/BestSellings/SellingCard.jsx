import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SellingCard = ({ product }) => {
  const nav = useNavigate();

  return (
    <Link to={"/ProductDetail"}>
      <div className=" flex flex-col gap-2 justify-start items-center md:w-full w-80 xl:px-4 md:px-3 px-3">
        <div className=" sellingCard relative">
          <img
            src={product.coverImage?.url || ""}
            alt="img"
            className=" w-full h-60"
          />
          <div className=" sellingCard-hover-div">
            <p className="w-full text-center text-sm font-semibold uppercase">
              Add To Cart
            </p>
          </div>
        </div>
        <h2 className=" xl:text-xl text-base font-medium mx-auto text-center">
          {product.name}
        </h2>
        <span className=" xl:text-base text-sm text-primaryColor">
          £ {product.basePrice}
        </span>
      </div>
    </Link>
  );
};

export default SellingCard;
