import * as React from "react";
import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";
import getPricesFromCart from "./getPricesFromCart";
function OutputShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);
  const total: number = getPricesFromCart(cartStore);
  return (
    <React.Fragment>
      <ul>
        {cartStore.map((productInCart) => (
          <li key={productInCart.id}>
            <img src={productInCart.imageUrl} alt={productInCart.description} />
            <h3>{productInCart.title}</h3>
            <span>{productInCart.price}</span>
          </li>
        ))}
      </ul>
      <h4>Total</h4>
      <p>{total}</p>
      <Styles.RemoveProductButton>Remove product</Styles.RemoveProductButton>
    </React.Fragment>
  );
}
export default OutputShoppingCart;
