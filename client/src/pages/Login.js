import React from "react";
import LoginForm from "../components/login-components/LoginForm";
import LoginHeader from "../components/login-components/LoginHeader";
import '../components/login-components/login-styling.css';

export default function Login() {
    return (
        <div className="login--main-container">
            <LoginHeader />
            <LoginForm />
        </div>
    );
}
