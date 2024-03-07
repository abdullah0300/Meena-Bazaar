import React from "react";
import carousel1 from "../../../assets/images/carousel/carousel-1.png";
import carousel2 from "../../../assets/images/carousel/carousel-2.png";
import MainBtn from "../../shared/MainBtn";

const HeroSection = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide md:h-screen h-[95vh]"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators gap-2">
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="0"
          className="active rounded-[50%]"
          aria-current="true"
          aria-label="Slide 1"
          style={{ width: "10px", height: "10px" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className=" rounded-[50%]"
          style={{ width: "10px", height: "10px" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="rounded-[50%]"
          style={{ width: "10px", height: "10px" }}
        ></button>
      </div>
      <div className="carousel-inner h-full">
        <div className="carousel-item active relative h-full">
          <img
            src={carousel1}
            className=" absolute h-full object-cover"
            alt="carousel1"
          />
          <div className=" relative w-full flex flex-col gap-4 justify-center items-center text-white h-full text-center md:px-0 px-4">
            <h2 className=" md:text-5xl text-3xl font-medium leading-snug">
              Happiness comes in the boxof Jewellery
            </h2>
            <p className=" md:text-xl text-base font-extralight">
              Our full range of Asian ,Indian and Pakistani Bridal Jewellery
            </p>
            <MainBtn />
          </div>
        </div>
        <div className="carousel-item relative h-full">
          <img src={carousel2} className=" absolute h-full object-cover" alt="carousel1" />
          <div className="  relative w-full flex flex-col gap-4 justify-center items-center text-white h-full text-center md:px-0 px-4">
            <h2 className="md:text-5xl text-3xl font-medium">
              Happiness comes in the boxof Jewellery
            </h2>
            <p className="md:text-xl text-base font-extralight">
              Our full range of Asian ,Indian and Pakistani Bridal Jewellery
            </p>
            <MainBtn />
          </div>
        </div>
        <div className="carousel-item relative h-full">
          <img src={carousel1} className=" absolute h-full object-cover" alt="carousel1" />
          <div className="  relative w-full flex flex-col gap-4 justify-center items-center text-white h-full text-center md:px-0 px-4">
            <h2 className="md:text-5xl text-3xl font-medium">
              Happiness comes in the boxof Jewellery
            </h2>
            <p className="md:text-xl text-base font-extralight">
              Our full range of Asian ,Indian and Pakistani Bridal Jewellery
            </p>
            <MainBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
