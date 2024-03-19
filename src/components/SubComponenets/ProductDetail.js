import "../SubComponenets/ProductPage.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

import { set, keys, values, clear } from "idb-keyval";
import { v4 } from "uuid";
import { apiUrl } from "../../data/env";

function VariantComp({ variant, handleSelectVariant }) {
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <>
      <p style={{ fontFamily: "Tw Cen MT" }}>
        {variant.variantType}:{" "}
        <span className="text-[#BD9229]">
          {selectedOption?.optionValue || ""}
        </span>
      </p>
      <Container className="border-y py-3 mx-auto text-center p-0 m-0">
        <Row className="flex  flex-wrap">
          <Col className="flex py-2" xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className=" w-[100%] flex items-center gap-2 mx-auto  whitespace-nowrap scrollbarHide">
              {variant.options?.map((item, i) => (
                <button
                  className={` px-3 py-[6px] rounded-md text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu ${
                    item._id === selectedOption._id && "bg-[#BD9229] text-white"
                  }`}
                  onClick={() => {
                    setSelectedOption(item);
                    // handleSelectVariant(item.optionValue, variant[i]);
                  }}
                >
                  {item.optionValue}
                </button>
              ))}
            </div>
          </Col>
          <Col className="flex py-2 " xs={12} sm={12} md={6} lg={6} xl={6}>
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
    </>
  );
}

