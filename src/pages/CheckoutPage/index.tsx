import * as React from "react";
import * as Styles from "./index.styles";
import OutputShoppingCart from "../../components/OutputShoppingCart";
import UseCartStore from "../../components/OutputShoppingCart/UseCartStore";
import getPricesFromCart from "../../components/OutputShoppingCart/getPricesFromCart";
import { Link } from "react-router-dom";
function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );
  const numberOfProductsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  const cartStore = UseCartStore((state) => state.cartStore);
  let discountPriceNumber: number = 0;
  for (let i = 0; i < cartStore.length; i++) {
    const discount: number = cartStore[i].price - cartStore[i].discountedPrice;
    discountPriceNumber += discount;
  }
  const totalDiscountPrice: string = discountPriceNumber.toFixed(2);
  const returnPriceNumber: number = getPricesFromCart(cartStore);
  const totalPrice: string = returnPriceNumber.toFixed(2);
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
          <Styles.ContinueShoppingContainer>
            <Link to="/">Continue Shopping</Link>
          </Styles.ContinueShoppingContainer>
        </Styles.ShoppingCartContainer>
        <Styles.OrderSummaryContainer>
          <h2>Order Summary</h2>
          <Styles.SummaryInformationBeforeCheckout>
            <ul>
              <li>
                <span>ITEMS {numberOfProductsInCart}</span>
              </li>
              <li>
                <span>Your discount</span>
                <span>{totalDiscountPrice}</span>
              </li>
              <li>
                <span>Total</span>
                <span>{totalPrice}</span>
              </li>
            </ul>
          </Styles.SummaryInformationBeforeCheckout>
          <Styles.ClearCartContainer>
            <Styles.ClearCartButton
              onClick={() => clearAllProductsFromCartStore()}
            >
              Clear Cart
            </Styles.ClearCartButton>
          </Styles.ClearCartContainer>
          <Styles.CheckoutContainer>
            <Link to="/checkout-was-success">Checkout</Link>
          </Styles.CheckoutContainer>
        </Styles.OrderSummaryContainer>
      </Styles.ShoppingCartFlexContainer>
    </React.Fragment>
  );
}
export default CheckoutPage;
