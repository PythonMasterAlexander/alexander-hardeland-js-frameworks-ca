import ShoppingCart from "../../components/ShoppingCart";
import UseCartStore from "../../components/ShoppingCart/UseCartStore";
import * as React from "react";
import * as Styles from "./index.styles";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );

  return (
    <React.Fragment>
      <h1>Hello From the Checkout page</h1>
      <ShoppingCart />
      <Styles.IndividualLinkButtonContainer>
        <Styles.ClearCartButton onClick={() => clearAllProductsFromCartStore()}>
          Clear shopping cart
        </Styles.ClearCartButton>
      </Styles.IndividualLinkButtonContainer>
      <Link to="/checkout-was-success">Checkout</Link>
    </React.Fragment>
  );
}
export default CheckoutPage;
