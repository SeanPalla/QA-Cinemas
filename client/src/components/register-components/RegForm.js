import React from 'react';
// import DatePicker from 'react-date-picker';
import DoB_Picker from './dob_logic';

export default function LoginForm() {
    const [value, onChange] = React.useState(new Date());

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
                {/* <label for="reg-form--birth-date" id="birthdate-label">Date of Birth</label> */}
                <DoB_Picker />
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
                    type="password"
                    placeholder="Password"
                    className="reg-form--input"
                    id="reg-form--password-input"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="reg-form--input"
                    id="reg-form--confirm-password"
                />
                <i class="bi bi-eye-slash" id="togglePassword"></i>
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="reg-form--input"
                    id="reg-form--phonenumber-input"
                />
                <button className="reg-form--button">
                    Register
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