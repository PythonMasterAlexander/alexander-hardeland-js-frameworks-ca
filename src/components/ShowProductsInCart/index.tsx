import { ProductsInCart } from "./types";
function ShowProductsInCart(productsInCart: Array<ProductsInCart>) {
  return (
    <div>
      <ul>
        {productsInCart.map((productInCart) => (
          <li key={productInCart.id}>{productInCart.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default ShowProductsInCart;
