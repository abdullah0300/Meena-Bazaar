// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import InputField from "../InputField";
import axios from "axios";
import { apiUrl } from "../../data/env";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../utils/auth";
import { keys } from "idb-keyval";

const navLinksStatic = [
  {
    id: 1,
    title: "Bridal Sets",
  },
  {
    id: 2,
    title: "Necklace Sets",
    sublinks: [
      "All Necklace Sets",
      "Polki Sets",
      "Reverse AD Sets",
      "Kundan Sets",
    ],
  },
  {
    id: 3,
    title: "American Diamond",
    sublinks: ["Necklace Sets", "Earrings", "Rings", "Tikka", "Bangles"],
  },
  {
    id: 4,
    title: "Earings",
  },
  {
    id: 5,
    title: "Bangles",
    sublinks: [
      "Stone Bangles",
      "Polki Bangles",
      "Gold Polish",
      "Choora Sets",
      "Mehendi Bangles",
      "Plain Bangles",
    ],
  },
  {
    id: 6,
    title: "Scarves/Hijab",
  },
];

const closeModalFunc = () => {
  const trigger = (el, etype, custom) => {
    const evt = custom ?? new Event(etype, { bubbles: true });
    el.dispatchEvent(evt);
  };
  setTimeout(
    (_) => trigger(document.querySelector(`#close-button-icon`), `click`),
    100
  );
};

