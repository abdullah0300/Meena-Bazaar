import React from "react";

const CollectionCard = ({ title, img }) => {
  return (
    <>
      <div className={`relative xl:h-[400px] md:h-[320px] h-48 flex justify-center items-center group transition-all duration-300 ease-in-out`}>
        <img src={img} alt="img" className="absolute h-full w-full" />
        <button className=" px-4 py-[11px] bg-white text-black text-lg opacity-[0] transform translate-y-8 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
          View All
        </button>
        <h2 className="absolute bottom-0 left-0 right-0 text-center xl:text-3xl md:text-2xl tracking-wide pb-4 text-white transition-all duration-300 ease-in-out group-hover:hidden">{title}</h2>
      </div>

    </>
  );
};

export default CollectionCard;
