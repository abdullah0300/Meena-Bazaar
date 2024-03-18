import React from "react";
import { useNavigate } from "react-router-dom";

const CollectionCard = ({ cat }) => {
  const nav = useNavigate();

  return (
    <>
      <div
        className={`relative xl:h-[400px] md:h-[320px] h-48 flex justify-center items-center group transition-all duration-300 ease-in-out`}
      >
        <img src={cat.image.url} alt="img" className="absolute h-full w-full" />
        <button
          className=" px-4 py-[11px] bg-white text-black text-lg opacity-[0] transform translate-y-8 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
          onClick={() => nav(`/ProductPage/${cat._id}/${cat.name}`)}
        >
          View Products
        </button>
        <h2 className="absolute bottom-0 left-0 right-0 text-center xl:text-3xl md:text-2xl tracking-wide pb-4 text-white transition-all duration-300 ease-in-out group-hover:hidden">
          {cat.name}
        </h2>
      </div>
    </>
  );
};

export default CollectionCard;
