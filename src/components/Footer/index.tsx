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
        <Styles.ToToppContainer>
          <span>To topp</span>
          <i className="fa-solid fa-arrow-up fa-2xl"></i>
        </Styles.ToToppContainer>
        <Styles.PageLinkContainer>
          <Styles.UnorderedListContainer>
            <div>
              <li>
                <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
              </li>
              <li>
                <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
              </li>
            </div>
            <div>
              <li>
                <Styles.LinkStyle to="/checkout">Checkout</Styles.LinkStyle>
              </li>
              <li>
                <Styles.LinkStyle to="/checkout-was-success">
                  Checkout Success
                </Styles.LinkStyle>
              </li>
            </div>
          </Styles.UnorderedListContainer>
        </Styles.PageLinkContainer>
      </Styles.MarginContainer>
    </Styles.Footer>
  );
}
export default Footer;
