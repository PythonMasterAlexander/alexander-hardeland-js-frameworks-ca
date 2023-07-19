import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <>
      <h1>Hello from the Checkout Page</h1>
      <Link to="/checkout-was-success">Checkout</Link>
    </>
  );
}
export default CheckoutPage;
