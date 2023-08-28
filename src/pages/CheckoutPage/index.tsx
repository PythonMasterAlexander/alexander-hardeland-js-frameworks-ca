/*
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
*/

import ShoppingCart from "../../components/ShoppingCart";
import * as Styles from "./index.styles";
import { Link } from "react-router-dom";

import UseCartStore from "../../components/ShoppingCart/UseCartStore";

function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );

  return (
    <>
      <h1>Hello From the Checkout page</h1>
      <ShoppingCart />
      <Styles.IndividualLinkButtonContainer>
        <Styles.ClearCartButton onClick={() => clearAllProductsFromCartStore()}>
          Clear shopping cart
        </Styles.ClearCartButton>
      </Styles.IndividualLinkButtonContainer>
      <Link to="/checkout-was-success">Checkout</Link>
    </>
  );
}
export default CheckoutPage;
