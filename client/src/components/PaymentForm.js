import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import ".//cardStyle.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#555",
      color: "#ffffff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm(props) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const paymentData = props.paymentData;
  console.log(paymentData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { aticket, cticket, kticket } = paymentData;
        const aAmount = aticket * 10;
        const cAmount = cticket * 5;
        const kAmount = kticket * 7;
        const totalAmount = (aAmount + cAmount + kAmount) * 100;
        console.log(totalAmount);
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: totalAmount,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form className="PayForm" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="PayButton">Pay</button>
        </form>
      ) : (
        <div>
          <h2>Payment Has been successful</h2>
        </div>
      )}
    </>
  );
}
