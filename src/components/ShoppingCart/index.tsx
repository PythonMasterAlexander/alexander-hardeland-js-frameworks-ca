import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const cartCounter = UseCartStore((state) => state.cartCount);
  const addOne = UseCartStore((state) => state.addToCart);

  return (
    <>
      <h2>Your Shopping cart</h2>
      <div>{cartCounter}</div>
      <Styles.AddToCountButton onClick={addOne}>
        Add to count
      </Styles.AddToCountButton>
    </>
  );
}
export default ShoppingCart;
