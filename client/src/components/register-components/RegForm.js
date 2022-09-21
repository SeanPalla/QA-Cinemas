import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-date-picker';
import DoB_Picker from './dob_logic';
import { Form, Button, OverlayTrigger } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import renderPWTooltip from './password_tooltip'; 
import regUser from './registrationLogic';

export default function RegForm() {

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [dob, setDOB] = useState(new Date("2000-01-01"));
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div className="container--register-form">
            <Form className="register-form">
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    className="freg-form--input"
                />
                <Form.Control
                    type="text"
                    placeholder="Surname"
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    className="reg-form--input"
                />
                {/* <label for="reg-form--birth-date" id="birthdate-label">Date of Birth</label> */}
                <DoB_Picker />
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
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className="reg-form--input"
                    id="reg-form--phonenumber-input"
                />
                <Button id="reg-form--button" onClick={regUser}>
                    Register
                </Button>
            </Form>
            <div className="reg-form--terms">
                <p>Terms & Conditions</p>
            </div>
        </div>
    );
}

// <div role="button" aria-label="close pop-up" class="popup-close-button" tabindex="0"><div>
// exit button