import * as Styles from "./index.styles";
import UseCartStore from "../OutputShoppingCart/UseCartStore";
import { Link } from "react-router-dom";
function CartIcon() {
  const numberOfItemsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  return (
    <Link to="/checkout">
      <Styles.CartIcon className="fa-solid fa-cart-shopping fa-2xl">
        <Styles.ItemsInCart>{numberOfItemsInCart}</Styles.ItemsInCart>
      </Styles.CartIcon>
    </Link>
  );
}
export default CartIcon;
