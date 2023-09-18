import style from "styled-components";
import { Link } from "react-router-dom";

export const Footer = style.footer`
  background: hsla(0, 0%, 0%, 1);
  color: hsla(0, 0%, 100%, 1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 36px;
  padding-bottom: 2%;
`;

export const PageLinkContainer = style.section`
`;

export const LinkStyle = style(Link)`
  color: hsla(0, 0%, 100%, 1);
`;
