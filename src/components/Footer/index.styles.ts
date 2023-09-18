import style from "styled-components";
import { Link } from "react-router-dom";

export const Footer = style.footer`
  background: hsla(0, 0%, 0%, 1);
  color: hsla(0, 0%, 100%, 1);
  padding: 4% 0 2%;
`;

export const MarginContainer = style.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 36px;
  margin: 0 auto;
  width: 85%;
`;

export const PageLogoContainer = style.section`
`;

export const PageLinkContainer = style.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const LinkStyle = style(Link)`
  color: hsla(0, 0%, 100%, 1);
  text-decoration: none;
  font-weight: normal;
`;

export const FooterHeading = style.h3`
  font-weight: normal;
`;
