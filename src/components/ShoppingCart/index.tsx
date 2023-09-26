import * as React from "react";
import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";
import getPricesFromCart from "./getPricesFromCart";

function ShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);
  const total: number = getPricesFromCart(cartStore);

  function ShowProductsInCart() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <h2>Your Shopping cart</h2>
      <ShowProductsInCart />
      <h4>Total</h4>
      <p>{total}</p>
      <Styles.RemoveProductButton>Remove product</Styles.RemoveProductButton>
    </React.Fragment>
  );
}
export default ShoppingCart;
