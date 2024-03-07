import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Collection from "./components/SubComponenets/Collections";
import ProductPage from "./components/SubComponenets/ProductPage";
import ProductDetails from "./components/SubComponenets/ProductDetail";
// import axios from "axios";
// import { apiUrl } from "./data/env";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Collection" element={<Collection />} />
        <Route path="ProductPage" element={<ProductPage />} />
        <Route path="ProductDetails" element={<ProductDetails />} />


      
      </Routes>
    </BrowserRouter>
  );
};
export default App;
