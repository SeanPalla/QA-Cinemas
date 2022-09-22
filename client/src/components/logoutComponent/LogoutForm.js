import React, { useState } from "react";
import Axios from "axios";

export default function LoginForm() {
    const[checkUserInfo, setUserInfo] = useState({username: null, 
                                                  password:null});

    // Axios call to verify a user 
    // add a user not identified alert
    const logoutUser = () =>{
        Axios.post('http://localhost:5000/api/logout/', {username:checkUserInfo.username, password:checkUserInfo.password})
        .then(res => {
            console.log(res.data);
            window.sessionStorage.setItem('id', res.data._id);
            window.sessionStorage.setItem('name', res.data.username);
        })
    };

    const onSubmit = (event) => {
        // event.preventDefault();
        // logoutUser();
        window.sessionStorage.clear();
    };

    return (
        <div className="container--login-form">
            <h1 className="login-header">Logout QA Cinemas</h1>
            <form className="login-form" onSubmit={onSubmit} action="/">
                <button className="login-form--button" type="submit">
                    Are you sure you want to log out?
                </button>
            </form>
        </div>
    );
}