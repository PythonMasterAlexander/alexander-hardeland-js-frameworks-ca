import UseCartStore from "../ShoppingCart/UseCartStore";

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
export default ShowProductsInCart;
