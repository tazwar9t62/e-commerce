import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCardForm from "./PaymentCardForm";
import SplitForm from "./SplitForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51HaB3oLQsmAymE2ksdfwOA33MqLti0KePJJsrrT9qtJZRi96B72kKCF1lAaEdGjgX3wz2GCwJbeMMTCVF7gQ8xYX00eNV3y4YO"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCardForm handlePayment={handlePayment} />
    </Elements>
  );
};

export default ProcessPayment;
