import React from "react";
import LoginForm from "../components/login-components/LoginForm";
import LoginHeader from "../components/login-components/LoginHeader";
import LoginNav from "../components/login-components/LoginNavbar";

export default function Login() {
    return (
        <div>
            <LoginNav />
            <LoginHeader />
            <LoginForm />
        </div>
    );
}
