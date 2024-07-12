import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_live_51PbeuKG0XrYDXBxdJ8VJyn49ryQ8Poxh104Ig9MJZF5nNRRWbPMiq1IKynBDiUNyr5zQnJx9Nf5UtPT2IvYvyZ7o00RrpZy6Dv"
);

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
