import React from "react";
import LogoutForm from "../components/logoutComponent/LogoutForm";
import '../components/login-components/login-styling.css';

export default function Login() {
    return (
        <div className="login--main-container">
            <LogoutForm />
        </div>
    );
}