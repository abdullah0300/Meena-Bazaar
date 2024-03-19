import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ product }) => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col gap-2 justify-start items-center md:w-full w-80 xl:px-4 md:px-3 px-3">
      <div className=" sellingCard relative">
        <img
          src={product.coverImage?.url || ""}
          alt="img"
          className="w-60 h-60"
        />
        <div
          className=" sellingCard-hover-div"
          onClick={() => nav(`/productDetails/${product._id}`)}
          style={{ cursor: "pointer" }}
        >
          <p className="w-full text-center text-sm font-semibold uppercase">
            View Details
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
  );
};

export default ArticleCard;
