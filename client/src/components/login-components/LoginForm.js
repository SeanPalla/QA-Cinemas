import React, { useState } from "react";
import Axios from "axios";

export default function LoginForm() {
    const[checkUserInfo, setUserInfo] = useState({username: null, 
                                                  password:null});

    // Axios call to verify a user 
    // add a user not identified alert
    const loginUser = (usernameLog,passwordLog) =>{
        try{
            console.log("running authenicate api");
            Axios.post('http://localhost:5000/api/login/', {username:usernameLog, password:passwordLog})
            .then(res => {
                console.log(res);
                window.sessionStorage.setItem('id', res.data._id);
                window.sessionStorage.setItem('name', usernameLog);
            })
        }
        catch (err){
            console.log(err);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("clicked login button");
        console.log(event.target.username.value);
        console.log(event.target.password.value);
        const usernameLog = event.target.name.value;
        const passwordLog = event.target.password.value;
        setUserInfo({username: usernameLog,
                     password: passwordLog
                    });
        loginUser(usernameLog,passwordLog);
    };

    return (
        <div className="container--login-form">
            <form className="login-form" onSubmit={onSubmit} action="/">
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