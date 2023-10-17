import * as Styles from "./index.styles";
function LargeScreenNavigation() {
  return (
    <ul>
      <Styles.LinkListItem>
        <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
      </Styles.LinkListItem>
      <Styles.LinkListItem>
        <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
      </Styles.LinkListItem>
    </ul>
  );
}
export default LargeScreenNavigation;
