import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const count = UseCartStore((state) => state.count);
  const addOne = UseCartStore((state) => state.addOne);
  const clearCount = UseCartStore((state) => state.clearCount);

  return (
    <>
      <h2>Your Shopping cart</h2>
      <div>{count}</div>
      <Styles.AddToCountButton onClick={addOne}>
        Add to count
      </Styles.AddToCountButton>
      <Styles.ClearCountButton onClick={clearCount}>
        Clear count
      </Styles.ClearCountButton>
    </>
  );
}
export default ShoppingCart;
