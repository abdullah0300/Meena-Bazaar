import "../SubComponenets/ProductPage.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

function ProductDetails() {
  const [openOpt, setOpenOpt] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }
  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }


  const onClose = () => {
    setOpenOpt(false);
  };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [icon, setIcon] = useState(<FiPlus />);
  const [icon2, setIcon2] = useState(<FiPlus />);
  const [icon3, setIcon3] = useState(<FiPlus />);

  const changeIcon = () => {
    setIcon(!icon);
    setOpen(!open);
  };
  const changeIcon2 = () => {
    setIcon2(!icon2);
    setOpen2(!open2);
  };
  const changeIcon3 = () => {
    setIcon3(!icon3);
    setOpen3(!open3);
  };
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

  ];

  return (
    <div>
      <Navbar />
      <div class="mt-5">
        <div>
          <Container fluid class="p-3">
            <Row>
              <Col>
                <div>
                  <Row>
                    <Col md={4} className="hidden md:block">
                      <div class="d-flex flex-col gap-3 p-2 px-5 ">
                        <img
                          class="w-36 h-28 shadow-md"
                          src="https://ik.imagekit.io/mctozv7td/il_794xN.4516252127_g864.webp?updatedAt=1709929264107"
                        />

                        <img
                          class="w-36 h-28 shadow-md"
                          src="https://ik.imagekit.io/mctozv7td/il_794xN.4516252151_97g5.webp?updatedAt=1709929358115"
                        />

                        <img
                          class="w-36 h-28 shadow-md"
                          src="https://ik.imagekit.io/mctozv7td/il_794xN.4516252073_7sd5.webp?updatedAt=1709929381153"
                        />

                        <img
                          class="w-36 h-24 shadow-md"
                          src="https://ik.imagekit.io/mctozv7td/il_794xN.4468885032_1d4w.webp?updatedAt=1709929434188"
                        />
                      </div>
                    </Col>
                    <Col md={8} className="hidden md:block">
                      <img
                        class="shadow-md h-full "
                        src="https://ik.imagekit.io/mctozv7td/il_794xN.4468885032_1d4w.webp?updatedAt=1709929434188"
                      />
                    </Col>
                  </Row>
                </div>
              </Col>

              {/* smallscreen */}
              <Col sm={12} className=" block md:hidden">
                <Row>
                  <img
                    class="shadow-md h-full "
                    src="https://ik.imagekit.io/mctozv7td/il_794xN.4516252127_g864.webp?updatedAt=1709929264107"
                  />
                </Row>

                <Row>
                  <div class="d-flex flex-row gap-2 py-5 ">
                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/mctozv7td/il_794xN.4516252151_97g5.webp?updatedAt=1709929358115"
                    />

                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/mctozv7td/il_794xN.4516252073_7sd5.webp?updatedAt=1709929381153"
                    />

                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/mctozv7td/il_794xN.4468885032_1d4w.webp?updatedAt=1709929434188"
                    />

                    <img
                      class="w-36 h-24 shadow-md"
                      src="https://ik.imagekit.io/mctozv7td/il_794xN.4468885032_1d4w.webp?updatedAt=1709929434188"
                    />
                  </div>
                </Row>
              </Col>
              {/* -----deatils------ */}
              <Col>
                <p class="fs-2 px-2 py-3 font-semibold text-[#BD9229]">
                  Yellowish Gold Necklace

                </p>

                <p class="text-[#707070] text-[15px] px-2 pt-2">
                  24K Gold Plated Collection 100% brass slim design unclosed.
                </p>
                <p class="text-xl py-3 font-semibold px-2 text-black mb-2">
                  £ 7.95
                </p>
                <p style={{ fontFamily: 'Tw Cen MT' }}>Color: <span className="text-[#BD9229]">Gold</span></p>
                <Container className="border-y py-3 mx-auto text-center p-0 m-0">
                  <Row className="flex  flex-wrap">
                    <Col
                      className="flex py-2"
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      xl={6}
                    >
                      <div className=" w-[100%] flex items-center gap-2 mx-auto  whitespace-nowrap scrollbarHide">
                        {articleJewwllaryNames.map((item, i) => (
                          <button
                            className={` px-3 py-[6px] rounded-md text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu ${item.id === 1 && "bg-[#BD9229] text-white"
                              }`}
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </Col>
                    <Col
                      className="flex py-2 "
                      xs={12}
                      sm={12}
                      md={6}
                      lg={6}
                      xl={6}
                    >
                      {/* <Button
                        className="cursor-pointer border-[#59A0B8] font-semibold bg-[#59A0B8] text-white grow hover:border-[#59A0B8] hover:bg-[#59A0B8] py-3 px-4 rounded-none text-md"
                      >
                        Choose Strenght
                      </Button> */}
                    </Col>

                    {/* <Col
                      className="flex py-1 "
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      xl={4}
                    >
                      <Button
                        variant="primary"
                        className="cursor-pointer border-black font-semibold bg-black text-white grow hover:border-black py-2 px-3 rounded-none text-sm"
                      >
                        BUY IT NOW
                      </Button>
                    </Col> */}
                  </Row>
                </Container>

                <p class="py-2"></p>
                <div class="flex px-2">
                  <p class="text-[#707070] text-[18px] mt-2  pr-2">Quantity</p>
                  <p
                    class="px-3 py-1  bg-white  text-[20px] shadow-sm shadow-cyan-500/50 cursor-pointer"
                    onClick={decrement}
                  >
                    -
                  </p>
                  <p class="px-2 py-1  bg-white text-[#bd9229]  text-[20px] shadow-sm shadow-cyan-500/50">
                    {count}
                  </p>
                  <p
                    class="px-3 py-1  bg-white  text-[20px] shadow-sm shadow-cyan-500/50 cursor-pointer"
                    onClick={increment}
                  >
                    +
                  </p>
                  <div class="flex flex-col justify-center items-center ">
                    <Link to="/CartPage">
                      <button className=" mx-4 relative secondaryBtnTop1 lg:w-[362px]    sm:w-32 h-11">
                        <span className=" flex items-center justify-center lg:w-[362px] sm:w-32 h-11 text-lg text-white hover:text-white secondaryBtnTopInner1 transition-all duration-200 ease-in-out transform-gpu">
                          Add to Cart
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>

              </Col>
            </Row>


            <Row class="py-8  ">
              {" "}
              <div class="mx-auto mt-5 w-75 ">
                <div
                  className="flex justify-between px-2 bg-[#E9E9E9] my-2 items-baseline "
                  onClick={changeIcon}
                >
                  <p className=" text-[#383838] text-[15px]  pt-3 py-3 text-base  font-semibold flex">
                    {" "}
                    Product Overview
                  </p>
                  <p className="">{icon ? <FiPlus /> : <FiMinus />}</p>
                </div>{" "}
                {open ? (
                  <p className="text-[#383838] text-[15px] px-2  pt-3 py-3  flex ">
                    The Lorem ipsum text is derived from sections 1.10.32 and
                    1.10.33 of Cicero's De finibus bonorum et malorum.The
                    physical source may have been the 1914 Loeb Classical
                    Library edition of De finibus, where the Latin text,
                    presented on the left-hand (even) pages, breaks off on page
                    34 with "Neque porro quisquam est qui do-" and continues on
                    page 36 with "lorem ipsum ...", suggesting that the galley
                    type of that page was mixed up to make the dummy text seen
                    today.
                  </p>
                ) : null}

                {open2 ? (
                  <p className="text-[#383838] text-[15px] px-2  pt-3 py-3  flex ">
                    The Lorem ipsum text is derived from sections 1.10.32 and
                    1.10.33 of Cicero's De finibus bonorum et malorum.The
                    physical source may have been the 1914 Loeb Classical
                    Library edition of De finibus, where the Latin text,
                    presented on the left-hand (even) pages, breaks off on page
                    34 with "Neque porro quisquam est qui do-" and continues on
                    page 36 with "lorem ipsum ...", suggesting that the galley
                    type of that page was mixed up to make the dummy text seen
                    today.
                  </p>
                ) : null}
                <div
                  className="flex justify-between px-2 bg-[#E9E9E9] my-2 items-baseline "
                  onClick={changeIcon3}
                >
                  <p className=" text-[#383838] text-[15px]  pt-3 py-3 text-base  font-semibold flex">
                    {" "}
                    Delivery Information
                  </p>
                  <p className="">{icon3 ? <FiPlus /> : <FiMinus />}</p>
                </div>{" "}
                {open3 ? (
                  <p className="text-[#383838] text-[15px] px-2  pt-3 py-3  flex ">
                    The Lorem ipsum text is derived from sections 1.10.32 and
                    1.10.33 of Cicero's De finibus bonorum et malorum.The
                    physical source may have been the 1914 Loeb Classical
                    Library edition of De finibus, where the Latin text,
                    presented on the left-hand (even) pages, breaks off on page
                    34 with "Neque porro quisquam est qui do-" and continues on
                    page 36 with "lorem ipsum ...", suggesting that the galley
                    type of that page was mixed up to make the dummy text seen
                    today.
                  </p>
                ) : null}
              </div>
            </Row>

            <Row>
              <h1 class="fs-3 font-bold mt-5  text-[#BD9229] ">More For You</h1>
              <Container
                fluid
                className="d-flex justify-content-center align-items-center mt-[3rem]"
                style={{ display: "flex", justify: "center", align: "center" }}
              >
                <Row xs={2} md={4}>
                  <Col>
                    <div id="content" class="m-2 relative">
                      <img
                        src="https://ik.imagekit.io/mctozv7td/il_794xN.4468885032_1d4w.webp?updatedAt=1709929434188"
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            Yellowish Gold Necklace
                          </p>
                          <p class=" font-semibold text-[#BD9229] text-[15px] px-3">
                            £14.95
                          </p>
                        </div>
                        {/* <p class="text-[#000000] font-semibold text-[15px] px-3" >£14.95</p> */}
                      </div>
                    </div>
                  </Col>

                  <Col>
                    <div id="content" class="m-2 relative">
                      <img
                        src="https://ik.imagekit.io/mctozv7td/il_794xN.4468885032_1d4w.webp?updatedAt=1709929434188"
                        alt=""
                        class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                      />
                      <div class="flex justify-between">
                        {" "}
                        <div>
                          <p class="text-black font-semibold text-[15px] px-3">
                            Yellowish Gold Necklace
                          </p>
                          <p class=" font-semibold text-[#BD9229] text-[15px] px-3">
                            £14.95
                          </p>
                        </div>
                        {/* <p class="text-[#000000] font-semibold text-[15px] px-3" >£14.95</p> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row> <br></br><br></br>
          </Container>



        </div>
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;