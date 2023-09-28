import * as React from "react";
import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";
import getPricesFromCart from "./getPricesFromCart";
function OutputShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);
  const total: number = getPricesFromCart(cartStore);
  return (
    <React.Fragment>
      {cartStore.map((productInCart) => (
        <div key={productInCart.id}>
          <img src={productInCart.imageUrl} alt={productInCart.description} />
          <h3>{productInCart.title}</h3>
          <span>{productInCart.price}</span>
        </div>
      ))}
      <span>Total</span>
      <span>{total}</span>
      <button>Remove product</button>
    </React.Fragment>
  );
}
export default OutputShoppingCart;
