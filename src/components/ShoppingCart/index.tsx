import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  return (
    <>
      <h2>Your Shopping cart</h2>
      <Styles.RemoveProductButton>Remove product</Styles.RemoveProductButton>
    </>
  );
}
export default ShoppingCart;
