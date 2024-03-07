import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../../../data/Blogs";

const BlogSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-8 md:px-[60px] px-[16px] my-20">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" md:text-base text-sm text-primaryColor uppercase">News & BLOGS</h4>
        <h3 className="md:text-4xl text-2xl text-headingColor capitalize">
          Jewelery Articles
        </h3>
      </div>

      {/* CARDS SECTION */}
      <div className=" flex w-full overflow-x-auto scrollbarHide">
        <div className="md:grid md:grid-cols-4 flex md:gap-2">
        {blogs.map((item, i) => (
          <BlogCard key={i} {...item} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default BlogSection;
