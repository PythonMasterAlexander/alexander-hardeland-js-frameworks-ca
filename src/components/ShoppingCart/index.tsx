import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const totalProductsInCart = UseCartStore(
    (state) => state.totalProductsInCart
  );
  const addToCart = UseCartStore((state) => state.addToCart);
  const removeProductFromCart = UseCartStore(
    (state) => state.removeProductFromCart
  );

  const addProductToCart = UseCartStore((state) => state.addProductToCart);

  return (
    <>
      <h2>Your Shopping cart</h2>
      <div>{totalProductsInCart}</div>
      <Styles.AddToCountButton onClick={addToCart}>
        Add to cart
      </Styles.AddToCountButton>
      <Styles.RemoveProductButton onClick={removeProductFromCart}>
        Remove product
      </Styles.RemoveProductButton>
      <Styles.AddProductToCart>Add product to cart</Styles.AddProductToCart>
    </>
  );
}
export default ShoppingCart;
