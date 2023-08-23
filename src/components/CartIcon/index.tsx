import { Link } from "react-router-dom";
import UseCartStore from "../ShoppingCart/UseCartStore";

function CartIcon() {
  const cartCounter = UseCartStore((state) => state.cartCount);
  return (
    <>
      <section>
        <Link to="/checkout">
          <span>{cartCounter}</span>
          <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          <span>Cart</span>
        </Link>
      </section>
    </>
  );
}
export default CartIcon;
