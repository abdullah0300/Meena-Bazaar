import React from "react";
import HeroSection from "./main/HeroSection";
import Navbar from "../../components/shared/Navbar";
import BannerSection from "../../components/Home/banner/BannerSection";
import CollectionSection from "../../components/Home/Collections/CollectionSection";
import BestSellingSection from "../../components/Home/BestSellings/BestSellingSection";
import BlogSection from "../../components/Home/blogs/BlogSection";
import Footer from "../../components/shared/Footer";
import ArticleSection from "../../components/Home/artictles/ArticleSection";
import ShopSection from "../../components/Home/shop/ShopSection";
import TestinomialSection from "../../components/Home/Testinomials/TestinomialSection";
import WhatsAppButton from "../shared/Whatsapp";

const Home = ({ categories, filters, products }) => {
  return (
    <>
      <Navbar categories={categories} filters={filters} />
      <HeroSection />
      <CollectionSection categories={categories} filters={filters} />
      <BestSellingSection products={products} />
      <BannerSection />
      {/* <TestinomialSection /> */}
      <ArticleSection categories={categories} products={products} />
      <ShopSection />
      <BlogSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
