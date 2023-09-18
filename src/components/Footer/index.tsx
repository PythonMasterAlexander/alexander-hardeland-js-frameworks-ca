import * as Styles from "./index.styles";
function Footer() {
  return (
    <Styles.Footer>
      <Styles.MarginContainer>
        <Styles.PageLogoContainer>
          <Styles.FooterHeading>
            This is where the footer logo goes
          </Styles.FooterHeading>
        </Styles.PageLogoContainer>
        <Styles.PageLinkContainer>
          <ul>
            <li>
              <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
            </li>
            <li>
              <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
            </li>
          </ul>
          <ul>
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
      </Styles.MarginContainer>
    </Styles.Footer>
  );
}
export default Footer;
