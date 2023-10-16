import style from "styled-components";
import { hamburgerOpen } from "./toggleHamburgerOnOff";
export const MobileNavigation = style.nav`
  display: ${hamburgerOpen ? "inline-block" : "none"};
`;
export const HamburgerMenuClickOnIcon = style.input`
  display: none;
`;
