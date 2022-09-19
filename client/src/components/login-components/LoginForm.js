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
                    type="text"
                    placeholder="Password"
                    className="login-form--input"
                />
                <Button className="login-form--button">
                    Log In
                </Button>
            </Form>
        </div>
    );
}