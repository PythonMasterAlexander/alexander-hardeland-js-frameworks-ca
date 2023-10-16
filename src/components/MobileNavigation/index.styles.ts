import style from "styled-components";
import { devices } from "../../styles/constants/devices";
export const MobileNavigationContainer = style.section`
  @media only screen and (${devices.md}) {
    display: none;
  }
`;
export const MobileNavigation = style.nav`
  position: fixed;
  top: 0;
  left: -250px;
`;
export const HamburgerMenuClickOnIcon = style.input`
  display: none;
`;
