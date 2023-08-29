import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const clearAllProductsFromCartStore = UseCartStore(
    (state) => state.clearAllProductsFromCartStore
  );

  const cartStore = UseCartStore((state) => state.cartStore);
  function ShowProductsInCart() {
    return (
      <div>
        <ul>
          {cartStore.map((productInCartStore) => (
            <li key={productInCartStore.id}>{productInCartStore.title}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <h2>Your Shopping cart</h2>
      <ShowProductsInCart />
      <Styles.RemoveProductButton>Remove product</Styles.RemoveProductButton>
    </>
  );
}
export default ShoppingCart;
