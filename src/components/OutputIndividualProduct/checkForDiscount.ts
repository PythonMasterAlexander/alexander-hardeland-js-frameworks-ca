function checkForDiscount(price: number, discountPrice: number) {
  if (price !== discountPrice) {
    return true;
  } else {
    return false;
  }
}
export default checkForDiscount;
