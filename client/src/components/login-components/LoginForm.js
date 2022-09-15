import React from 'react';

export default function LoginForm() {
    return (
        <div className="container--login-form">
            <form className="login-form">
                <input
                    type="text"
                    placeholder="Email Address"
                    className="login-form--input"
                />
                <input 
                    type="text"
                    placeholder="Password"
                    className="login-form--input"
                />
                <button className="login-form--button">
                    Log In
                </button>
            </form>
        </div>
    );
}