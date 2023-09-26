import * as React from "react";
import * as Styles from "./index.styles";
function Nav() {
  return (
    <React.Fragment>
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
