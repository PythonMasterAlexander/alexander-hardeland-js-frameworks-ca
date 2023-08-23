import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const cartProductCounter = UseCartStore((state) => state.cartCount);
  const addProductToCart = UseCartStore((state) => state.addToCart);
  const removeProductFromCart = UseCartStore(
    (state) => state.removeProductFromCart
  );

  return (
    <>
      <h2>Your Shopping cart</h2>
      <div>{cartProductCounter}</div>
      <Styles.AddToCountButton onClick={addProductToCart}>
        Add to cart
      </Styles.AddToCountButton>
      <Styles.DecrementCountButton onClick={removeProductFromCart}>
        Remove cart product
      </Styles.DecrementCountButton>
    </>
  );
}
export default ShoppingCart;
