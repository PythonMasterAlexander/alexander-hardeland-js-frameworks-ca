import * as Styles from "./index.styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Styles.Footer>
      <h3>This is the footer</h3>
      <Styles.PageLinkContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/checkout-was-success">Checkout Success</Link>
          </li>
        </ul>
      </Styles.PageLinkContainer>
    </Styles.Footer>
  );
}
export default Footer;
