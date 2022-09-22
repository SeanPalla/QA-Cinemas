import React, { useState } from "react";
import Axios from "axios";
export default function LoginForm() {
    const [checkUserInfo, setUserInfo] = useState({
        username: null,
        password: null,
    });
    // Axios call to verify a user
    // add a user not identified alert
    const loginUser = () => {
        Axios.post("http://localhost:5000/api/login/", {
            username: checkUserInfo.username,
            password: checkUserInfo.password,
        }).then((res) => {
            console.log(res.data._id);
            window.sessionStorage.setItem("id", res.data._id);
            window.sessionStorage.setItem("name", res.data.username);
        });
    };
    const onSubmit = (event) => {
        console.log("clciked");
        event.preventDefault();
        //console.log(event.target.name);
        //console.log(event.target.password.value);
        setUserInfo({
            username: event.target.username.value,
            password: event.target.password.value,
        });
        loginUser();
    };
    return (
        <div className="container--login-form">
            <form className="login-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="login-form--input"
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    className="login-form--input"
                />
                <button className="login-form--button" type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
}
