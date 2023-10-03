import * as React from "react";
import * as Styles from "./index.styles";
function Nav() {
  return (
    <React.Fragment>
      <section>
        <input type="checkbox" id="toggle-mobile-menu" />
        <label htmlFor="toggle-mobile-menu">
          <i
            className="fa-solid fa-bars fa-2xl"
            role="img"
            aria-label="Hamburger symbol the user can push click to get into the menu when the user are on mobile or tablet format"
          ></i>
        </label>
      </section>
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
    </React.Fragment>
  );
}
export default Nav;
