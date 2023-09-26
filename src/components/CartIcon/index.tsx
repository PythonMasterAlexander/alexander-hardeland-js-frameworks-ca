import * as React from "react";
import * as Styles from "./index.styles";
import UseCartStore from "../ShoppingCart/UseCartStore";
import { Link } from "react-router-dom";

function CartIcon() {
  const numberOfItemsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  return (
    <React.Fragment>
      <Link to="/checkout">
        <Styles.CartIcon className="fa-solid fa-cart-shopping fa-2xl">
          <Styles.ItemsInCart>{numberOfItemsInCart}</Styles.ItemsInCart>
        </Styles.CartIcon>
      </Link>
    </React.Fragment>
  );
}
export default CartIcon;
