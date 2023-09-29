import * as React from "react";
import * as Styles from "./index.styles";
import OutputShoppingCart from "../../components/OutputShoppingCart";
import UseCartStore from "../../components/OutputShoppingCart/UseCartStore";
import getPricesFromCart from "../../components/OutputShoppingCart/getPricesFromCart";
function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );
  const numberOfProductsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  let isCartEmpty: boolean = false;
  if (!numberOfProductsInCart) {
    isCartEmpty = true;
  }
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
          <Styles.ShoppingCartListFlexContainer>
            {isCartEmpty ? (
              <Styles.IfCartIsEmptyHeading>
                Empty Cart
              </Styles.IfCartIsEmptyHeading>
            ) : (
              <OutputShoppingCart />
            )}
          </Styles.ShoppingCartListFlexContainer>
          <Styles.ContinueShoppingContainer>
            <i className="fa-solid fa-arrow-left fa-xl"></i>
            <Styles.ContinueShoppingButtonLink to="/">
              Continue Shopping
            </Styles.ContinueShoppingButtonLink>
          </Styles.ContinueShoppingContainer>
        </Styles.ShoppingCartContainer>
        <Styles.OrderSummaryContainer>
          <h2>Order Summary</h2>
          <Styles.SummaryInformationBeforeCheckout>
            <ul>
              <Styles.SummaryInformationListItem>
                <Styles.SummaryInformationListItemText>
                  ITEMS
                </Styles.SummaryInformationListItemText>
                <Styles.SummaryInformationListItemPrice>
                  {numberOfProductsInCart}
                </Styles.SummaryInformationListItemPrice>
              </Styles.SummaryInformationListItem>
              <Styles.SummaryInformationListItem>
                <Styles.SummaryInformationListItemText>
                  Your discount
                </Styles.SummaryInformationListItemText>
                <Styles.SummaryInformationListItemPrice>
                  {totalDiscountPrice}
                </Styles.SummaryInformationListItemPrice>
              </Styles.SummaryInformationListItem>
              <Styles.SummaryInformationListItem>
                <Styles.SummaryInformationListItemText>
                  Total
                </Styles.SummaryInformationListItemText>
                <Styles.SummaryInformationListItemPrice>
                  {totalPrice}
                </Styles.SummaryInformationListItemPrice>
              </Styles.SummaryInformationListItem>
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
            <Styles.CheckoutButtonLink to="/checkout-was-success">
              Checkout
            </Styles.CheckoutButtonLink>
          </Styles.CheckoutContainer>
        </Styles.OrderSummaryContainer>
      </Styles.ShoppingCartFlexContainer>
    </React.Fragment>
  );
}
export default CheckoutPage;
