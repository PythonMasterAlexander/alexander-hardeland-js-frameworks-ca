import style from "styled-components";
import { Link } from "react-router-dom";

export const Footer = style.footer`
  background: hsla(0, 0%, 20%, 1);
  color: hsla(0, 100%, 100%, 0.78);
  padding: 4% 0 2%;
`;

export const MarginContainer = style.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  row-gap: 1.5rem;
  margin: 0 auto;
  width: 75%;
`;

export const PageLogoContainer = style.section`
`;

export const UlElement = style.ul`
  display: flex;
`;

export const ContactContainer = style.section`
  justify-self: center;
`;

export const GoToToppContainer = style.section`
  justify-self: end;
`;

export const PageLinkContainer = style.section`
  grid-column: 1 / 4;
`;

export const LinkStyle = style(Link)`
  color: hsla(0, 0%, 100%, 1);
  padding-right: 0.75rem;
`;

export const FooterHeading = style.h3`
`;

export const SpanElement = style.span`
  padding-right: 0.75rem;
`;

export const HoverElement = style.div`
  :hover {
    cursor: pointer;
  }
`;
