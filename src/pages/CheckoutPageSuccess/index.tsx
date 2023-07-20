import { Link } from "react-router-dom";

function CheckoutPageSuccess() {
  return (
    <>
      <h1>The order was a success</h1>
      <Link to="/">Go back to the store</Link>
    </>
  );
}
export default CheckoutPageSuccess;
