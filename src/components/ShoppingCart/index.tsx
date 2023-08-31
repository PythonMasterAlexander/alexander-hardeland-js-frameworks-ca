import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";

function ShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);
  console.log(cartStore);

  function getPricesFromCart() {
    let price: number = 0;
    let discountedPrice: number = 0;

    for (let i: number = 0; i < cartStore.length; i++) {
      price = cartStore[i].price;
      discountedPrice = cartStore[i].price;
    }

    return { price, discountedPrice };
  }

  const { price, discountedPrice } = getPricesFromCart();
  console.log(price, discountedPrice);

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
