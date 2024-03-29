import * as Styles from "./index.styles";
import OutputShoppingCart from "../../components/OutputShoppingCart";
import UseCartStore from "../../components/OutputShoppingCart/UseCartStore";
import getPricesFromCart from "../../components/OutputShoppingCart/getPricesFromCart";
import { Helmet } from "react-helmet";
import { PrimaryButtonContainer } from "../../styles/sharedStyles";
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This page is where the user can see whats in the cart. From here the user can clear the cart, checkout, or go back and shop more"
        />
        <title>Checkout</title>
      </Helmet>
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
                  {totalDiscountPrice} $
                </Styles.SummaryInformationListItemPrice>
              </Styles.SummaryInformationListItem>
              <Styles.SummaryInformationListItem>
                <Styles.SummaryInformationListItemText>
                  Total
                </Styles.SummaryInformationListItemText>
                <Styles.SummaryInformationListItemPrice>
                  {totalPrice} $
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
          <PrimaryButtonContainer>
            <Styles.CheckoutButtonLink
              to="/checkout-was-success"
              onClick={() => clearAllProductsFromCartStore()}
            >
              Checkout
            </Styles.CheckoutButtonLink>
          </PrimaryButtonContainer>
        </Styles.OrderSummaryContainer>
      </Styles.ShoppingCartFlexContainer>
      <Styles.ContinueShoppingContainer>
        <i className="fa-solid fa-arrow-left fa-xl"></i>
        <Styles.ContinueShoppingButtonLink to="/">
          Continue Shopping
        </Styles.ContinueShoppingButtonLink>
      </Styles.ContinueShoppingContainer>
    </>
  );
}
export default CheckoutPage;
