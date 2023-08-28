import ShoppingCart from "../../components/ShoppingCart";
import * as Styles from "./index.styles";
import { Link } from "react-router-dom";
import UseCartStore from "../../components/ShoppingCart/UseCartStore";

function CheckoutPage() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );
  const cartStore = UseCartStore((state) => state.cartStore);
  console.log(cartStore);

  interface CartStoreProducts {
    title: string;
    imageUrl: string;
    price: number;
    discountedPrice: number;
  }
  const { title, imageUrl, price, discountedPrice } = cartStore;
  console.log(title);

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
