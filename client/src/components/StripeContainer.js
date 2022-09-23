import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LfkitCzobFkJrlUanCZ7nSZv0k0npcrqXvgu6WDNM7d2jyAblyCPVeXWoStLYOE2hKMYpqcu0sJpfw1cGAk2pkb00vvlcJ3ex";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm paymentData={props.paymentData} />
    </Elements>
  );
}
