import React from "react";
import ArticleCard from "./ArticleCard";
import MainBtn from "../../shared/MainBtn";

const ArticleSection = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(
    categories[0]?._id
  );
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  React.useEffect(() => {
    // Update filtered products when selected category changes
    const filProds = products.filter((p) => p.category === selectedCategory);
    setFilteredProducts(filProds);
  }, [selectedCategory, products]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Set default category and filtered products on mount
  React.useEffect(() => {
    setSelectedCategory(categories[0]?._id);
    const filProds = products.filter((p) => p.category === categories[0]?._id);
    setFilteredProducts(filProds);
  }, []);

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
            onClick={() => handleCategoryChange(item._id)}
            className={` px-3 py-[10px] rounded-md  text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu ${item._id === selectedCategory && "bg-[#BD9229] text-white"
              }`}
          >
            {item.name}
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
      <MainBtn />
    </div>
  );
};

export default ArticleSection;
