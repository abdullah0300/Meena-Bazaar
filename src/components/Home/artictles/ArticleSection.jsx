import React from "react";
import ArticleCard from "./ArticleCard";
import { articles } from "../../../data/articles";
import MainBtn from "../../shared/MainBtn";

const articleJewwllaryNames = [
  {
    id: 1,
    title: "BRIDAL SET",
  },
  {
    id: 2,
    title: "NECKLACE SET",
  },
  {
    id: 3,
    title: "RINGS",
  },
  {
    id: 4,
    title: "EARINGS",
  },
  {
    id: 5,
    title: "EARINGS TIKKA SET",
  },
  {
    id: 6,
    title: "TIKKA",
  },
  {
    id: 7,
    title: "JUMMAR",
  },
  {
    id: 8,
    title: "AMERICAN DIAMOND",
  },
  {
    id: 9,
    title: "TIKKA",
  },
];

const ArticleSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-8 md:px-[60px] px-[16px] my-20">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" md:text-base text-sm text-primaryColor uppercase">
          News & BLOGS
        </h4>
        <h3 className="md:text-4xl text-2xl text-headingColor capitalize">
          Jewelery Articles
        </h3>
      </div>

      <div className=" w-[100%] flex items-center gap-4 mx-auto overflow-x-auto whitespace-nowrap scrollbarHide">
        {articleJewwllaryNames.map((item, i) => (
          <button
            className={` px-3 py-[10px] rounded-md text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu ${
              item.id === 1 && "bg-[#BD9229] text-white"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* CARDS SECTION */}
      <div className=" flex w-full overflow-x-auto whitespace-nowrap scrollbarHide">
        <div className="md:grid md:grid-cols-4 flex md:gap-2">
          {articles.map((item, i) => (
            <ArticleCard key={i} {...item} />
          ))}
        </div>
      </div>
      <MainBtn />
    </div>
  );
};

export default ArticleSection;
