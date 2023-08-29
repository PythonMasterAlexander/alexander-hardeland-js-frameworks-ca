import * as Styles from "./index.styles";
import ShowProductsInCart from "../ShowProductsInCart";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );

  return (
    <>
      <h2>Your Shopping cart</h2>
      <ShowProductsInCart />
      <Styles.RemoveProductButton>Remove product</Styles.RemoveProductButton>
    </>
  );
}
export default ShoppingCart;
