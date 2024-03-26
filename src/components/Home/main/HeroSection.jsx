import React from "react";

const HeroSection = () => {

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide w-full"
      data-bs-ride="carousel"
      data-bs-interval="2000"
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
      <div className="carousel-inner md:mt-0 w-full">
        <div className="carousel-item active relative">
          <img
            src="https://ik.imagekit.io/mctozv7td/meena/1.jpg?updatedAt=1711471154752"
            className="w-full h-auto object-contain md:mt-0.5 mt-[5rem]"
            alt="carousel1"
          />
        </div>
        <div className="carousel-item relative">
          <img
            src="https://ik.imagekit.io/mctozv7td/meena/3.jpg?updatedAt=1711471154776"
            className="w-full h-auto object-contain  md:mt-0.5 mt-[5rem]"
            alt="carousel2"
          />
        </div>
        <div className="carousel-item relative">
          <img
            src="https://ik.imagekit.io/mctozv7td/meena/2.jpg?updatedAt=1711471154963"
            className="w-full h-auto object-contain  md:mt-0.5 mt-[5rem]"
            alt="carousel3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
