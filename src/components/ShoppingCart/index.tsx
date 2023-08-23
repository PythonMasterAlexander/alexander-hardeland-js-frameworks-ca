import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const totalProductsInCart = UseCartStore(
    (state) => state.totalProductsInCart
  );
  const addProductToCart = UseCartStore((state) => state.addToCart);
  const removeProductFromCart = UseCartStore(
    (state) => state.removeProductFromCart
  );

  return (
    <>
      <h2>Your Shopping cart</h2>
      <div>{totalProductsInCart}</div>
      <Styles.AddToCountButton onClick={addProductToCart}>
        Add to cart
      </Styles.AddToCountButton>
      <Styles.RemoveProductButton onClick={removeProductFromCart}>
        Remove product
      </Styles.RemoveProductButton>
    </>
  );
}
export default ShoppingCart;
