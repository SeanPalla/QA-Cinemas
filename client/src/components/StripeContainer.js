import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LfkitCzobFkJrlU6Ey1l6wzghtOJPvt4XBT0IzUQWAGUf8HByvYrxD61RekyQShwsEzA3X3A9VQEk9g7931ar4N00morQLKjQ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm paymentData={props.paymentData} />
    </Elements>
  );
}
