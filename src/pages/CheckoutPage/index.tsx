import * as React from "react";
import * as Styles from "./index.styles";
import OutputShoppingCart from "../../components/OutputShoppingCart";
import UseCartStore from "../../components/OutputShoppingCart/UseCartStore";
import { Link } from "react-router-dom";
function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );
  const numberOfProductsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  console.log(numberOfProductsInCart);
  return (
    <React.Fragment>
      <Styles.ShoppingCartFlexContainer>
        <Styles.ShoppingCartContainer>
          <Styles.ShoppingCartHeader>Shopping Cart</Styles.ShoppingCartHeader>
          <Styles.NumberOfProductsInCartText>
            {numberOfProductsInCart} item
          </Styles.NumberOfProductsInCartText>
          <Styles.ShoppingCartListFlexContainer>
            <OutputShoppingCart />
          </Styles.ShoppingCartListFlexContainer>
          <Styles.ShoppingCartClearCartContainer>
            <Styles.ClearCartButton
              onClick={() => clearAllProductsFromCartStore()}
            >
              Clear shopping cart
            </Styles.ClearCartButton>
          </Styles.ShoppingCartClearCartContainer>
          <Styles.ShoppingCartContinueShoppingContainer>
            <Link to="/">Continue Shopping</Link>
          </Styles.ShoppingCartContinueShoppingContainer>
        </Styles.ShoppingCartContainer>
        <Styles.OrderSummaryContainer>
          <h2>Order Summary</h2>
          <Styles.OrderSummaryCheckoutContainer>
            <Link to="/checkout-was-success">Checkout</Link>
          </Styles.OrderSummaryCheckoutContainer>
        </Styles.OrderSummaryContainer>
      </Styles.ShoppingCartFlexContainer>
    </React.Fragment>
  );
}
export default CheckoutPage;
