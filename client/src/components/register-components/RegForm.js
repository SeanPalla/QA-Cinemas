import React from 'react';
import { Form, Button, OverlayTrigger, Col, Row } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import renderPWTooltip from './password_tooltip'; 
import { regUser, regFormSchema, firstValues } from './registrationLogic';
import { Formik, ErrorMessage } from 'formik';
import Pdf from "../Screens/ScreensExtras/QA-Cinema.pdf";
import ErrorText from './ErrorText';
import { ToastContainer } from "react-toastify";

export default function RegForm() {

    return (
        <div className="register-form--wrapper">
            <Formik
                initialValues={firstValues}
                validationSchema={regFormSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    values,
                    touched,
                    errors,
                }) => (
                    <Form 
                        className="register-form" 
                        onSubmit={(e) => {
                            handleSubmit(e);
                            regUser(
                                values.fullName, values.username, values.dob, values.email,
                                values.phone, values.houseNameNum, values.addLine1, values.addLine2, 
                                values.city, values.postcode
                            )
                        }}
                    >
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
                                <ErrorMessage component={ErrorText} name="fullName"/>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    isValid={touched.username && !errors.username}
                                    className="reg-form--input"
                                />
                                <ErrorMessage component={ErrorText} name="username"/>
                                <Form.Control
                                    type="text"
                                    placeholder="Email address"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isValid={touched.email && !errors.email}
                                    className="reg-form--input"
                                />
                                <ErrorMessage name="email" component={ErrorText}/>
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
                                <ErrorMessage name="password" component={ErrorText}/>
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
                                <ErrorMessage name="dob" component={ErrorText}/>
                            </Form.Group>
                            <Form.Group as={Col} className="reg-form--right-side">
                                <Form.Control
                                    type="text"
                                    placeholder="House name or number"
                                    name="houseNameNum"
                                    value={values.houseNameNum}
                                    onChange={handleChange}
                                    isValid={touched.houseNameNum && !errors.houseNameNum}
                                    className="reg-form--input"
                                />
                                <ErrorMessage name="houseNameNum" component={ErrorText}/>
                                <Form.Control
                                    type="text"
                                    placeholder="Address Line 1"
                                    name="addLine1"
                                    value={values.addLine1}
                                    onChange={handleChange}
                                    isValid={touched.addLine1 && !errors.addLine1}
                                    className="reg-form--input"
                                />
                                <ErrorMessage name="addLine1" component={ErrorText}/>
                                <Form.Control
                                    type="text"
                                    placeholder="Address Line 2"
                                    name="addLine2"
                                    value={values.addLine2}
                                    onChange={handleChange}
                                    className="reg-form--input"
                                />
                                <ErrorMessage name="addLine2" component={ErrorText}/>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isValid={touched.city && !errors.city}
                                    className="reg-form--input"
                                />
                                <ErrorMessage name="city" component={ErrorText}/>
                                <Form.Control
                                    type="text"
                                    placeholder="Postcode"
                                    name="postcode"
                                    value={values.postcode}
                                    onChange={handleChange}
                                    isValid={touched.postcode && !errors.postcode}
                                    className="reg-form--input"
                                    id="reg-form--postcode"
                                />
                                <ErrorMessage name="postcode" component={ErrorText}/>
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
                                <ErrorMessage name="phone" component={ErrorText}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Check
                                required
                                name="terms"
                                onChange={handleChange}
                                isValid={values.terms && touched.terms}
                                label="Accept the Terms and Conditions"
                            >
                            </Form.Check>
                            <ErrorMessage name="terms" component={ErrorText}/>
                            <a href={Pdf} without rel="noopener noreferrer" target="_blank">Read Here</a>
                        </Row>
                        <Button 
                            id="reg-form--button" 
                            type="submit" 
                            onClick={() => {
                                console.log("clicked")
                            }}
                            disabled={!!errors && !touched}
                        > 
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
            <ToastContainer />
        </div>
    );
}

//regUser call on line 173

// <div role="button" aria-label="close pop-up" class="popup-close-button" tabindex="0"><div>
// exit button