import React from "react";
import SellingCard from "./SellingCard";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./featured-styles.css";

function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

const BestSellingSection = ({ products }) => {
  const filteredProds = products?.filter((p) => p.featured) || [];

  const desktopProds = chunkArray([...filteredProds], 3);

  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-8 md:px-[60px] px-[16px] my-20">
        {/* HEADINGS SECTION */}
        <div className=" flex flex-col gap-1 text-center">
          <h4 className=" md:text-base text-sm text-primaryColor uppercase">
            STUNNING DESIGN
          </h4>
          <h3 className="md:text-4xl text-2xl text-headingColor capitalize">
            Our Featured Products
          </h3>
        </div>

        {/* CARDS SECTION */}
        <div className="w-full card_div_mobile">
          <AwesomeSlider
            bullets={true} // Hide bullet navigation
            organicArrows={true} // Show arrows
            mobileTouch={true} // Enable touch events for mobile
            buttons={true}
            buttonContentRight={">"}
            buttonContentLeft={"<"}
          >
            {filteredProds?.map((item, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#0000" }}
                className="pb-2"
              >
                <SellingCard product={item} />
              </div>
            ))}
          </AwesomeSlider>
        </div>

        {/* CARDS SECTION DEsk*/}
        <div className="w-full card_div_desktop">
          <AwesomeSlider
            bullets={false} // Hide bullet navigation
            organicArrows={true} // Show arrows
            buttons={true}
            buttonContentRight={">"}
            buttonContentLeft={"<"}
          >
            {desktopProds?.map((item, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#0000" }}
                className="d-flex gap-3"
              >
                {item?.map((el, i) => (
                  <SellingCard product={el} key={i} />
                ))}
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </>
  );
};

export default BestSellingSection;