const Navbar = ({ categories, filters }) => {
  const nav = useNavigate();
  const auth = useAuth();
  const [cartLength, setCartLength] = React.useState(0);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    keys().then((keys) => setCartLength(keys.length));

    if (token && !auth?.loggedIn) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          // console.log(res.data);
          auth.login(token, res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState("Search Products");

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSubLinks, setOpenSubLinks] = useState(false);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);
  const [subLinks, setSubLinks] = useState();

  const [navLinks, setNavLinks] = useState(navLinksStatic);

  useEffect(() => {
    const transformedCategories = categories?.map((category) => {
      // Find filters belonging to this category
      const categoryFilters = filters?.filter(
        (filter) => filter.categoryId === category._id
      );

      // Map filters to sublinks
      const sublinks = categoryFilters.map((filter) => {
        return { name: filter.name, _id: filter._id };
      });

      return {
        id: category._id,
        title: category.name,
        sublinks: sublinks.length > 0 ? sublinks : null,
      };
    });
    setNavLinks(transformedCategories);
  }, [categories, filters]);

  const handleMouseEnter = (id) => {
    setHoveredLinkId(id);
  };

  const handleMouseLeave = () => {
    setHoveredLinkId(null);
  };

  useEffect(() => {
    const sub = navLinks.filter(
      (item) => item.id === hoveredLinkId && hoveredLinkId
    );
    // console.log(sub[0]?.sublinks);
    setSubLinks(sub[0]?.sublinks);
  }, [hoveredLinkId]);
  const [type, setType] = useState("login");

  // Login Funcs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const id = toast.loading("Logging In...");

    axios
      .post(`${apiUrl}/api/v1/customer/login`, { email, password })
      .then((res) => {
        // console.log(res.data);
        toast.success("Logged In Successfully", {
          id,
        });
        auth.login(res.data.token, res.data.data);

        setTimeout(closeModalFunc, 350);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || "Could Not Log In", {
          id,
        });
      });
  };

  // Signup Funcs & Hooks
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  // const [focusedValue, setFocusedValue] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = () => {
    const id = toast.loading("Signing Up...");

    const payload = {
      firstName,
      lastName,
      email: emailRegister,
      password: passwordRegister,
      passwordConfirm: passwordRegister,
    };
    if (postcode) payload.postcode = postcode;
    if (city) payload.city = city;
    // if (country) payload.country = country;
    // if (state) payload.state = state;
    if (address) payload.address = address;
    if (phone) payload.phone = phone;

    // console.log(payload);

    axios
      .post(`${apiUrl}/api/v1/customer/signup`, payload)
      .then((res) => {
        console.log(res.data);
        toast.success("Registered Successfully", {
          id,
        });
        auth.login(res.data.token, res.data.data);

        setTimeout(() => {
          closeModalFunc();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || "Could Not Sign Up", {
          id,
        });
      });
  };

  // forgot password
  const [forgotPass, setForgotPass] = React.useState(false);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter an email!");
      return;
    }
    const id = toast.loading("Generating Reset Link...");

    axios
      .post(`${apiUrl}/api/v1/customer/forgotPassword`, { email })
      .then((res) => {
        console.log(res.data);
        toast.success("Email with reset link sent. Check Inbox!", {
          id,
        });

        setTimeout(() => {
          closeModalFunc();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response?.data?.message || "Could Not Reset Password. Try Later!",
          {
            id,
          }
        );
      });
  };

  return (
    <>
      {/* DESKTOP */}
      <header className="md:block hidden h-48 sticky top-0 bg-white z-50">
        <div className=" h-1/5 bg-primaryColor"></div>
        <nav
          className=" h-4/5 flex w-full px-8"
          style={{ background: "white" }}
        >
          <Link to={"/"}>
            <img src={logo} alt="logo" className=" h-[165px] w-[200px]" />
          </Link>
          <div className=" flex flex-col items-center justify-center gap-4 mt-[26px] w-full">
            <div className=" flex w-full  ">
              <div className=" w-4/5 flex justify-center">
                <div className=" flex  border rounded-3xl h-9  pl-4">
                  <input
                    placeholder="Search"
                    defaultValue={"Search Products"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchQuery("")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        nav(
                          `/searchProductPage/${searchQuery.replaceAll(
                            "/",
                            "@"
                          )}`
                        );
                      }
                    }}
                    id="search"
                    className=" w-64 focus:outline-none rounded-3xl px-2"
                  />
                  <span className=" flex items-center rounded-e-3xl px-3 bg-primaryColor">
                    <IoSearch
                      className=" text-white text-xl"
                      onClick={() => {
                        nav(
                          `/searchProductPage/${searchQuery.replaceAll(
                            "/",
                            "@"
                          )}`
                        );
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className=" w-1/5 flex gap-3 justify-center">
                {auth.loggedIn ? (
                  <GoPerson
                    className="text-3xl text-primaryColor cursor-pointer"
                    onClick={() => nav("/ProfilePage")}
                  />
                ) : (
                  <GoPerson
                    className="text-3xl text-primaryColor cursor-pointer"
                    id="show-modal-icon"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  />
                )}
                <div className="relative" style={{ cursor: "pointer" }}>
                  {cartLength === 0 ? null : (
                    <span className=" absolute -right-4 -top-2 text-center text-primaryColor text-md  rounded-[50%] py-[1px] px-[3px] ">
                      {cartLength}
                    </span>
                  )}
                  <FiShoppingCart
                    onClick={() => nav("/cartView")}
                    className=" text-3xl text-primaryColor"
                  />
                </div>
              </div>
            </div>
            <ul
              className=" w-full flex justify-between items-center py-[10px] xl:px-10 md:px-4"
              style={{
                borderTop: "1px solid #EDEDED",
                borderBottom: "1px solid #EDEDED",
              }}
            >
              {navLinks?.slice(0, 6).map((item, i) => (
                <li
                  key={i}
                  className=" xl:text-lg md:text-base cursor-pointer transition-all duration-200 ease-in-out transform-gpu borderNavlinks"
                  // style={{
                  //   borderBottom:
                  //     subLinks &&
                  //     hoveredLinkId === item.id &&
                  //     "2px solid #BD9229",
                  // }}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onClick={() => nav(`/ProductPage/${item.id}/${item.title}`)}
                >
                  {item.title}
                </li>
              ))}
              <Link to={"/Collection"}>
                <button
                  className={`px-3 py-2 rounded-md xl:text-lg md:text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu`}
                >
                  More Collection
                </button>
              </Link>
            </ul>
          </div>
        </nav>
        {subLinks && (
          <div
            className={`${
              subLinks ? " opacity-[1]" : "opacity-[0]"
            } absolute z-50 bg-[#fff] w-full h-10 pt-[10px] pb-1 transition-opacity duration-200 ease-in-out transform-gpu`}
            onMouseLeave={handleMouseLeave}
          >
            <ul className=" flex justify-center items-center gap-16 ">
              {subLinks &&
                subLinks?.map((item) => {
                  return (
                    <li
                      key={item._id}
                      onClick={() =>
                        nav(
                          `/SubCollectionPage/${hoveredLinkId}/${
                            item._id
                          }/${item.name.replaceAll("/", "@")}`
                        )
                      }
                      className=" text-headingColor xl:text-sm md:text-[13px] cursor-pointer sublinksHover"
                    >
                      {item.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </header>

      {/* Mobile */}
      <header className="block md:hidden sticky top-0 bg-white z-50">
        <div className=" h-9 bg-primaryColor flex items-center">
          <span className=" px-3 text-white text-sm tracking-wide font-light">
            Delivery Across UK
          </span>
        </div>
        <nav className=" absolute z-50 w-full bg-white  flex justify-between items-center px-4">
          <div
            className={` ${
              isMobileOpen ? "hidden" : "flex"
            }  justify-between w-full py-3`}
          >
            <FiMenu
              className=" text-3xl text-primaryColor"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            />
            <span className="h-[60px] ml-[2rem]">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="logo"
                  className=" h-[120px] w-[120px] mt-[-25px]"
                />
              </Link>
            </span>
            <div className=" w-1/5 flex gap-3 justify-center">
              {auth.loggedIn ? (
                <GoPerson
                  className="text-2xl text-primaryColor cursor-pointer"
                  onClick={() => nav("/ProfilePage")}
                />
              ) : (
                <GoPerson
                  className="text-2xl text-primaryColor cursor-pointer"
                  id="show-modal-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                />
              )}
              <div className="relative" style={{ cursor: "pointer" }}>
                {cartLength === 0 ? null : (
                  <span className=" absolute -right-2 -top-1 text-center text-white text-xs bg-primaryColor rounded-[50%] py-[1px] px-[3px] ">
                    {cartLength}
                  </span>
                )}
                <FiShoppingCart
                  onClick={() => nav("/cartView")}
                  className=" text-2xl text-primaryColor"
                />
              </div>
            </div>
          </div>
          <div
            className={` ${
              isMobileOpen ? "flex" : "hidden"
            }  justify-between w-full py-3`}
          >
            <div className=" flex flex-col w-full gap-3">
              <div className="flex justify-between w-full">
                <div>
                  <h3 className=" text-lg">Categories</h3>
                  <hr
                    className=" w-16 mx-auto text-primaryColor opacity-90"
                    style={{ borderTopWidth: "2px" }}
                  />
                </div>
                <IoClose
                  className=" text-2xl"
                  onClick={() => setIsMobileOpen((prev) => !prev)}
                />
              </div>
              <ul className="flex flex-col gap-[6px]">
                {navLinks?.slice(0, 6).map((item, i) => (
                  <>
                    <li
                      key={i}
                      className="flex justify-between w-full cursor-pointer"
                      onClick={() =>
                        nav(`/ProductPage/${item.id}/${item.title}`)
                      }
                    >
                      <span className=" text-sm text-slate-500">
                        {item.title}
                      </span>
                      {item.sublinks && (
                        <IoIosArrowForward
                          className=" text-sm text-slate-500"
                          onClick={() => {
                            setHoveredLinkId(item.id);
                            setOpenSubLinks((prev) => !prev);
                          }}
                        />
                      )}
                    </li>
                    {openSubLinks && subLinks && item.id === hoveredLinkId && (
                      <div className=" ml-5">
                        <ul className="flex flex-col justify-center items-start gap-[10px]">
                          {subLinks &&
                            subLinks.map((item, i) => (
                              <li
                                key={i}
                                className="text-headingColor text-xs xl:text-sm md:text-[13px] cursor-pointer"
                                onClick={() =>
                                  nav(
                                    `/SubCollectionPage/${hoveredLinkId}/${
                                      item._id
                                    }/${item.name.replaceAll("/", "@")}`
                                  )
                                }
                              >
                                {item.name}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </>
                ))}
                <hr />
                <li
                  className="flex justify-between w-max cursor-pointer"
                  onClick={() => nav("/Collection")}
                >
                  <span className=" text-md text-slate-500">
                    More Collections
                  </span>
                  <IoIosArrowForward
                    className=" text-md text-slate-500 align-self-center"
                    onClick={() => {
                      setOpenSubLinks((prev) => !prev);
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div
        className="modal fade text-black"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {/* CLOSE BUTTON */}
              <div className=" flex justify-end">
                <IoCloseCircleOutline
                  className=" text-[40px] text-[#bd9229] cursor-pointer"
                  id="close-button-icon"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              {/* MAIN HEADING */}
              <h3
                className="text-2xl font-semibold text-[#161616]"
                style={{ textAlign: "center" }}
              >
                {forgotPass
                  ? "Reset Password"
                  : `${type === "login" ? "Log In" : "Create New Account"}`}
              </h3>

              {/* FORM */}
              <div className=" flex flex-col gap-3 w-full px-3">
                {/* INPUTS FOR LOG IN */}
                {forgotPass ? (
                  <InputField
                    label={"Your Email"}
                    val={email}
                    onchng={(e) => setEmail(e.target.value)}
                    typ={"email"}
                  />
                ) : null}
                {forgotPass ? null : type === "login" ? (
                  <>
                    <InputField
                      label={"Email"}
                      val={email}
                      onchng={(e) => setEmail(e.target.value)}
                      typ={"email"}
                    />
                    <InputField
                      label={"Password"}
                      val={password}
                      onchng={(e) => setPassword(e.target.value)}
                      typ="password"
                    />
                    <p
                      className=" text-[#161616] text-right underline cursor-pointer"
                      onClick={() => setForgotPass(true)}
                    >
                      Forgot your password?
                    </p>
                  </>
                ) : (
                  <>
                    <InputField
                      label={"First Name"}
                      val={firstName}
                      onchng={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                      label={"Last Name"}
                      val={lastName}
                      onchng={(e) => setLastName(e.target.value)}
                    />
                    <InputField
                      label={"City"}
                      val={city}
                      onchng={(e) => setCity(e.target.value)}
                      selectEl={true}
                    />
                    {/* <InputField
                      label={"State/Province"}
                      val={state}
                      onchng={(e) => setState(e.target.value)}
                    /> */}
                    {/* <InputField
                      label={"City"}
                      val={city}
                      onchng={(e) => setCity(e.target.value)}
                    /> */}
                    <InputField
                      label={"Post Code"}
                      val={postcode}
                      onchng={(e) => setPostcode(e.target.value)}
                    />
                    <InputField
                      label={"Address"}
                      val={address}
                      onchng={(e) => setAddress(e.target.value)}
                    />
                    <InputField
                      typ="tel"
                      label={"Phone"}
                      val={phone}
                      onchng={(e) => setPhone(e.target.value)}
                    />
                    <InputField
                      typ="email"
                      label={"Email"}
                      val={emailRegister}
                      onchng={(e) => setEmailRegister(e.target.value)}
                    />
                    <InputField
                      typ="password"
                      label={"Password"}
                      val={passwordRegister}
                      onchng={(e) => setPasswordRegister(e.target.value)}
                    />
                  </>
                )}

                {/* BUTTON */}

                {forgotPass ? (
                  <button
                    className=" bg-primaryColor text-[#FFFFFF] py-3"
                    onClick={handlePasswordReset}
                  >
                    Reset Password
                  </button>
                ) : null}
                {forgotPass ? null : type === "login" ? (
                  <button
                    className=" bg-primaryColor text-[#FFFFFF] py-3"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    className=" bg-primaryColor text-[#FFFFFF] py-3"
                    aria-label="Close"
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        firstName &&
                        lastName &&
                        passwordRegister &&
                        emailRegister
                      )
                        handleSignup();
                      else toast.error("Please enter all the necessary info!");
                    }}
                  >
                    Sign Up
                  </button>
                )}
                <button
                  className=" bg-[#ACACAC] text-[#FFFFFF] py-3"
                  onClick={() => {
                    setForgotPass(false);
                    setType(type === "login" ? "signup" : "login");
                  }}
                >
                  {type === "login"
                    ? "Create An Account"
                    : "Already have account?"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Navbar;
