interface ProductsInCart {
  id: number;
  price: number;
  discountedPrice: number;
  title: string;
  imageUrl: string;
}
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
