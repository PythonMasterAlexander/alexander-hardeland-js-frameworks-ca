import style from "styled-components";
import { PrimaryLinkStyle } from "../../styles/sharedStyles";
export const MobileNavigation = style.nav`
  display: none;
`;
export const HamburgerMenuClickOnIcon = style.input`
  display: none;
`;
export const UnorderedListNavigationContainer = style.ul`
  @media only screen and (max-width: 550px) {
    display: inline-block;
    margin-left: 1.5rem;
    margin-top: 0;
    @media only screen and (max-width: 550px) {
      margin: 0;
    }
  }
`;
export const LinkListItem = style.li`
  padding-top: 1.5rem;
  @media only screen and (max-width: 550px) {
    padding-left: 0.75rem;
    padding-top: 0;
    display: inline;
    margin: 0;
  }
`;
export const MobileLinkStyle = style(PrimaryLinkStyle)`
  &.active{
    color: hsla(0, 0%, 60%, 0.8);
  }
`;
