import { Link } from "react-router-dom";

function CartIcon() {
  return (
    <>
      <section>
        <Link to="/checkout">
          <span>0</span>
          <i className="fa-solid fa-cart-shopping fa-2xl"></i>
          <span>Cart</span>
        </Link>
      </section>
    </>
  );
}
export default CartIcon;
