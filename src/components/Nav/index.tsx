import * as Styles from "./index.styles";
function Nav() {
  return (
    <nav>
      <Styles.UnorderedListLinkContainer>
        <Styles.LinkListItem>
          <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
        </Styles.LinkListItem>
        <Styles.LinkListItem>
          <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
        </Styles.LinkListItem>
      </Styles.UnorderedListLinkContainer>
    </nav>
  );
}
export default Nav;
