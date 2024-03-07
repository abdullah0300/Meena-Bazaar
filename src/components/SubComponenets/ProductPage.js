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


function ProductPage({
  products,
  // currentCategory,
  categories,
  // setCurrentProductId,
  filters,
  img, title
}) {
  const { categoryId, currentCategoryName } = useParams();
  console.log("hellllll", categoryId);

  const filteredProducts = products?.filter(
    (prod) => prod.category === categoryId
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

  return (
    <div class="mt-0 md:mt-52">
      <Navbar />
      <h2 class="fs-1 py-5 font-bold text-center text-[#BD9229]">
        Product Page {currentCategoryName}
      </h2>


      <Container fluid class="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {data?.map((item) => (
            <Col
              key={item._id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={'/ProductDetail'}>
              <div className=" flex flex-col gap-2 justify-start items-center md:w-full w-80 xl:px-4 md:px-3 px-3">

                <div id="content" class="mx-3 my-4 sellingCard relative">

                  <img src="https://ik.imagekit.io/mctozv7td/earrings.jpg?updatedAt=1709807477817"
                    // src={ 
                    //   item.coverImage?.url?.replace(
                    //     "/product",
                    //     "/tr:ar-1-1,w-285.5/product"
                    //   ) || ""
                    // }
                    alt={item.name}
                    class=" w-full h-60"
                  />

                  <div className=" sellingCard-hover-div">
                    <p className="w-full text-center text-sm font-semibold uppercase">Add To Cart</p>
                  </div>
                </div>
                <h2 className=" xl:text-xl text-base font-medium mx-auto text-center">
                  {item.name}
                </h2>
                <span className=" xl:text-base text-sm text-primaryColor">{item.price}</span>
              </div> </Link>
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
