import { Link } from "react-router-dom";
import * as Styles from "./index.styles";
import UseCartStore from "../ShoppingCart/UseCartStore";

function CartIcon() {
  const numberOfItemsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  return (
    <>
      <section>
        <Link to="/checkout">
          <Styles.CartIcon className="fa-solid fa-cart-shopping fa-2xl">
            <Styles.ItemsInCart>{numberOfItemsInCart}</Styles.ItemsInCart>
          </Styles.CartIcon>
        </Link>
      </section>
    </>
  );
}
export default CartIcon;
