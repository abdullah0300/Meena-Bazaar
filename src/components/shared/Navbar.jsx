// import React, { useState } from 'react';
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { GoPerson } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch, IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import InputField from '../InputField';


const navLinks = [
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

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSubLinks, setOpenSubLinks] = useState(false);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);
  const [subLinks, setSubLinks] = useState();

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
    console.log(sub[0]?.sublinks);
    setSubLinks(sub[0]?.sublinks);
  }, [hoveredLinkId]);
  const [type, setType] = useState("login");

  return (
    <>
      {/* DESKTOP */}
      <header className="md:block hidden h-48 sticky top-0 bg-white z-50">
        <div className=" h-1/5 bg-primaryColor"></div>
        <nav
          className=" h-4/5 flex w-full px-8"
          style={{ background: "white" }}
        >
          <Link to={'/'}>
            <img src={logo} alt="logo" className=" h-[165px] w-[200px]" />
          </Link>
          <div className=" flex flex-col items-center justify-center gap-4 mt-[26px] w-full">
            <div className=" flex w-full  ">
              <div className=" w-4/5 flex justify-center">
                <div className=" flex  border rounded-3xl h-9  pl-4">
                  <input
                    placeholder="Search"
                    id="search"
                    className=" w-64 focus:outline-none rounded-3xl px-2"
                  />
                  <span className=" flex items-center rounded-e-3xl px-3 bg-primaryColor">
                    <IoSearch className=" text-white text-xl" />
                  </span>
                </div>
              </div>
              <div className=" w-1/5 flex gap-3 justify-center">
                <GoPerson className=" text-3xl text-primaryColor cursor-pointer" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                <div className="relative">
                  <span className=" absolute -right-2 -top-2 text-center text-white text-sm bg-primaryColor rounded-[50%] py-[1px] px-[3px] ">10</span>
                  <FiShoppingCart className=" text-3xl text-primaryColor" />
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
              {navLinks.map((item, i) => (
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
                >
                  {item.title}
                </li>
              ))}
              <Link to={'/Collection'}>
                <button
                  className={`px-3 py-2 rounded-md xl:text-lg md:text-base font-medium tracking-wide artileNameBtn transition-all duration-200 ease-in-out transform-gpu`}
                >
                  More Collection
                </button></Link>
            </ul>
          </div>
        </nav>
        {subLinks && (
          <div
            className={`${subLinks ? " opacity-[1]" : "opacity-[0]"
              } absolute z-50 bg-[#fff] w-full h-10 pt-[10px] pb-1 transition-opacity duration-200 ease-in-out transform-gpu`}
            onMouseLeave={handleMouseLeave}
          >
            <ul className=" flex justify-center items-center gap-16 ">
              {subLinks &&
                subLinks?.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className=" text-headingColor xl:text-sm md:text-[13px] cursor-pointer sublinksHover"
                    >
                      {item}
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
            Delivery Accross UK
          </span>
        </div>
        <nav className=" absolute z-50 w-full bg-white  flex justify-between items-center px-4">
          <div
            className={` ${isMobileOpen ? "hidden" : "flex"
              }  justify-between w-full py-3`}
          >
            <FiMenu
              className=" text-3xl text-primaryColor"
              onClick={() => setIsMobileOpen((prev) => !prev)}
            />
            <div className="relative">
              <span className=" absolute -right-2 -top-1 text-center text-white text-xs bg-primaryColor rounded-[50%] py-[1px] px-[3px] ">10</span>
              <FiShoppingCart className=" text-3xl text-primaryColor" />
            </div>
          </div>
          <div
            className={` ${isMobileOpen ? "flex" : "hidden"
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
                {navLinks.map((item, i) => (
                  <>
                    <li key={i} className="flex justify-between w-full cursor-pointer" onClick={() => {
                      setHoveredLinkId(item.id)
                      setOpenSubLinks((prev) => !prev)
                    }}>
                      <span className=" text-sm text-slate-500">
                        {item.title}
                      </span>
                      {
                        item.sublinks &&
                        <IoIosArrowForward className=" text-sm text-slate-500" />
                      }
                    </li>
                    {openSubLinks && subLinks && (item.id === hoveredLinkId) &&
                      <div className=" ml-5">
                        <ul className="flex flex-col justify-center items-start gap-[10px]">
                          {
                            subLinks && subLinks.map((item, i) => (
                              <li key={i} className="text-headingColor text-xs xl:text-sm md:text-[13px] cursor-pointer">{item}</li>
                            ))
                          }
                        </ul>
                      </div>}
                  </>
                ))}
              </ul>
            </div>
          </div>

        </nav>
      </header>
      <div className="modal fade text-black" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" >
            <div className="modal-body">
              {/* CLOSE BUTTON */}
              <div className=' flex justify-end'>
                <IoCloseCircleOutline className=' text-[40px] text-[#bd9229] cursor-pointer' data-bs-dismiss="modal" aria-label="Close" />
              </div>
              {/* MAIN HEADING */}
              <h3 className='text-2xl font-semibold text-[#161616]' style={{ textAlign: "center" }}>{type === "login" ? "Log In" : "Sign In"}</h3>

              {/* FORM */}
              <div className=' flex flex-col gap-3 w-full px-3'>

                {/* INPUTS FOR LOG IN */}
                {type === "login" ?
                  <>
                    <InputField label={"Email"} />
                    <InputField label={"Password"} />
                    <p className=' text-[#161616] text-right underline'>Forgot your password?</p>
                  </> :
                  <>
                    <InputField label={"Username"} />
                    <InputField label={"Email"} />
                    <InputField label={"Password"} />
                    <InputField label={"Confirm Password"} />
                  </>
                }

                {/* BUTTON */}

                <button className=' bg-primaryColor text-[#FFFFFF] py-3'>{type === "login" ? "Log In" : "Sign Up"}</button>
                <button className=' bg-[#ACACAC] text-[#FFFFFF] py-3' onClick={() => {
                  setType(type === "login" ? "signup" : "login")
                }}>{type === "login" ? "Create An Account" : "Log In"}</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
