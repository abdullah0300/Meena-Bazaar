import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Form } from "react-bootstrap";
import { countriesArray } from "../../utils/data";
import axios from "axios";
import { apiUrl } from "../../data/env";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function ProfilePage({ filters, categories }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const [phone, setPhone] = React.useState(auth.user?.phone || "");
  const [city, setCity] = React.useState(auth.user?.city || "");
  const [country, setCountry] = React.useState(auth.user?.country || "");
  const [state, setState] = React.useState(auth.user?.state || "");
  const [postcode, setPostcode] = React.useState(auth.user?.postcode || "");
  const [address, setAddress] = React.useState(auth.user?.address || "");

  const [currPass, setCurrPass] = React.useState("");
  const [newPass, setNewPass] = React.useState("");

  const handleChangeDetails = () => {
    const payload = {};
    if (phone) payload.phone = phone;
    if (city) payload.city = city;
    if (city) payload.country = country;
    if (city) payload.state = state;
    if (postcode) payload.postcode = postcode;
    if (address) payload.address = address;

    const id = toast.loading("Updating Info...");

    const config = {
      headers: { Authorization: `Bearer ${auth.token}` },
    };

    axios
      .patch(`${apiUrl}/api/v1/customer/updateMe`, payload, config)
      .then((res) => {
        console.log(res.data);
        toast.success("Updated Info Successfully", {
          id,
        });
        auth.login(auth.token, res.data.user);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.data?.message || "Could Not Update Info", {
          id,
        });
      });
  };

  const handleChangePassword = () => {
    const payload = {
      currentPassword: currPass,
      newPassword: newPass,
      confirmNewPassword: newPass,
    };

    const id = toast.loading("Updating Password...");

    const config = {
      headers: { Authorization: `Bearer ${auth.token}` },
    };

    axios
      .patch(`${apiUrl}/api/v1/customer/updatePassword`, payload, config)
      .then((res) => {
        // console.log(res.data);
        toast.success("Updated Password Successfully", {
          id,
        });
        setCurrPass("");
        setNewPass("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(
          err.response?.data?.message || "Could Not Update Password",
          {
            id,
          }
        );
      });
  };

  return (
    <div class="mt-0 md:mt-10 ">
      <Navbar categories={categories} filters={filters} />
      <Container className="mt-5 flex lg:justify-center mx-auto ml-72">
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-between">
              <p className="mt-3  font-bold my-3 text-xl">My Profile</p>
              <Button
                className="border-0 rounded-full bg-[#bd9229] hover:bg-[#0b428b]  text-white px-6 py-1 font-semibold text-sm"
                onClick={() => navigate("/myOrders")}
              >
                My Orders
              </Button>
            </div>
            <Box
              className="mt- ml-2"
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Full Name"
                  disabled
                  defaultValue={
                    `${auth.user?.firstName} ${auth.user?.lastName}` || "N/A"
                  }
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Email"
                  defaultValue={auth.user?.email || "N/A"}
                  disabled
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Phone Number"
                  defaultValue={auth.user?.phone || "N/A"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <Form.Group
                  as={Col}
                  controlId=""
                  style={{ width: "381px", marginLeft: "8px" }}
                >
                  {/* <Form.Label>City</Form.Label> */}
                  <Form.Select
                    defaultValue={auth.user?.country || "Select Country"}
                    onChange={(e) => setCountry(e.target.value)}
                    value={country || "Select Country"}
                  >
                    <option hidden selected>
                      Select Country
                    </option>
                    {countriesArray?.map((cntry) => (
                      <option key={cntry}>{cntry}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="City"
                  defaultValue={auth.user?.city || "N/A"}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="State/Province"
                  defaultValue={auth.user?.state || "N/A"}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Postcode"
                  defaultValue={auth.user?.postcode || "Choose Postcode"}
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  style={{ width: "381px" }}
                />
              </div>
              <div>
                <TextField
                  id="standard-read-only-input"
                  label="Address"
                  defaultValue={auth.user?.address || "Choose Address"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ width: "381px" }}
                />
              </div>
              <div className="d-flex justify-between">
                <Button
                  className="mt-6 border-0 rounded-full bg-[#bd9229] hover:bg-[#0b428b]  text-white px-14 py-2 font-semibold text-sm"
                  onClick={handleChangeDetails}
                >
                  Save
                </Button>
                <Button
                  className="mt-6 border-0 rounded-full bg-[#cc3300] hover:bg-[#0b428b]  text-white px-14 py-2 font-semibold text-sm"
                  onClick={() => {
                    auth.logout();
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </div>

              {/* Password Part */}
              <div>
                <p className="font-bold text-xl mt-4">Password</p>
                <div className="mt-8">
                  <TextField
                    id="outlined-disabled"
                    label="Current Password"
                    placeholder="........."
                    value={currPass}
                    onChange={(e) => setCurrPass(e.target.value)}
                    style={{ width: "381px", height: "10px" }}
                  />
                </div>

                <div className="mt-12">
                  <TextField
                    id="outlined-disabled"
                    label="New Password"
                    placeholder="........."
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    style={{ width: "381px", height: "10px" }}
                  />
                </div>
              </div>
              <Button
                className="mt-16 border-0 mb-5 rounded-full bg-[#bd9229]  hover:bg-[#0b428b] text-white px-14 py-2 font-semibold text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  if (currPass && newPass) handleChangePassword();
                  else toast.error("Enter all info!");
                }}
              >
                Save
              </Button>
            </Box>
          </Col>
        </Row>
      </Container>

      <Footer categories={categories} />
      <Toaster />
    </div>
  );
}

export default ProfilePage;
