import * as React from "react";
import { Link } from "react-router-dom";
function MobileNavigationMenu() {
  return (
    <React.Fragment>
      <input type="checkbox" id="toggle-mobile-menu" />
      <label htmlFor="toggle-mobile-menu"></label>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default MobileNavigationMenu;
