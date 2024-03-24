import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TbTruckDelivery } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../shared/Navbar";
import { useAuth } from "../../utils/auth";
import { apiUrl } from "../../data/env";

const shortMonthName = new Intl.DateTimeFormat("en-GB", { month: "short" })
  .format;

function MyOrder({ categories, filters }) {
  const auth = useAuth();

  const [allOrders, setAllOrders] = React.useState([]);

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    if (token && auth.user) {
      const id = toast.loading("Loading Data...");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(
          `${apiUrl}/api/v1/order?customerId=${auth.user._id}&sort=-updatedAt`,
          config
        )
        .then((res) => {
          setAllOrders(res.data.data);
          console.log(res.data.data);
          toast.success("Data Loaded!", { id });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.data?.message || "Could Not Load Data!", {
            id,
          });
        });
    } else toast.error("Not Authorized. Login & Retry!");
  }, []);

  return (
    <div class=" ">
      <Navbar categories={categories} filters={filters} />
      <h1 class="fs-2 font-bold py-5 text-center">My Orders</h1>
      <Container className="md:w-50 bg-light md:rounded-[50px]">
        <hr class="mx-4 mb-2 " />
        {allOrders?.map((order) => {
          return (
            <>
              <div className="md:d-flex mt-3">
                {/* <h2 class="fs-6 mb-2 font-bold py-2 pl-5 text-left d-flex gap-2">
                  <span>
                    <MdFormatListNumbered />
                  </span>
                  <span>
                    Order No:
                    <span className="text-[#59A0B8]"> {`${new Date(order.createdAt).getTime()}`.slice(5)}</span>
                  </span>
                </h2> */}

                {order.status === "cancelled" ? null : (
                  <h2 class="fs-6 mb-2 font-bold py-2 pl-5 text-left  d-flex gap-2">
                    <span>
                      <span className="mt-3"></span>
                      <span className=" mt-3">
                        Date: {new Date(order.createdAt).getDate()}{" "}
                        {shortMonthName(new Date(order.createdAt))} (
                        {order.delivery?.deliveryType || "Standard"} Delivery -{" "}
                        {order.delivery?.deliveryTime || "2 - 3 Days"})
                      </span>
                      <h2 class="fs-6 md:ml-[30rem] ml-[10rem] font-bold py-1 pl-2 text-left flex gap-2">
                        <span className="">
                          <TbTruckDelivery />
                        </span>{" "}
                        <span>
                          Status:{" "}
                          <span className="text-[#59A0B8]">
                            {" "}
                            '{order.status}'
                          </span>
                        </span>
                      </h2>
                      <div className="mt-2">
                        Order No:
                        <span className="text-[#59A0B8]">
                          {" "}
                          {`${new Date(order.createdAt).getTime()}`.slice(5)}
                        </span>
                      </div>
                    </span>
                  </h2>
                )}
              </div>
              <Row class="shadow-md mb-4 ">
                <ol type="1">
                  <li>
                    {order.commodities.map((commodity) => {
                      return (
                        <Col
                          key={commodity.uId}
                          class="d-flex justify-start items-start bg-light COL-1 mt-2 mb-2"
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "start",
                          }}
                        >
                          {" "}
                          <span className="mt-2">
                            <img
                              src={
                                commodity.image ||
                                "https://ik.imagekit.io/ql8u22y4o/products/product-65e4724a2d2972e0b9a855a0-1709470282925.jpeg"
                              }
                              alt={commodity.nm}
                              style={{ maxWidth: "none" }}
                              class="p-1 xs:m-0 md:px-12 md:py-3 w-[7rem]  md:w-[10rem] "
                            />{" "}
                          </span>
                          <span>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                              }}
                            >
                              <div class="px-2 py-3 mb-5">
                                <p class="text-[#000000] font-bold text-sm pb-1">
                                  {commodity.nm}
                                </p>

                                {commodity.variants?.map((vr) => (
                                  <p class="pb-2 font-bold ">
                                    {vr.variantType}:
                                    <span className="text-[#59A0B8]">
                                      {" "}
                                      {vr.chosenOption.optionValue}
                                    </span>
                                  </p>
                                ))}
                                <div class="flex justify-between items-center block md:hidden">
                                  <span>
                                    <p class=" py-3 md:hidden block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm pr-5">
                                      £
                                      {commodity.totalPrice ||
                                        (
                                          commodity.price * commodity.quantity
                                        ).toFixed(2)}
                                    </p>
                                  </span>
                                  <div
                                    class="flex  justify-between items-center"
                                    style={{ display: "flex" }}
                                  >
                                    <span class="">
                                      Qty :{" "}
                                      <span className="text-[#59A0B8]">
                                        {commodity.quantity}
                                      </span>
                                    </span>
                                    <span class="">
                                      {" "}
                                      {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="flex hidden md:block px-2 justify-between items-center"
                                style={{ display: "flex", marginTop: -54 }}
                              >
                                <span class="hidden mb-4 md:block">
                                  Quantity :
                                  <span className="text-[#59A0B8]">
                                    {" "}
                                    {commodity.quantity}
                                  </span>
                                </span>
                                <span class="hidden md:block">
                                  {" "}
                                  {/* <RiDeleteBin5Line class="text-xl mx-3" /> */}
                                </span>
                              </div>
                            </div>
                          </span>
                          <span>
                            <div class="mt-4 py-3 hidden md:block  text-[#59A0B8] md:pl-[6rem] md:pr-[3rem] text-[#000000] font-bold text-sm">
                              £
                              {commodity.totalPrice ||
                                (commodity.price * commodity.quantity).toFixed(
                                  2
                                )}
                            </div>
                          </span>
                        </Col>
                      );
                    })}
                  </li>
                </ol>
              </Row>
              <hr class="mx-4 mb-4" />
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default MyOrder;
