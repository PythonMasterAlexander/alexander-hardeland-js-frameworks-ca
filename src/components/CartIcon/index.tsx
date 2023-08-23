import { Link } from "react-router-dom";
import UseCartStore from "../ShoppingCart/UseCartStore";

function CartIcon() {
  const totalProductsInCart = UseCartStore(
    (state) => state.totalProductsInCart
  );
  return (
    <>
      <section>
        <Link to="/checkout">
          <span>{totalProductsInCart}</span>
          <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          <span>Cart</span>
        </Link>
      </section>
    </>
  );
}
export default CartIcon;