function ProductDetails({ products, categories, filters, setCart }) {
  const { currentProdId } = useParams();
  const nav = useNavigate();

  const [filteredProd, setFilteredProd] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [more4You, setMore4You] = useState([]);

  React.useEffect(() => {
    const prod = products.find((prod) => prod._id === currentProdId);
    setFilteredProd(prod);
    setAllImages([prod?.coverImage, ...(prod?.images || [])]);
    setSelectedVariants(prod?.variants);
  }, [currentProdId, products]);

  React.useEffect(() => {
    const filteredMore4You = products.filter(
      (p) => p._id !== currentProdId && p.category === filteredProd?.category
    );
    setMore4You(filteredMore4You.slice(0, 4));
  }, [currentProdId, products, filteredProd]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const [totalPrice, setTotalPrice] = useState(filteredProd?.basePrice);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
      );
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }
  };

  const [openOpt, setOpenOpt] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleSelectVariant = (value, currVarType) => {
    const [currOption] = currVarType.options.filter(
      (opt) => opt.optionValue === value
    );

    if (currOption.optionImg) {
      setAllImages((imgs) => {
        const newImgs = imgs;
        newImgs.shift();
        newImgs.unshift(currOption.optionImg);
        return newImgs;
      });
      handleImageClick(0);
    }

    setSelectedVariants((vars) => {
      const newVars = vars.map((vr) => {
        if (vr.variantType === currVarType.variantType)
          return {
            variantType: currVarType.variantType,
            chosenOption: currOption,
          };
        else
          return {
            variantType: vr.variantType,
            chosenOption: vr.chosenOption,
          };
      });
      return newVars;
    });
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

  const [currentVariantType, setCurrentVariantType] = useState("");
  const [selectedVariants, setSelectedVariants] = useState(
    filteredProd?.variants
  );
  // const [chosenVariants, setChosenVariants] = useState([]);

  const showDrawer = (v) => {
    console.log(selectedVariants);
    setOpenOpt(true);
    setCurrentVariantType(v);
  };

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

  async function handleAddToCart() {
    const productToAdd = {
      pId: filteredProd._id,
      price: filteredProd.basePrice,
      variants: selectedVariants,
      nm: filteredProd.name,
      image: filteredProd.coverImage?.url || "",
      quantity: count,
      offer: filteredProd.offer,
    };

    const cart = await values()
      .then((res) => res)
      .catch((err) => {
        console.log(err);
        return [];
      });

    // Function to add product to cart
    function addToCart(productToAdd) {
      const existingProductIndex = cart.findIndex(
        (product) => product.pId === productToAdd.pId
      );
      if (existingProductIndex !== -1) {
        // Product exists in cart
        const existingProduct = cart[existingProductIndex];
        let bool = false;
        bool = existingProduct.variants.some((variant, i) => {
          return (
            variant.variantType === productToAdd.variants[i].variantType &&
            variant.chosenOption.optionValue !==
              productToAdd.variants[i].chosenOption.optionValue
          );
        });
        if (bool) {
          // add new product in cart if chosen option is different
          cart.push(productToAdd);
        } else {
          // update quantity of existing product
          existingProduct.quantity += productToAdd.quantity;
        }
      } else {
        // Product not found, add it to the cart
        cart.push(productToAdd);
      }
    }
    addToCart(productToAdd);

    clear()
      .then(() => {
        cart.forEach((crt) => {
          const uId = v4();
          crt.uId = uId;
          set(uId, crt);
        });
      })
      .then(() => nav("/cartView"))
      .catch((err) => {
        alert("Could not add to cart!!!");
        console.log(err);
      });
  }
  return (
    <div>
      <Navbar categories={categories} filters={filters} />
      <div class="mt-5">
        <div>
          <Container fluid class="p-3">
            <Row>
              <Col>
                <div>
                  <Row>
                    <Col md={4} className="hidden md:block">
                      <div class="d-flex flex-col gap-3 p-2 px-5 ">
                        {allImages?.slice(1, 5).map((url, i) => (
                          <img
                            key={i + 1}
                            class={`w-36 h-28 shadow-md ${
                              i + 1 === currentImageIndex
                                ? "border-2 border-[#59A0B8]"
                                : ""
                            }`}
                            alt={`Product Img ${i + 1}`}
                            src={url?.url || ""}
                            onClick={() => handleImageClick(i + 1)}
                          />
                        ))}
                      </div>
                    </Col>
                    <Col md={8} className="hidden md:block">
                      <img
                        class="shadow-md h-full "
                        alt="med-cover"
                        src={allImages[currentImageIndex]?.url || ""}
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
                    src={allImages[currentImageIndex]?.url || ""}
                    alt="sm-cover"
                  />
                </Row>

                <Row>
                  <div class="d-flex flex-row gap-2 py-5 ">
                    {allImages?.slice(1, 5).map((url, y) => (
                      <img
                        key={y + 1}
                        class={`w-36 h-24 shadow-md  ${
                          y + 1 === currentImageIndex
                            ? "border-2 border-[#59A0B8]"
                            : ""
                        }`}
                        alt={`Product Img ${y + 1}`}
                        src={url?.url || ""}
                        onClick={() => handleImageClick(y + 1)}
                      />
                    ))}
                  </div>
                </Row>
              </Col>
              {/* -----deatils------ */}
              <Col>
                <p class="fs-2 px-2 py-3 font-semibold text-[#BD9229]">
                  {filteredProd?.name}
                </p>

                <p class="text-[#707070] text-[15px] px-2 pt-2">
                  {filteredProd?.description}
                </p>
                <p class="text-xl py-3 font-semibold px-2 text-black mb-2">
                  £{(filteredProd?.basePrice * count).toFixed(2)}
                </p>
                {filteredProd?.variants?.map((variant) => (
                  <VariantComp
                    key={variant._id}
                    variant={variant}
                    handleSelectVariant={handleSelectVariant}
                  />
                ))}

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
                    {/* <Link to="/CartPage"> */}
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        const bool = selectedVariants?.every(
                          (sVar) => sVar.chosenOption !== undefined
                        );
                        if (bool) {
                          await handleAddToCart();
                        } else {
                          alert("Select all variants before adding to cart!");
                        }
                      }}
                      className=" mx-4 relative secondaryBtnTop1 lg:w-[362px] w-32 h-11"
                    >
                      <span className=" flex items-center justify-center lg:w-[362px] w-32 h-11 text-lg text-white hover:text-white secondaryBtnTopInner1 transition-all duration-200 ease-in-out transform-gpu">
                        Add to Cart
                      </span>
                    </button>
                    {/* </Link> */}
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
                    {filteredProd?.overview}
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
                  {more4You?.map((p) => {
                    return (
                      <Col key={p._id}>
                        <div id="content" class="m-2 relative">
                          <img
                            src={p.coverImage.url || ""}
                            alt="cover img"
                            class=" w-[45rem] xs:h-[13rem] md:h-[21rem] transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-150"
                          />
                          <div class="flex justify-between">
                            {" "}
                            <div>
                              <p class="text-black font-semibold text-[15px] px-3">
                                {p.name}
                              </p>
                              <p class=" font-semibold text-[#BD9229] text-[15px] px-3">
                                £{p.basePrice}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Row>
            <br></br>
            <br></br>
          </Container>
        </div>
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;
