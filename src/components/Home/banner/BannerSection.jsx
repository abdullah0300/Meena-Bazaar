import React from "react";
import banner1 from "../../../assets/images/banner/banner-1.png";
import SecondaryBtn from "../../shared/SecondaryBtn";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[500px] ">
      <div className=" absolute md:w-[55%] w-full md:h-[500px] h-[440px] bg-[#53483F] flex flex-col md:justify-center justify-end gap-2 px-14 text-white md:mt-0 mt-16 md:pb-0 pb-12">
        <span className=" text-[#CD885F] xl:text-xl md:text-lg text-sm">
          Stunning Jewels
        </span>
        <h3 className="xl:text-6xl md:text-5xl text-2xl">For Precious Women</h3>
        <p className=" xl:text-lg md:text-base text-xs md:w-[96%] md:mb-0 mb-4">
          Mi Bibendum Neque Egestas Congue Quisque Egestas Diam. Ullamcorper Sit
          Amet Risus Nullam. Vehicula Ipsum A Arcu Cursus Vitae Congue Mauris.
        </p>
        <Link to={"/Collection"}>
          <SecondaryBtn />
        </Link>
      </div>
      <div className=" md:w-1/2 w-4/5 md:h-[400px] h-56 md:right-0 right-[10%] bannerImg flex ">
        <img src={banner1} alt="banner1" className="w-full" />
      </div>
    </section>
  );
};

export default BannerSection;
