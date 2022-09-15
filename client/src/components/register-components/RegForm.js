import React from 'react';

export default function LoginForm() {
    return (
        <div className="container--register-form">
            <form className="register-form">
                <input
                    type="text"
                    placeholder="First Name"
                    className="reg-form--input"
                />
                <input
                    type="text"
                    placeholder="Surname"
                    className="reg-form--input"
                />
                <p>Date of Birth</p>
                <input
                    type="text"
                    className="reg-form--input"
                />
                <input
                    type="text"
                    placeholder="Email address"
                    className="reg-form--input"
                />
                <input
                    type="text"
                    placeholder="Confirm Email address"
                    className="reg-form--input"
                />
                <input 
                    type="text"
                    placeholder="Password"
                    className="reg-form--input"
                />
                <input
                    type="text"
                    placeholder="Confirm Password"
                    className="reg-form--input"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="reg-form--input"
                />
                <button className="reg-form--button">
                    Log In
                </button>
            </form>
            <div>
                <p>Terms & Conditions</p>
            </div>
        </div>
    );
}

// <div role="button" aria-label="close pop-up" class="popup-close-button" tabindex="0"><div>
// exit button