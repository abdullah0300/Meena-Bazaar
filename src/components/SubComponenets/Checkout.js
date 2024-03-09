import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { values } from "idb-keyval";
import { useAuth } from "../../utils/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../data/env";
import { cityArray } from "../../utils/data";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

function Checkout({ categories, filters }) {
    const [cartArr, setCartArr] = React.useState([]);
    const nav = useNavigate();
    const auth = { user: { firstName: '', lastName: '', email: '', phone: '', city: '', postcode: '', address: '' } };

    function getSavedCartProducts() {
        values()
            .then((res) => {
                setCartArr(res);
                console.log(res);
            })
            .catch((err) => console.error(err));
    }

    React.useEffect(() => {
        getSavedCartProducts();
    }, []);

    const userFirstName = auth?.user?.firstName || "";
    const userLastName = auth?.user?.lastName || "";
    const userEmail = auth?.user?.email || "";
    const userPhone = auth?.user?.phone || "";
    const userCity = auth?.user?.city || "";
    const userPostcode = auth?.user?.postcode || "";
    const userAddress = auth?.user?.address || "";

    const handleCheckout = () => {
        const id = toast.loading("Redirecting to Payment Link...");
        values()
            .then((res) => {
                const config = {
                    headers: { Authorization: `Bearer ${auth.token}` },
                };

                axios
                    .post(`${apiUrl}/api/v1/order`, { commodities: res }, config)
                    .then((res) => {
                        console.log(res.data);
                        toast.success("Created Link Successfully", { id });
                        setTimeout(() => {
                            window.location.replace(res.data.redirectUrl);
                        }, 1000);
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error(
                            err.response?.data?.message || "Could Not Generate Link",
                            { id }
                        );
                    });
            })
            .catch((err) => {
                toast.error("Error occurred getting cart. Delete cart & order again");
                console.log(err);
            });
    };

    // Modal states
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [phone, setPhone] = React.useState(userPhone);
    const [city, setCity] = React.useState(userCity);
    const [postcode, setPostcode] = React.useState(userPostcode);
    const [address, setAddress] = React.useState(userAddress);

    const handleChangeDetails = () => {
        const payload = {
            phone,
            city,
            postcode,
            address,
        };

        const id = toast.loading("Updating Info...");

        const config = {
            headers: { Authorization: `Bearer ${auth.token}` },
        };

        axios
            .patch(`${apiUrl}/api/v1/customer/updateMe`, payload, config)
            .then((res) => {
                console.log(res.data);
                toast.success("Updated Info Successfully", { id });

                auth.login(auth.token, res.data.user);

                setPostcode(res.data.user?.postcode);
                setCity(res.data.user?.city);
                setAddress(res.data.user?.address);
                setPhone(res.data.user?.phone);

                handleClose();
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response?.data?.message || "Could Not Update Info", {
                    id,
                });
            });
    };

    return (
        <div>
            < Navbar />
            <div class="bg-[#F6F5F0] md:bg-[#F6F5F0] mt-0 md:mt-4">
                <h2 class="text-3xl  font-bold text-[#bd9229] text-center py-5">Checkout</h2>
                <Container fluid>
                    <Row>
                        <Col sm={12} md={8}>
                            <div class="bg-[#FFFFFF] rounded-lg md:mx-5 my-3">
                                <div class="p-5">
                                    <div class="mx-4 p-1">
                                        <div class="flex items-center">
                                            <div class="flex items-center text-[#bd9229] relative">
                                                <FaCircle />

                                                <div class="absolute top-0  text-center mt-10 -ml-[10px] text-xs font-medium  text-gray-500">
                                                    Cart
                                                </div>
                                            </div>
                                            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#bd9229]"></div>
                                            <div class="flex items-center  relative">
                                                <FaRegCircle class="relative text-[#bd9229] text-lg" />
                                                <FaCircle class="z-5 absolute text-[#bd9229] px-1" />

                                                <div class="absolute top-0  text-center mt-10 -ml-[13px] text-xs font-medium  text-gray-500">
                                                    Information
                                                </div>
                                            </div>
                                            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                            <div class="flex items-center text-gray-500 relative">
                                                <FaRegCircle />
                                                <div class="absolute top-0 -ml-[12px] text-center mt-10 text-xs font-medium  text-gray-500">
                                                    Payment
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-8 p-4">
                                        <div>
                                            <Form sm={12}>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="" >
                                                        <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                            First Name
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            disabled
                                                            defaultValue={auth.user.firstName}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                            Last Name
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            disabled
                                                            defaultValue={auth.user.lastName}
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="" sm={6}>
                                                        <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                            Email
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            disabled
                                                            defaultValue={auth.user.email}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="" sm={6}>
                                                        <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                            Phone
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            disabled
                                                            placeholder={phone || "N/A"}
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                            City
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            disabled
                                                            placeholder={city || "N/A"}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group as={Col} controlId="">
                                                        <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                            Postcode
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            disabled
                                                            placeholder={postcode || "N/A"}
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formGridAddress1"
                                                >
                                                    <Form.Label class="text-[#bd9229] font-semibold py-2">
                                                        Address
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        disabled
                                                        placeholder={address || "N/A"}
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3 text-black"
                                                    class="text-[#707070]"
                                                    id="formGridCheckbox"
                                                >

                                                </Form.Group>

                                                <div class="flex flex-col justify-center items-center ">
                                                    <button

                                                        class=" bg-[#bd9229] text-white mt-5 px-5  py-2 "
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (
                                                                auth.user.phone &&
                                                                auth.user.address &&
                                                                auth.user.city &&
                                                                auth.user.postcode
                                                            )
                                                                handleCheckout();
                                                            else {
                                                                toast.error("Complete your information");
                                                                handleShow();
                                                            }
                                                        }}
                                                    >
                                                        Proceed to Payment
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div class="bg-[#FFFFFF] rounded-lg mx-5 my-3">
                                {cartArr?.map((crt, i) => {
                                    return (
                                        <div key={i} class="flex px-4 py-5 justify-between">
                                            <img src={crt.image} alt="" class="w-[70px] h-[70px]" />
                                            <p class="text-[#707070]" style={{ fontSize: 12 }}>
                                                {crt.nm}
                                            </p>

                                            {/* <div class="border flex  w-16 h-5 border-black "> */}
                                            <p class="text-[#bd9229] ml-2">
                                                Qty.&nbsp;{crt.quantity}
                                            </p>
                                            {/* </div> */}
                                        </div>
                                    );
                                })}

                                <hr class="mx-4" />
                                <div class="px-4 pt-4 flex justify-between">
                                    <p>Subtotal</p>
                                    <p>
                                        £
                                        {cartArr
                                            .map((c) => c.price * c.quantity)
                                            .reduce((p, c) => p + c, 0)
                                            .toFixed(2)}
                                    </p>
                                </div>
                                <div class="px-4 pt-3 flex justify-between">
                                    <p>Shipping</p>
                                    <p>£{0}</p>
                                </div>
                                <div class="px-4 pt-3 pb-2 flex justify-between">
                                    <p>Tax</p>
                                    <p>-</p>{" "}
                                </div>
                                <hr class="mx-4" />
                                <div class="px-4 flex justify-between pt-3 pb-4">
                                    <h2 class="text-xl font-bold">Estimated Total</h2>
                                    <h2 class="text-xl text-[#bd9229] font-bold">
                                        £
                                        {cartArr
                                            .map((c) => c.price * c.quantity)
                                            .reduce((p, c) => p + c, 0)
                                            .toFixed(2)}
                                    </h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer categories={categories} />
            </div>
            <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Body>
                    <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
                        <Form.Label class="font-semibold w-20">Phone:</Form.Label>
                        <Form.Control
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-70"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
                        <Form.Label class="font-semibold w-20">Address:</Form.Label>
                        <Form.Control
                            placeholder="Address Line"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-70"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
                        <Form.Label class="font-semibold w-20">Postcode:</Form.Label>
                        <Form.Control
                            placeholder="Postcode"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            className="w-70"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex gap-2 justify-center items-center">
                        <Form.Label class="font-semibold w-20">City:</Form.Label>
                        <Form.Select
                            placeholder="City"
                            defaultValue={auth.user.city || "Select City"}
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            className="w-70"
                        >
                            <option selected hidden>
                                Select City
                            </option>
                            {cityArray?.map((city) => (
                                <option key={city}>{city}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            if (phone && city && postcode && address) handleChangeDetails();
                            else toast.error("Fill all info!");
                        }}
                        variant="info"
                        class="rounded-1 py-2 px-2 bg-[#1B94A0] text-white hover:bg-[#1B94A0] hover:text-white"
                    >
                        Save & Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toaster />
        </div>
    );
}

export default Checkout;
