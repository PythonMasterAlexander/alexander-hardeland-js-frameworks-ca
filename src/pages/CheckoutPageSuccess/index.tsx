import * as React from "react";
import { Link } from "react-router-dom";

function CheckoutPageSuccess() {
  return (
    <React.Fragment>
      <h1>The order was a success</h1>
      <Link to="/">Go back to the store</Link>
    </React.Fragment>
  );
}
export default CheckoutPageSuccess;
