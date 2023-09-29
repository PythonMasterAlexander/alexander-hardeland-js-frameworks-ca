import * as React from "react";
import * as Styles from "./index.styles";
import UseCartStore from "./UseCartStore";
function OutputShoppingCart() {
  const cartStore = UseCartStore((state) => state.cartStore);
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
            <div>
              <Styles.ListItemPriceHeading>Price</Styles.ListItemPriceHeading>
              <span>{productInCart.price}$</span>
            </div>
            <div>
              <button>Remove</button>
            </div>
          </Styles.ProductListItemContainer>
        </li>
      ))}
    </React.Fragment>
  );
}
export default OutputShoppingCart;
