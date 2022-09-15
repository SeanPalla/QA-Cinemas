import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmailForm.css';

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast("Form sent!", {
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

  const onSubmit = async (data) => {
    const { subject, name, email, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        subject,
        name,
        email,
        message,
      };

      emailjs.send(
        "service_ykw5ti9",
        "template_tk9n3tx",
        templateParams,
        "BM4yi8Sjsni6h0Wiy"
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ContactForm">
      <div className="container">
      <h1 className='text-center'>QA Cinema</h1>
      <h4 className='text-center'>Liked a movie? Have a complaint? Want to chat? Contact Us</h4>
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern: /.+@.+\..+/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="submit-btn"
                  disabled={disabled}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div>
        <img src={require("../../assets/qa-cinema-logo.png")} class="center" alt="qa-cinema-logo" />
        <div>
          <p>
          For more information or assistance, please email us at: 
          foxtrotcinemaqa@gmail.com. Or give us a call on 0345 074 7829. Our
          lines are open 7 days a week from 9am to 10pm, including Bank
          holidays. We are located near Tower of London, 3rd Floor, International 
          House, 1 St Katharine's Way, London E1W 1UN.
          </p>
          <h6>
            All rights reserved QA Cinemas 2022 ©
          </h6>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;