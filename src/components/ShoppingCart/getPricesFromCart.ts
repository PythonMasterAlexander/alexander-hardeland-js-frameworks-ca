interface Product {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  discountedPrice: number;
  price: number;
  reviews: Array<object>;
}

function getPricesFromCart(cartStore: Array<Product>) {
  let totalPrice: number = 0;
  let totalDiscountedPrice: number = 0;

  for (let i = 0; i < cartStore.length; i++) {
    totalPrice += cartStore[i].price;
  }

  for (let i = 0; i < cartStore.length; i++) {
    totalDiscountedPrice += cartStore[i].discountedPrice;
  }
  return { totalPrice, totalDiscountedPrice };
}
export default getPricesFromCart;
