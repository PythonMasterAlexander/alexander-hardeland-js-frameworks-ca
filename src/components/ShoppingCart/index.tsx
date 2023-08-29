import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);

  function ShowProductsInCart() {
    return (
      <section>
        <ul>
          {cartStore.map((productInCart) => (
            <li key={productInCart.id}>
              <img
                src={productInCart.imageUrl}
                alt={productInCart.description}
              />
              <h3>{productInCart.title}</h3>
              <span>{productInCart.price}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <h2>Your Shopping cart</h2>
      <ShowProductsInCart />
      <h4>Total</h4>
      <Styles.RemoveProductButton>Remove product</Styles.RemoveProductButton>
    </>
  );
}
export default ShoppingCart;
