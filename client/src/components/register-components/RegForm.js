import React, { useEffect, useState } from 'react';
// import DatePicker from 'react-date-picker';
// import DoB_Picker from './dob_logic';
import { Form, Button, OverlayTrigger, Col, Row } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import renderPWTooltip from './password_tooltip'; 
import { regUser, regFormSchema, firstValues } from './registrationLogic';
import {
    Formik,
    Field,
    ErrorMessage,
    FieldArray,
    FastField,
    useFormik
  } from 'formik';

export default function RegForm() {

    // const[form, setForm] = useState({});
    // const[errors, setErrors] = useState({});

    // //sets field for field with name passed
    // const setField = (field, value) => {
    //     setForm({
    //         ...form,
    //         [field]: value
    //     })

    //     if(errors[field]){
    //         // if there are errors, we set field to null, and call an error
    //         setErrors({
    //             ...errors,
    //             [field]: null
    //         })
    //     }

    // }

    // const [fullName, setFullName] = useState("");
    // const [username, setUsername] = useState("");
    // const [dob, setDOB] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [addLine1, setAddLine1] = useState("");
    // const [addLine2, setAddLine2] = useState("");
    // const [city, setCity] = useState("");
    // const [postcode, setPostcode] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <div className="register-form--wrapper">
            <Formik
                initialValues={firstValues}
                validationSchema={regFormSchema}
                onSubmit={console.log}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <Form noValidate className="register-form" onSubmit={handleSubmit}>
                        <Row className="reg-form--sub-wrapper">
                            <Form.Group as={Col} className="reg-form--left-side">
                                <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                    name="fullName"
                                    value={values.fullName}
                                    onChange={handleChange}
                                    isValid={touched.fullName && !errors.fullName}
                                    className="reg-form--input"
                                />
                                {errors.fullName ? 
                                    <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback> : null}
                                
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isValid={touched.username && !errors.username}
                                    className="reg-form--input"
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Email address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
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
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isValid={touched.password && !errors.password}
                                    className="reg-form--input"
                                    id="reg-form--password-input"
                                    />
                                </OverlayTrigger>
                                {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
                                <Form.Control
                                    type="text"
                                    placeholder="Date of Birth (DD-MM-YYYY)"
                                    name="dob"
                                    value={values.dob}
                                    onChange={handleChange}
                                    isValid={touched.dob && !errors.dob}
                                    className="reg-form--input"
                                    id="reg-form--dob"
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="reg-form--right-side">
                                <Form.Control
                                    type="text"
                                    placeholder="Address Line 1"
                                    name="addLine1"
                                    value={values.addLine1}
                                    onChange={handleChange}
                                    isValid={touched.addLine1 && !errors.addLine1}
                                    className="reg-form--input"
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Address Line 2"
                                    value={values.addLine2}
                                    onChange={handleChange}
                                    isValid={touched.addLine2 && !errors.addLine2}
                                    className="reg-form--input"
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isValid={touched.city && !errors.city}
                                    className="reg-form--input"
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Postcode"
                                    name="postcode"
                                    value={values.postcode}
                                    onChange={handleChange}
                                    isValid={touched.postcode && !errors.postcode}
                                    className="reg-form--input"
                                />
                                <Form.Control
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    isValid={touched.phone && !errors.phone}
                                    className="reg-form--input"
                                    id="reg-form--phonenumber-input"
                                />
                            </Form.Group>
                        </Row>
                            <Form.Check
                                required
                                name="terms"
                                onChange={handleChange}
                                isInvalid={!values.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                            >
                                <Form.Control.Feedback type="inv"></Form.Control.Feedback>
                            </Form.Check>
                        <Button id="reg-form--button" type="submit" onClick={console.log(values + " submitted")}> 
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>

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

//regUser call on line 173

// <div role="button" aria-label="close pop-up" class="popup-close-button" tabindex="0"><div>
// exit button