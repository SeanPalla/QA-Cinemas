import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm() {
    return (
        <div className="container--login-form">
            <Form className="login-form">
                <Form.Control
                    type="text"
                    placeholder="Email Address"
                    className="login-form--input"
                />
                <Form.Control
                    type="password"
                    placeholder="Password"
                    className="form-control login-form--input"
                    id="login-form--password"
                />
                <Button id="login-form--button">
                    Log In
                </Button>
                {/* <InputGroup.Text>
                    <i onClick={clickHandler} class={showPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                </InputGroup.Text> */} 
                <p className="login-page--no-account">
                    Don't have an account?
                    <br/>
                    <a className="login-page--signup-link" href="/Register">Sign up here</a>
                </p>
            </Form>
        </div>
    );
}