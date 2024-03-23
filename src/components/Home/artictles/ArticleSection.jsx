import React from "react";
import ArticleCard from "./ArticleCard";
// import MainBtn from "../../shared/MainBtn";
import { useNavigate } from "react-router-dom";

const ArticleSection = ({ products, categories }) => {
  const nav = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState(
    categories[0]?._id
  );
  const [selectedCategoryName, setSelectedCategoryName] = React.useState(
    categories[0]?.name
  );
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  React.useEffect(() => {
    // Update filtered products when selected category changes
    const filProds = products.filter((p) => p.category === selectedCategory);
    setFilteredProducts(filProds);
  }, [selectedCategory, products]);

  // Handle category change
  const handleCategoryChange = (category, catName) => {
    setSelectedCategory(category);
    setSelectedCategoryName(catName);
  };

  // Set default category and filtered products on mount
  React.useEffect(() => {
    setSelectedCategory(categories[0]?._id);
    setSelectedCategoryName(categories[0]?.name);
    const filProds = products.filter((p) => p.category === categories[0]?._id);
    setFilteredProducts(filProds);
  }, [products, categories]);

  return (
    <div className=" flex flex-col justify-center items-center gap-8 md:px-[60px] px-[16px] my-20">
      {/* HEADINGS SECTION */}
      <div className=" flex flex-col gap-1 text-center">
        <h4 className=" md:text-base text-sm text-primaryColor uppercase">
          Dazzling & Stylish
        </h4>
        <h3 className="md:text-4xl text-2xl text-headingColor capitalize">
          Jewelery Articles
        </h3>
      </div>

      <div className=" w-[100%] flex items-center gap-4 mx-auto overflow-x-auto whitespace-nowrap scrollbarHide">
        {categories?.map((item, i) => (
          <button
            key={item._id}
            onClick={() => handleCategoryChange(item._id, item.name)}
            className={` px-3 py-[10px] rounded-md  text-base tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu ${
              item._id === selectedCategory && "bg-[#BD9229] text-white"
            }`}
          >
            <span style={{ fontSize: "15px" }}>{item.name}</span>
          </button>
        ))}
      </div>

      {/* CARDS SECTION */}
      <div className=" flex w-full overflow-x-auto whitespace-nowrap scrollbarHide">
        <div className="md:grid md:grid-cols-4 flex md:gap-2">
          {filteredProducts?.slice(0, 8).map((item) => (
            <ArticleCard key={item._id} product={item} />
          ))}
        </div>
      </div>
      <button
        className=" rounded-[32px] text-center bg-[#fff] px-[80px] py-[10px] text-primaryColor text-xl hover:text-[#fff] hover:bg-[#BD9229] transition-all duration-300 ease-in-out transform-gpu hover:scale-105 group"
        onClick={(e) => {
          e.preventDefault();
          nav(
            `/productPage/${selectedCategory}/${selectedCategoryName.replaceAll(
              "/",
              "@"
            )}`
          );
        }}
      >
        <span className="transform translate-y-[8] transition duration-300 ease-in-out group-hover:translate-y-[200px]">
          View All
        </span>
      </button>
    </div>
  );
};

export default ArticleSection;
