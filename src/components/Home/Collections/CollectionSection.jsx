import React from "react";
import CollectionCard from "./CollectionCard";
import { Collections } from "../../../data/Collections";
import MainBtn from "../../shared/MainBtn";
import { Link } from "react-router-dom";

const CollectionSection = ({ categories }) => {
  return (
    <div className=" flex flex-col gap-4 my-10">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" md:text-base text-sm text-primaryColor uppercase">
          ATTRACTIVE JEWELLERY
        </h4>
        <h3 className=" md:text-4xl text-2xl text-headingColor capitalize">
          Gorgeous Collections
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className=" grid md:grid-cols-3 grid-cols-2">
        {categories?.map((item, i) => (
          <CollectionCard key={i} cat={item} />
        ))}
      </div>
      <Link to={`/Collection`}>
        {" "}
        <div className=" flex justify-center items-center">
          <MainBtn />
        </div>
      </Link>
    </div>
  );
};

export default CollectionSection;
