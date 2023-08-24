import { Link } from "react-router-dom";
import UseCartStore from "../ShoppingCart/UseCartStore";

function CartIcon() {
  const numberOfItemsInCart = UseCartStore(
    (state) => state.numberOfProductsInCartStore
  );
  return (
    <>
      <section>
        <Link to="/checkout">
          <i className="fa-solid fa-cart-shopping fa-2xl">
            <span>{numberOfItemsInCart}</span>
          </i>
        </Link>
      </section>
    </>
  );
}
export default CartIcon;
