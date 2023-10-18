import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";
import generateUniqueKeyOnEachProduct from "./generateUniqueKeyOnEachProduct";
function OutputShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);
  interface Product {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    discountedPrice: number;
    price: number;
    reviews: Array<object>;
  }
  const removeSingleProduct = UseCartStore(
    (state) => state.removeProductFromCartStore
  );
  const handleRemoveSingleProduct = (product: Product) => {
    removeSingleProduct(product);
  };
  return (
    <>
      {cartStore.map((productInCart) => {
        const calculatedPrice = (
          productInCart.price - productInCart.discountedPrice
        ).toFixed(2);
        return (
          <li key={generateUniqueKeyOnEachProduct()}>
            <Styles.ProductListItemContainer>
              <div>
                <Styles.ListItemProductImage
                  src={productInCart.imageUrl}
                  alt={productInCart.description}
                />
              </div>
              <div>
                <Styles.ListItemProductHeading>
                  {productInCart.title}
                </Styles.ListItemProductHeading>
              </div>
              <Styles.RemoveOnMobile>
                <Styles.ListItemPriceText>Price</Styles.ListItemPriceText>
                <span>{productInCart.price}$</span>
              </Styles.RemoveOnMobile>
              <Styles.RemoveOnMobile>
                <Styles.ListItemPriceText>Discount</Styles.ListItemPriceText>
                <span>{calculatedPrice}$</span>
              </Styles.RemoveOnMobile>
              <div>
                <Styles.RemoveSingleProductButton
                  onClick={() => handleRemoveSingleProduct(productInCart)}
                >
                  Remove
                </Styles.RemoveSingleProductButton>
              </div>
            </Styles.ProductListItemContainer>
          </li>
        );
      })}
    </>
  );
}
export default OutputShoppingCart;
