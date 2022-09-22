import React, { useState } from 'react';
import Axios from 'axios';
import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup);

const passConditions =  yup.string().required()
                                    .min(10,
                                    'Password must contain 10 or more characters with at least one of each: uppercase, lowercase, number and special character'
                                    )
                                    .minLowercase(1, 'Password must contain at least 1 lower case letter')
                                    .minUppercase(1, 'Password must contain at least 1 upper case letter')
                                    .minNumbers(1, 'Password must contain at least 1 number')
                                    .minSymbols(1, 'Password must contain at least 1 special character');

const phoneConditions = yup.string().required()
                                    .min(11, 'Phone number can be no shorter or longer than 11 characters')
                                    .max(11, 'Phone number can be no shorter or longer than 11 characters');

const regFormSchema = yup.object().shape({
    fullName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: passConditions,
    dob: yup.string().required().matches(/^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/),
    addLine1: yup.string().required(),
    addLine2: yup.string(),
    city: yup.string().required(),
    postcode: yup.string().required().matches(/^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2}))$/),
    phone: phoneConditions,
    terms: yup.bool().required().oneOf([true], 'Terms and Conditions must be accepted to register an account.')
});

const firstValues = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    addLine1: "",
    addLine2: "",
    city: "",
    postcode: "",
    phone: "",
    terms: false
}

function regUser(name, username, dob, email, phone, addLine1, addLine2, city, postcode) {


    // CHANGE BACK TO 5000
    Axios.post('http://localhost:3000/register', {
        name,
        username,
        dob,
        email,
        phone,
        addLine1,
        addLine2,
        city,
        postcode
    }).then()
      .catch(err => console.error(err));

}

export { regUser, regFormSchema, firstValues };