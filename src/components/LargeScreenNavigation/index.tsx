import * as React from "react";
import * as Styles from "./index.styles";
function LargeScreenNavigation() {
  return (
    <React.Fragment>
      <ul>
        <Styles.LinkListItem>
          <Styles.LinkStyle to="/">Home</Styles.LinkStyle>
        </Styles.LinkListItem>
        <Styles.LinkListItem>
          <Styles.LinkStyle to="/contact">Contact</Styles.LinkStyle>
        </Styles.LinkListItem>
      </ul>
    </React.Fragment>
  );
}
export default LargeScreenNavigation;
