import React from 'react';
// import DatePicker from 'react-date-picker';
import DoB_Picker from './dob_logic';
import { Form, Button } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegForm() {
    // const [value, onChange] = React.useState(new Date());

    return (
        <div className="container--register-form">
            <Form className="register-form">
                <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="reg-form--input"
                />
                <Form.Control
                    type="text"
                    placeholder="Surname"
                    className="reg-form--input"
                />
                {/* <label for="reg-form--birth-date" id="birthdate-label">Date of Birth</label> */}
                <DoB_Picker />
                <Form.Control
                    type="text"
                    placeholder="Email address"
                    className="reg-form--input"
                />
                <Form.Control
                    type="text"
                    placeholder="Confirm Email address"
                    className="reg-form--input"
                />
                <Form.Control 
                    type="password"
                    placeholder="Password"
                    className="reg-form--input"
                    id="reg-form--password-input"
                />
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="reg-form--input"
                    id="reg-form--confirm-password"
                />
                {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
                <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    className="reg-form--input"
                    id="reg-form--phonenumber-input"
                />
                <Button className="form control" id="reg-form--button">
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