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
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/shared/Footer";
import SubCollectionProductPage from "./components/SubComponenets/SubCollectionProductPage";
// import axios from "axios";
// import { apiUrl } from "./data/env";

import { AuthProvider } from "./utils/auth";
import { RequireAuth } from "./utils/RequireAuth";
import MyOrder from "./components/SubComponenets/orderPage";
import SearchProductPage from "./components/SubComponenets/SearchProductPage";
import Success from "./components/SubComponenets/Success";
import Failure from "./components/SubComponenets/Failure";
import GuestCheckout from "./components/SubComponenets/GuestCheckout";

import AboutUs from "./components/static/About";
import Shipping from "./components/static/Shipping";
import ReturnPolicy from "./components/static/ReturnPolicy";
import ResetPassword from "./components/SubComponenets/ResetPassword";

const App = () => {
  const [products, setProducts] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [currentCategory, setCurrentCategory] = React.useState("");

  const [currentProductId, setCurrentProductId] = React.useState("");

  const [cart, setCart] = React.useState([]);
  console.log("app");

  React.useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/category?sort=priority`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));

    axios
      .get(`${apiUrl}/api/v1/filter?sort=priority`)
      .then((res) => setFilters(res.data.data))
      .catch((err) => console.error(err));

    axios
      .get(`${apiUrl}/api/v1/product`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollToTop>
          <Routes>
            <Route
              path="/resetPassword/:resetToken"
              element={<ResetPassword />}
            />
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
            <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} />
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
              path="/searchProductPage/:query"
              element={
                <SearchProductPage
                  products={products}
                  categories={categories}
                  filters={filters}
                />
              }
            />
            <Route
              path="SubCollectionPage/:categoryId/:filId/:filNameEnc"
              element={
                <SubCollectionProductPage
                  categories={categories}
                  filters={filters}
                  products={products}
                />
              }
            />
            <Route
              path="/productDetails/:currentProdId"
              element={
                <ProductDetails
                  currentProductId={currentProductId}
                  products={products}
                  categories={categories}
                  filters={filters}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/cartView"
              element={<CartPage categories={categories} filters={filters} />}
            />
            <Route
              path="/Checkout"
              element={
                <RequireAuth>
                  <Checkout categories={categories} filters={filters} />
                </RequireAuth>
              }
            />
            <Route
              path="/GuestCheckout"
              element={
                <GuestCheckout categories={categories} filters={filters} />
              }
            />
            <Route
              path="/ProfilePage"
              element={
                <RequireAuth>
                  <ProfilePage categories={categories} filters={filters} />
                </RequireAuth>
              }
            />
            <Route
              path="/myOrders"
              element={
                <RequireAuth>
                  <MyOrder categories={categories} filters={filters} />
                </RequireAuth>
              }
            />
            <Route
              path="/aboutus"
              element={<AboutUs categories={categories} filters={filters} />}
            />
            <Route
              path="/Shipping"
              element={<Shipping categories={categories} filters={filters} />}
            />
            <Route
              path="/ReturnPolicy"
              element={
                <ReturnPolicy categories={categories} filters={filters} />
              }
            />
          </Routes>
        </ScrollToTop>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default App;
