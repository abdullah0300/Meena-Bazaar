import React from "react";
import axios from "axios";
import "./Failure.css";
import Loader from "./Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiUrl } from "../../data/env";
import { useAuth } from "../../utils/auth";

function Success() {
  const [isLoading, setIsLoading] = React.useState(true);

  const nav = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const auth = useAuth();

  const token = localStorage.getItem("token");

  React.useEffect(() => {
    const orderId = searchParams.get("orderId");

    if (token) {
      // const id = toast.loading("Verifying...");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios
        .get(`${apiUrl}/api/v1/customer/verifyToken`, config)
        .then((res) => {
          console.log(res.data);
          auth.login(token, res.data.data);

          if (!orderId) {
            toast.error("error verifying payment (order id not present)!");
            setTimeout(() => {
              nav("/");
            }, 1000);
          } else {
            handleUpdateOrder(orderId);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
          toast.error("Could not verify user!");
        });
    } else {
      toast.error("Could not verify login. Contact Support!");
      setIsLoading(false);
    }
  }, []);

  const handleUpdateOrder = (oId) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .patch(`${apiUrl}/api/v1/order/${oId}`, { status: "paid" }, config)
      .then((res) => {
        toast.success("Payment & Verification Successful");
        setTimeout(() => {
          nav("/myOrders");
        }, 2500);
      })
      .catch((err) => {
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

export default Success;
