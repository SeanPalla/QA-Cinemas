import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-date-picker';
// import DoB_Picker from './dob_logic';
import { Form, Button, OverlayTrigger, Col, Row } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import renderPWTooltip from './password_tooltip'; 
import regUser from './registrationLogic';
import * as yup from 'yup';
import { Formik } from 'formik';

export default function RegForm() {

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [dob, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [addLine1, setAddLine1] = useState("");
    const [addLine2, setAddLine2] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    return (
        <div className="register-form--wrapper">
            <Form className="register-form">
                <Row className="reg-form--sub-wrapper">
                    <Form.Group as={Col} className="reg-form--left-side">
                        <Form.Control
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            className="reg-form--input"
                        />
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="reg-form--input"
                        />
                        {/* <label for="reg-form--birth-date" id="birthdate-label">Date of Birth</label> */}
                        <Form.Control
                            type="text"
                            placeholder="Email address"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="reg-form--input"
                        />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderPWTooltip}
                            >
                            <Form.Control 
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="reg-form--input"
                            id="reg-form--password-input"
                            />
                        </OverlayTrigger>
                        {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
                        <Form.Control
                            type="text"
                            placeholder="Date of Birth (DD-MM-YYYY)"
                            value={dob}
                            onChange={(event) => setDOB(event.target.value)}
                            className="reg-form--input"
                        />
                    </Form.Group>
                    <Form.Group as={Col} className="reg-form--right-side">
                        <Form.Control
                            type="text"
                            placeholder="Address Line 1"
                            value={addLine1}
                            onChange={(event) => setAddLine1(event.target.value)}
                            className="reg-form--input"
                        />
                        <Form.Control
                            type="text"
                            placeholder="Address Line 2"
                            value={addLine2}
                            onChange={(event) => setAddLine2(event.target.value)}
                            className="reg-form--input"
                        />
                        <Form.Control
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            className="reg-form--input"
                        />
                        <Form.Control
                            type="text"
                            placeholder="Postcode"
                            value={postcode}
                            onChange={(event) => setPostcode(event.target.value)}
                            className="reg-form--input"
                        />
                        <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            className="reg-form--input"
                            id="reg-form--phonenumber-input"
                        />
                    </Form.Group>
                </Row>
                <Button id="reg-form--button" onClick={regUser}>
                    Register
                </Button>
            </Form>

            <p className="register--already-account">
                Already have an account?
                <br/>
                <a className="register--login-link" href="/Login">Log in</a>
            </p>

            <div className="reg-form--terms">
                <p>Terms & Conditions</p>
            </div>
        </div>
    );
}

// <div role="button" aria-label="close pop-up" class="popup-close-button" tabindex="0"><div>
// exit button