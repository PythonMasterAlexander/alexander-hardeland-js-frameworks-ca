import * as Styles from "./index.styles";
function Nav() {
  return (
    <nav>
      <Styles.UnorderedListLinkContainer>
        <li>
          <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
        </li>
        <li>
          <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
        </li>
      </Styles.UnorderedListLinkContainer>
    </nav>
  );
}
export default Nav;
