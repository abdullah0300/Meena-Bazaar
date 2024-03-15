import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Collection from "./components/SubComponenets/Collections";
import ProductPage from "./components/SubComponenets/ProductPage";
import ProductDetails from "./components/SubComponenets/ProductDetail";
import CartPage from "./components/SubComponenets/CartPage";
import Checkout from "./components/SubComponenets/Checkout";
import ProfilePage from "./components/SubComponenets/ProfilePage";
import axios from "axios";
import { apiUrl } from "./data/env";
// import axios from "axios";
// import { apiUrl } from "./data/env";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    const cats = axios
      .get(`${apiUrl}/api/v1/category?sort=priority`)
      .then((res) => {
        setCategories(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

    const fils = axios
      .get(`${apiUrl}/api/v1/filter?sort=priority`)
      .then((res) => {
        setFilters(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });

    const products = axios
      .get(`${apiUrl}/api/v1/product?sort=priority`)
      .then((res) => {
        setProducts(res.data.data);
        return res.data.data;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categories={categories}
              filters={filters}
              products={products}
            />
          }
        />
        <Route
          path="Collection"
          element={<Collection categories={categories} filters={filters} />}
        />
        <Route
          path="ProductPage/:categoryId/:currentCategoryName"
          element={
            <ProductPage
              categories={categories}
              filters={filters}
              products={products}
            />
          }
        />
        <Route
          path="ProductDetail"
          element={<ProductDetails categories={categories} filters={filters} />}
        />
        <Route
          path="CartPage"
          element={<CartPage categories={categories} filters={filters} />}
        />
        <Route
          path="Checkout"
          element={<Checkout categories={categories} filters={filters} />}
        />
        <Route
          path="ProfilePage"
          element={<ProfilePage categories={categories} filters={filters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
