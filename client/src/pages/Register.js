import React from "react";
import RegForm from "../components/register-components/RegForm";
import RegHeader from "../components/register-components/RegHeader";
import '../components/register-components/reg-styling.css';

export default function Register() {
    return (
        <div className="register--main-container">
            <RegHeader />
            <RegForm />
        </div>
    );
}
