import React from "react";
import axios from "axios";
import "./Failure.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";
import { useAuth } from "../../utils/auth";
import { apiUrl } from "../../data/env";

function Failure() {
  const [isLoading, setIsLoading] = React.useState(true);

  const nav = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const auth = useAuth();

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    const orderId = searchParams.get("orderId");

    if (token) {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);

          if (!orderId) {
            toast.error(
              "error cancelling payment (order id not present). Contact Support"
            );
            setTimeout(() => {
              nav("/");
            }, 1000);
          } else {
            handleCancelOrder(orderId);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleCancelOrder = (oId) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .patch(`${apiUrl}/api/v1/order/${oId}`, { status: "cancelled" }, config)
      .then((res) => {
        console.log(res.data);
        toast.success("Payment Cancelled!");
        setTimeout(() => {
          nav("/myOrders");
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response?.data?.message || "Couldn't update DB with new Payment!"
        );
        setTimeout(() => {
          nav("/");
        }, 3500);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="redirect-message">
          Click{" "}
          <a
            href
            onClick={(e) => {
              e.preventDefault();
              nav("/myOrders");
            }}
          >
            Here
          </a>{" "}
          if you are not redirected.
        </div>
      )}
      <Toaster />
    </>
  );
}

export default Failure;
