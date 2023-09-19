import * as Styles from "./index.styles";
import clickToGoToToppOfPage from "./clickToGoToToppOfPage";
function Footer() {
  return (
    <Styles.Footer>
      <Styles.MarginContainer>
        <Styles.PageLogoContainer>
          <Styles.FooterHeading>
            This is where the footer logo goes
          </Styles.FooterHeading>
        </Styles.PageLogoContainer>
        <Styles.ContactContainer>
          <h3>Contact</h3>
          <ul>
            <li>
              <a>
                <Styles.SpanElement>
                  <i className="fa-solid fa-envelope fa-xl"></i>
                </Styles.SpanElement>
                <Styles.SpanElement>Email</Styles.SpanElement>
              </a>
            </li>
            <li>
              <Styles.SpanElement>
                <i className="fa-solid fa-phone fa-xl"></i>
              </Styles.SpanElement>
              <Styles.SpanElement>+47 967-00-89</Styles.SpanElement>
            </li>
            <li>
              <Styles.SpanElement>
                <strong>Norway</strong>
              </Styles.SpanElement>
              <>+47 967-00-89</>
            </li>
            <li>
              <Styles.SpanElement>
                <strong>Germany</strong>
              </Styles.SpanElement>
              <Styles.SpanElement>+49 (6)122 / 900 899 35</Styles.SpanElement>
            </li>
            <li>
              <Styles.SpanElement>
                <strong>UK</strong>
              </Styles.SpanElement>
              <Styles.SpanElement>(067)-5555-3333</Styles.SpanElement>
            </li>
            <li>
              <Styles.SpanElement>
                <strong>USA</strong>
              </Styles.SpanElement>
              <Styles.SpanElement>0-700-455-9999</Styles.SpanElement>
            </li>
          </ul>
        </Styles.ContactContainer>
        <Styles.GoToToppContainer>
          <div>
            <Styles.ToToppButton onClick={clickToGoToToppOfPage}>
              <Styles.SpanElement>To topp</Styles.SpanElement>
              <span>
                <i className="fa-solid fa-arrow-up fa-xl"></i>
              </span>
            </Styles.ToToppButton>
          </div>
        </Styles.GoToToppContainer>
        <Styles.PageLinkContainer>
          <Styles.UlElement>
            <li>
              <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
            </li>
            <li>
              <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
            </li>
            <li>
              <Styles.LinkStyle to="/checkout">Checkout</Styles.LinkStyle>
            </li>
          </Styles.UlElement>
        </Styles.PageLinkContainer>
      </Styles.MarginContainer>
    </Styles.Footer>
  );
}
export default Footer;
