import React, { useState } from "react";
import Axios from "axios";

export default function LoginForm() {
    const[checkUsername, setUsername] = useState({username: null});                                             

    const handleUser = (e) =>{
        const inputUser = e.target.value;
        setUsername({username: inputUser});
    };

    // Axios call to verify a user 
    // add a user not identified alert
    const loginUser = async () =>{
        await Axios.post('http://localhost:5000/api/login/', {username: checkUsername.username})
        .then(user => {
            if (user){
                window.sessionStorage.setItem('id', user.data._id);
                window.sessionStorage.setItem('name', user.data.username);
                window.location.reload();
            }else{
                window.sessionStorage.clear();
            }
                
        }).catch((err) =>{
            console.log(err);
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
                <button type="button" className="login-form--button" onClick = {loginUser}>
                    Log In
                </button>
            </form>
        </div>
    );
}