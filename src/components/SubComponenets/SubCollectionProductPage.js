import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../SubComponenets/ProductPage.css";
import Footer from "../shared/Footer.jsx";
import { Link, Outlet, useParams } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../shared/Navbar.jsx";
// import { apiUrl } from "../../data/env.js";

function SubCollectionProductPage({ products, categories, filters }) {
  const { categoryId, filId, filNameEnc } = useParams();
  const filName = filNameEnc.replaceAll("@", "/");
  const chosenOption = null;
  const [filProds, setFilProds] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryId
    );

    if (chosenOption === null) {
      const filteredProductsByFilter = filteredProducts.filter((product) => {
        const chosenFilter = product.chosenFilters.find(
          (filter) => filter.filterId === filId
        );
        return chosenFilter;
      });
      setFilProds(filteredProductsByFilter);
    } else {
      const filteredProductsByOption = filteredProducts.filter((product) => {
        const chosenFilter = product.chosenFilters.find(
          (filter) => filter.chosenOption === chosenOption
        );
        return chosenFilter && chosenFilter.chosenOption === chosenOption;
      });
      setFilProds(filteredProductsByOption);
    }
  }, [categoryId, filId, chosenOption, products]);

  return (
    <div class="mt-0 md:mt-52">
      <Navbar categories={categories} filters={filters} />
      <h2 class="fs-1 py-5 font-bold text-center text-[#BD9229]">
        Sub Collection ({filName})
      </h2>

      <Container
        fluid
        class="d-flex justify-content-center mb-5 align-items-center"
      >
        <Row xs={2} md={4}>
          {filProds?.map((item) => (
            <Col
              key={item._id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/ProductDetail/${item._id}`}>
                <div className=" flex flex-col justify-start items-center  md:w-full w-80 xl:px-4 md:px-3 px-3">
                  <div id="content" class="mx-3 my-4 sellingCard relative">
                    <img
                      src={item.coverImage?.url}
                      // src={
                      //   item.coverImage?.url?.replace(
                      //     "/product",
                      //     "/tr:ar-1-1,w-285.5/product"
                      //   ) || ""
                      // }
                      alt={item.name}
                      class="w-60 h-60"
                    />

                    <div className=" sellingCard-hover-div">
                      <p className="w-full text-center text-sm font-semibold uppercase">
                        View Details
                      </p>
                    </div>
                  </div>
                  <h2 className=" xl:text-xl text-base font-medium mx-auto text-center">
                    {item.name}
                  </h2>
                  <span className=" xl:text-base text-sm text-primaryColor">
                    {item.basePrice}
                  </span>
                </div>{" "}
                <br></br>{" "}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      <div class="flex justify-center items-center mb-5">
        <div class="pagination">
          <div>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#" className="active">
              «
            </a>
            <a href="#" className="active_end text-[#BD9229]">
              »
            </a>
          </div>
        </div>
      </div>

      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default SubCollectionProductPage;
