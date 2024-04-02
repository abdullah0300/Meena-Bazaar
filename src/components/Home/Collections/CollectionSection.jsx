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

        <h3 className=" md:text-4xl mb-2 text-1xl text-headingColor capitalize">
          Jewellery For All Your Occasions        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className=" grid md:grid-cols-3 grid-cols-2">
        {categories?.slice(0, 6).map((item, i) => (
          <Link
            to={`/ProductPage/${item._id}/${item.name.replaceAll("/", "@")}`}
          >
            <CollectionCard key={i} cat={item} />
          </Link>
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
