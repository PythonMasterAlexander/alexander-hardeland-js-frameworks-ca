import * as React from "react";
import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";
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
    <React.Fragment>
      {cartStore.map((productInCart) => (
        <li key={productInCart.id}>
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
              <span>
                {productInCart.price - productInCart.discountedPrice}$
              </span>
            </Styles.RemoveOnMobile>
            <div>
              <button onClick={() => handleRemoveSingleProduct(productInCart)}>
                Remove
              </button>
            </div>
          </Styles.ProductListItemContainer>
        </li>
      ))}
    </React.Fragment>
  );
}
export default OutputShoppingCart;
