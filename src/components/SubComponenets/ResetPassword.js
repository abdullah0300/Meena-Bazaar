import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { apiUrl } from "../../data/env";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../../utils/auth";

function ResetPassword() {
  const { resetToken } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const [pass, setPass] = useState("");

  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm((preve) => !preve);
  };
  const [passConfirm, setPassConfirm] = useState("");

  const auth = useAuth();

  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (pass !== passConfirm) {
      toast.error("Passwords do not match!");
      return;
    }

    const id = toast.loading("Changing Password...");

    axios
      .patch(`${apiUrl}/api/v1/customer/resetPassword/${resetToken}`, {
        password: pass,
        passwordConfirm: passConfirm,
      })
      .then((res) => {
        // console.log(res.data);
        toast.success("Password changed successfully", { id });
        auth.login(res.data.token, res.data.data);

        setTimeout(() => {
          navigate("/");
        }, 750);
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response?.data?.message || "Passsword could not be changed!",
          { id }
        );
      });
  };

  return (
    <div class="mt-0 ">
      {/* About Start */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 bg-[#bd9229] try p-4 h-screen hidden md:block">
            <Link to="/">
              {" "}
              <img
                src="https://ik.imagekit.io/mctozv7td/Meena%20Bazar%20Final%20Logo%20png-02.png?updatedAt=1709073934723"
                alt=""
                class="h-[75px] w-[75px] bg-white rounded-pill"
              />
            </Link>
            <br></br>
            <h3 class="text-white text-2xl font-semibold text-wrap  hidden md:block w-50 ">
              Meena Bazaar <br></br>{" "}
              <span style={{ color: "white", fontSize: "34px" }}>
                Reset User Password
              </span>{" "}
              !
            </h3>
          </div>

          <div className="col-lg-6 rounded-[24px] lg:ml-[-90px] p-2 md:pt-5 md:pb-5 bg-white  z-0 relative flex flex-col justify-center item-center">
            {/* <img
              src="https://ik.imagekit.io/p2slevyg1/41098deb-a489-4df6-acd5-55e3bb05f5cb-removebg-preview.png?updatedAt=1705433981054"
              alt=""
              class="w-[350px] h-[450px] lg:ml-[300px] z-[1000] absolute  mt-44 bottom-5 right-[90%] hidden md:block"
              style={{ zIndex: 1000 }}
            /> */}
            <h3 class=" text-3xl font-bold text-center pt-5 pl-2 md:pl-[5rem] pb-4">
              New Password
            </h3>
            {/* <div class="flex justify-center items-center pl-2 md:pl-[5rem] cursor-pointer">
              <p class="flex justify-center items-center border p-2 mx-2 rounded-md">
                <FcGoogle class="mx-2 text-2xl" />
                Login with Google
              </p>
              <p class="flex justify-center items-center border p-2 mx-2 rounded-md">
                <FaFacebookF class="mx-2 text-xl text-blue-800" />
                Login with Facebook
              </p>
            </div> */}
            {/* <p class="flex justify-center items-center pt-3 pb-3 pl-2 md:pl-[5rem]">
              <FiMinus />
              OR
              <FiMinus />
            </p> */}
            <div class="pl-2 md:pl-[13%]">
              <Form>
                <Form.Group className="mb-3 d-flex" controlId="">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="New Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <span
                    className="flex text-xl cursor-pointer"
                    onClick={handleShowPassword}
                    style={{
                      width: "5%",
                      marginTop: "9px",
                      marginLeft: "9px",
                    }}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </Form.Group>

                <Form.Group className="mb-3 d-flex" controlId="">
                  <Form.Control
                    type={showPasswordConfirm ? "text" : "password"}
                    placeholder="confirm New Password"
                    value={passConfirm}
                    onChange={(e) => setPassConfirm(e.target.value)}
                  />
                  <span
                    className="flex text-xl cursor-pointer"
                    onClick={handleShowPasswordConfirm}
                    style={{
                      width: "5%",
                      marginTop: "9px",
                      marginLeft: "9px",
                    }}
                  >
                    {showPasswordConfirm ? <BiShow /> : <BiHide />}
                  </span>
                </Form.Group>

                {/* <div className="flex mb-3 border rounded-md px-2 py-2 w-full  bg-nonfocus-within:outline-gray-700">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border-none outline-none "
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                  <span
                    className="flex text-xl cursor-pointer"
                    style={{
                      right: 0,
                    }}
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div> */}

                <div class="flex flex-col justify-center items-center mt-5">
                  {/* <Link to="/"> */}
                  <button
                    onClick={handleChangePassword}
                    class="bg-[#bd9229] text-white px-5  py-2  rounded-[24px]"
                  >
                    Change Password
                  </button>
                  {/* </Link> */}
                  {/* <p class="text-[#000000] px-1 p-2">
                    Create an account
                    <Link to="/signup">
                      <span class="text-[#8dc9cf] px-1 font-bold underline underline-offset-2">
                        Sign Up
                      </span>
                    </Link>
                  </p> */}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default ResetPassword;
