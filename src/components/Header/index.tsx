import * as Styles from "./index.styles";

import Nav from "../Nav";
import CartIcon from "../CartIcon";

function Header() {
  return (
    <Styles.Header>
      <Styles.MarginContainer>
        <section>Page Logo goes here</section>
        <Nav />
        <CartIcon />
      </Styles.MarginContainer>
    </Styles.Header>
  );
}
export default Header;
