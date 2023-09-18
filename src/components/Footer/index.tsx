import * as Styles from "./index.styles";
function Footer() {
  return (
    <Styles.Footer>
      <h3>This is the footer</h3>
      <Styles.PageLinkContainer>
        <ul>
          <li>
            <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
          </li>
          <li>
            <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
          </li>
          <li>
            <Styles.LinkStyle to="/checkout">Checkout</Styles.LinkStyle>
          </li>
          <li>
            <Styles.LinkStyle to="/checkout-was-success">
              Checkout Success
            </Styles.LinkStyle>
          </li>
        </ul>
      </Styles.PageLinkContainer>
    </Styles.Footer>
  );
}
export default Footer;
