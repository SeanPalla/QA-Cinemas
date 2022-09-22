import React, { useState } from "react";
import Axios from "axios";

export default function LoginForm() {
    const[checkUsername, setUsername] = useState({username: null});                                             

    const handleUser = (e) =>{
        const inputUser = e.target.value;
        window.sessionStorage.setItem('name', inputUser);
        setUsername({[e.target.username]: inputUser});
    };

    // Axios call to verify a user 
    // add a user not identified alert
    const loginUser = (event) =>{
        event.PreventDefault();
        console.log(checkUsername.username);
        Axios.post('http://localhost:5000/api/login/', {username:checkUsername.username})
        .then(res => {
            window.sessionStorage.setItem('id', res.data._id);
            window.sessionStorage.setItem('name', res.data.username);
        })
    };

    return (
        <div className="container--login-form">
            <form className="login-form"  >
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="login-form--input"
                    onChange={handleUser}
                />
                <input 
                    type="text"
                    placeholder="Password"
                    name="password"
                    className="login-form--input"
                />
                <button className="login-form--button" onClick = {loginUser}>
                    Log In
                </button>
            </form>
        </div>
    );
}