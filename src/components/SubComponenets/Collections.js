import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../shared/Footer.jsx";
import { data } from "../../data/Cdata.js";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar.jsx";

function Collection({ categories, filters }) {
  return (
    <div className="mt-0 md:mt-64 ">
      <Navbar categories={categories} filters={filters} />
      <h1 className="fs-1 font-bold mb-5 text-center text-[#BD9229] mt-4">
        Collections
      </h1>

      <Container
        fluid
        className="d-flex justify-content-center mb-5 align-items-center"
      >
        <Row xs={2} md={3}>
          {categories?.map((item, i) => {
            let url = item.image.url;
            // if (item.image.url)
            //   url = item.image.url.replace(
            //     "/category",
            //     "/tr:ar-1-1,w-285.5/category"
            //   );
            // else if (item.image)
            //   url = item.image.replace(
            //     "/category",
            //     "/tr:ar-1-1,w-285.5/category"
            //   );
            // else url = "";
            return (
              <Col
                key={item._id}
                className="flex justify-center items-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div id="content" className="">
                  <Link to={`/ProductPage`}>
                    <div className=" relative xl:h-[400px] md:h-[320px] h-48  justify-center items-center group transition-all duration-300 ease-in-out">
                      <img
                        className="absolute h-full w-full relative object-cover transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-150"
                        src={url}
                        alt={item.name}
                        width="330px"
                        height="270px"
                      />
                      {/* <button className=" px-4 py-[15px] bg-white text-black text-lg opacity-[0] transform translate-y-8 transition duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-[-115px] group-hover:translate-x-[85px]">
                                                View All
                                            </button> */}
                      <h2 className="absolute bottom-0 left-0 right-0 text-center xl:text-3xl md:text-2xl tracking-wide pb-4 text-white transition-all duration-300 ease-in-out ">
                        {item.name}
                      </h2>
                    </div>
                    <br></br>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Footer categories={categories} />
    </div>
  );
}

export default Collection;
