import React, { useState } from 'react';
import Axios from 'axios';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

YupPassword(yup);

// const [disabled, setDisabled] = useState(false);

const backendPort = process.env.PORT || 5001;

const toastifySuccess = () => {
    toast("Signed up!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
};

const toastifyFailure = (error) => {
  toast(error, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: "submit-feedback success",
    toastId: "notifyToast",
  });
};


const passConditions =  yup.string().required()
                                    .min(10,
                                    'Password is too short'
                                    )
                                    .minLowercase(1, 'Password must contain at least 1 lower case letter')
                                    .minUppercase(1, 'Password must contain at least 1 upper case letter')
                                    .minNumbers(1, 'Password must contain at least 1 number')
                                    .minSymbols(1, 'Password must contain at least 1 special character');

const phoneConditions = yup.string().required('Phone Number required')
                                    .min(11, 'Phone number can be no shorter or longer than 11 characters')
                                    .max(11, 'Phone number can be no shorter or longer than 11 characters');

const regFormSchema = yup.object().shape({
    fullName: yup.string().required('Your name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().email('Email should be formatted x@y.z').required('Email is required'),
    password: passConditions,
    dob: yup.string().required('Date of Birth is required').matches(/^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/, 'Incorrect date format'),
    houseNameNum: yup.string().required('House name/number is required'),
    addLine1: yup.string().required('First Address Line is required'),
    addLine2: yup.string(),
    city: yup.string().required('City is required'),
    postcode: yup.string().required().matches(/^(([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2}))$/, 'Postcode invalid'),
    phone: phoneConditions,
    terms: yup.bool().required().oneOf([true], 'Terms and Conditions must be accepted to register an account.')
});

const firstValues = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    houseNameNum: "",
    addLine1: "",
    addLine2: "",
    city: "",
    postcode: "",
    phone: "",
    terms: false
}

async function regUser(name, usrname, dob, e_mail, phone, houseNameNum, addLine1, addLine2, cityy, postCode) {

    await Axios.post(`http://localhost/${backendPort}/api/register`, {
        fullName: name,
        username: usrname,
        email: e_mail,
        dateOfBirth: dob,
        phoneNumber: phone,
        role: "MEMBER",
        address: {
          buildingNameOrNumber: houseNameNum,
          streetName: addLine1,
          addressLine2: addLine2,
          city: cityy,
          postcode: postCode,
        }
    }).then(res => {
        if (res.status === 200) toastifySuccess();
        else toastifyFailure(`${res.status}: ${res.statusText}`)
      })
      .catch(err => {
        toastifyFailure(err);
        console.log(err) 
      });

}

export { regUser, regFormSchema, firstValues};