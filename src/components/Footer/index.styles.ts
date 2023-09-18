import style from "styled-components";
import { Link } from "react-router-dom";

export const Footer = style.footer`
  background: hsla(0, 0%, 0%, 1);
  color: hsla(0, 0%, 100%, 1);
  padding: 4% 0 2%;
`;

export const MarginContainer = style.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  margin: 0 auto;
  width: 75%;
`;

export const PageLogoContainer = style.section`
`;

export const ToToppContainer = style.section`
  justify-self: end;
`;

export const UnorderedListContainer = style.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PageLinkContainer = style.section`
  grid-column: 1 / 3;
`;

export const LinkStyle = style(Link)`
  color: hsla(0, 0%, 100%, 1);
  text-decoration: none;
  font-weight: normal;
`;

export const FooterHeading = style.h3`
  font-weight: normal;
`;
