import * as React from "react";
import * as Styles from "./index.styles";
import { Link } from "react-router-dom";
function MobileNavigation() {
  return (
    <React.Fragment>
      <Styles.MobileNavigationContainer>
        <Styles.HamburgerMenuClickOnIcon
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
        <Styles.MobileNavigation>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Styles.MobileNavigation>
      </Styles.MobileNavigationContainer>
    </React.Fragment>
  );
}
export default MobileNavigation;
