import * as React from "react";
import * as Styles from "./index.styles";
import OutputShoppingCart from "../../components/OutputShoppingCart";
import UseCartStore from "../../components/OutputShoppingCart/UseCartStore";
import { Link } from "react-router-dom";
function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );
  return (
    <React.Fragment>
      <Styles.ShoppingCartFlexContainer>
        <h1>Hello From the Checkout page</h1>
        <OutputShoppingCart />
        <Styles.IndividualLinkButtonContainer>
          <Styles.ClearCartButton
            onClick={() => clearAllProductsFromCartStore()}
          >
            Clear shopping cart
          </Styles.ClearCartButton>
        </Styles.IndividualLinkButtonContainer>
        <Link to="/checkout-was-success">Checkout</Link>
      </Styles.ShoppingCartFlexContainer>
    </React.Fragment>
  );
}
export default CheckoutPage;
