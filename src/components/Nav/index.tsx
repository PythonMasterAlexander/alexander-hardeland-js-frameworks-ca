import * as Styles from "./index.styles";
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
        </li>
        <li>
          <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
