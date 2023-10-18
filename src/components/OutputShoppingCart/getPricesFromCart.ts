import { Product } from "./types";
function getPricesFromCart(cartStore: Array<Product>) {
  let totalPrice: number = 0;
  let totalDiscountedPrice: number = 0;

  for (let i = 0; i < cartStore.length; i++) {
    totalDiscountedPrice += cartStore[i].discountedPrice;
    totalPrice += cartStore[i].price;
  }

  if (totalDiscountedPrice < totalPrice) {
    return totalDiscountedPrice;
  } else {
    return totalPrice;
  }
}
export default getPricesFromCart;
