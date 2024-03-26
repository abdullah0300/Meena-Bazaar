import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../SubComponenets/ProductPage.css";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Footer from "../shared/Footer.jsx";
import { Link, Outlet, useParams } from "react-router-dom";
import Slider from "react-slick";
import { data } from "../../data/Pdata.js";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Pagination from "react-bootstrap/Pagination";
import { FaRegSquare } from "react-icons/fa";
import Navbar from "../shared/Navbar.jsx";
import { apiUrl } from "../../data/env.js";

function BarFilter({ filter, handleSelectOpt, handleFilterChange }) {
  const [open1, setOpen1] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };

  return (
    <div>
      <div
        className="flex justify-center item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline"
        onClick={changeIcon1}
        style={{
          overflowY:
            filter.options && filter.options.length > 5 ? "scroll" : "auto",
        }}
      >
        <p className="text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base font-semibold flex">
          {filter.alternateName}
        </p>
        <p>
          {icon1 ? (
            <BsChevronDown className="text-[#707070] font-semibold" />
          ) : (
            <BsChevronUp className="text-[#707070] font-semibold" />
          )}
        </p>
      </div>{" "}
      {open1 ? (
        <ul
          className="flex flex-col justify-start item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline"
          style={{
            maxHeight:
              filter.options && filter.options.length > 5 ? "200px" : "auto",
            overflowY: "auto",
          }}
        >
          {filter.options?.map((opt, i) => {
            return (
              <li className="flex justify-start gap-2  item-center" key={i}>
                <input
                  type="checkbox"
                  id={opt}
                  className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex"
                  onChange={(e) =>
                    handleFilterChange(filter._id, opt, e.target.checked)
                  }
                />
                <label htmlFor={opt} className="py-2">
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function BarFilterMobile({ filter, handleFilterChange }) {
  const [open1, setOpen1] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };

  return (
    <div>
      <div
        className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
        onClick={changeIcon1}
      >
        <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
          {filter.alternateName}
        </p>
        <p className="">
          {icon1 ? (
            <BsChevronDown class="text-[#707070] font-semibold" />
          ) : (
            <BsChevronUp class="text-[#707070] font-semibold" />
          )}
        </p>
      </div>
      {open1 ? (
        <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
          {filter.options?.map((opt, i) => {
            return (
              <li class="flex justify-start item-center " key={i}>
                <input
                  type="checkbox"
                  id={opt}
                  className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex"
                  onChange={(e) =>
                    handleFilterChange(filter._id, opt, e.target.checked)
                  }
                />
                <label htmlFor={opt} className="py-2">
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function ProductPage({
  products,
  // currentCategory,
  categories,
  // setCurrentProductId,
  filters,
  img,
  title,
}) {
  const { categoryId, currentCategoryName } = useParams();
  console.log("hellllll", categoryId);

  const filteredBarFilters = [...filters].filter(
    (fil) => fil.categoryId === categoryId
  );

  // const filteredCategory = categories?.filter(cat => cat._id === currentCategory);

  // console.log("allllllll", products);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const [icon2, setIcon2] = useState(<BsChevronUp />);
  const [icon3, setIcon3] = useState(<BsChevronUp />);
  const [icon4, setIcon4] = useState(<BsChevronUp />);
  const [icon5, setIcon5] = useState(<BsChevronUp />);
  const [icon6, setIcon6] = useState(<BsChevronUp />);

  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };
  const changeIcon2 = () => {
    setIcon2(!icon2);
    setOpen2(!open2);
  };
  const changeIcon3 = () => {
    setIcon3(!icon3);
    setOpen3(!open3);
  };
  const changeIcon4 = () => {
    setIcon4(!icon4);
    setOpen4(!open4);
  };
  const changeIcon5 = () => {
    setIcon5(!icon5);
    setOpen5(!open5);
  };
  const changeIcon6 = () => {
    setIcon6(!icon6);
    setOpen6(!open6);
  };

  const [buttonVisible, setButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setButtonVisible(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  function handleFilterProducts() {
    const allOptions = document.querySelectorAll(".special-element");

    const optionsArr = allOptions.map((el) =>
      el.dataset.opt ? el.dataset.opt : null
    );
    console.log(optionsArr);
  }

  const [selectedFilters, setSelectedFilters] = useState({});

  // Filter products based on the selected filters
  const filteredProducts = products
    ?.filter((p) => p.category === categoryId)
    .filter((product) => {
      return Object.entries(selectedFilters).every(([filterId, options]) => {
        // If no options are selected for a filter, include the product
        if (options.length === 0) return true;
        // Otherwise, check if the product has at least one of the selected options for the filter
        return options.some((option) =>
          product.chosenFilters.some(
            (filter) =>
              filter.filterId === filterId && filter.chosenOption === option
          )
        );
      });
    });

  // Update selected filters when a checkbox is changed
  const handleFilterChange = (filterId, option, checked) => {
    setSelectedFilters((prevFilters) => {
      // Clone the previous selected filters object
      const updatedFilters = { ...prevFilters };
      // If the filter is not yet in the selected filters, initialize it as an empty array
      if (!updatedFilters[filterId]) {
        updatedFilters[filterId] = [];
      }
      // Update the selected options for the filter based on the checkbox change
      if (checked) {
        updatedFilters[filterId].push(option);
      } else {
        updatedFilters[filterId] = updatedFilters[filterId].filter(
          (selectedOption) => selectedOption !== option
        );
      }
      return updatedFilters;
    });
  };

  return (
    <div class="mt-0 md:mt-52">
      <Navbar categories={categories} filters={filters} />
      <h2 class="fs-1  font-bold text-center mb-3 text-[#BD9229]  md:mt-[3rem] mt-[8rem]  md:pb-0">
        {currentCategoryName}
      </h2>

      {/* <Container fluid class="flex justify-center items-baseline">
        <Row>
          <Col xs={4} md={2}>
            <p class="font-semibold py-3 text-center text-[#59A0B8]">
              Scroll Left
            </p>
          </Col>
          <Col xs={12} md={9}>
            {" "}
            <div class="md:block hidden">
              <Slider {...settings}>
                {filteredBarFilters?.map((fil, i) => {
                  return (
                    <BarFilter
                      filter={fil}
                      handleSelectOpt={handleFilterProducts}
                      handleFilterChange={handleFilterChange}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
            <div class="block md:hidden">
              <Slider {...settings1}>
                {filteredBarFilters?.map((fil, i) => {
                  return (
                    <BarFilterMobile
                      filter={fil}
                      handleSelectOpt={handleFilterProducts}
                      handleFilterChange={handleFilterChange}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container> */}

      <Container fluid class="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {filteredProducts?.map((item) => (
            <Col
              key={item._id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/productDetails/${item._id}`}>
                <div className=" flex flex-col justify-start items-center  md:w-full md:w-80 w-[14rem]  xl:px-4 md:px-3 px-3">
                  <div id="content" class="mx-3 my-4 sellingCard relative">
                    <img
                      // src={item.coverImage?.url}
                      src={
                        item.coverImage?.url?.replace(
                          "/product",
                          "/tr:ar-1-1,w-640/product"
                        ) || ""
                      }
                      alt={item.name}
                      class="w-60"
                    />

                    <div className=" sellingCard-hover-div">
                      <p className="w-full text-center text-sm font-semibold uppercase">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <h2 className=" xl:text-xl text-base font-medium mx-auto text-center">
                    {item.name}
                  </h2>
                  <span className=" xl:text-base text-sm text-primaryColor">
                    £ {item.basePrice}
                  </span>
                </div>{" "}
                <br></br>{" "}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <div class="flex justify-center items-center mb-5">
        <div class="pagination">
          <div>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#" className="active">
              «
            </a>
            <a href="#" className="active_end text-[#BD9229]">
              »
            </a>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default ProductPage;
