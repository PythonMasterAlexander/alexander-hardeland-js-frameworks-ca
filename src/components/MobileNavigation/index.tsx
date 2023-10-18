import * as React from "react";
import * as Styles from "./index.styles";
import { PrimaryLinkStyle } from "../../styles/sharedStyles";
function MobileNavigation() {
  const [isMobileNavigationClicked, setMobileNavigationClicked] =
    React.useState(false);
  function toggleHamburgerMenuOnOff() {
    setMobileNavigationClicked(!isMobileNavigationClicked);
  }
  return (
    <>
      <Styles.HamburgerMenuClickOnIcon
        onClick={toggleHamburgerMenuOnOff}
        type="checkbox"
        id="toggle-mobile-menu"
      />
      <label htmlFor="toggle-mobile-menu">
        <i
          className="fa-solid fa-bars fa-2xl"
          role="img"
          aria-label="Hamburger symbol the user can push click to get into the menu when the user are on mobile or tablet format"
        ></i>
      </label>
      <Styles.MobileNavigation
        style={{ display: isMobileNavigationClicked ? "inline" : "none" }}
      >
        <Styles.UnorderedListNavigationContainer>
          <Styles.LinkListItem>
            <Styles.MobileLinkStyle to="/">Home</Styles.MobileLinkStyle>
          </Styles.LinkListItem>
          <Styles.LinkListItem>
            <Styles.MobileLinkStyle to="/contact">
              Contact
            </Styles.MobileLinkStyle>
          </Styles.LinkListItem>
        </Styles.UnorderedListNavigationContainer>
      </Styles.MobileNavigation>
    </>
  );
}
export default MobileNavigation;
