import style from "styled-components";
import { devices } from "../../styles/constants/devices";
import { Link } from "react-router-dom";

export const Footer = style.footer`
  background: hsla(0, 0%, 20%, 1);
  color: hsla(0, 100%, 100%, 0.78);
  padding: 3% 0 3%;
`;

export const FooterGridContainer = style.div`
  display: grid;
  row-gap: 2.25rem;
  margin: 0 auto;
  width: 75%;

  @media only screen and ${devices.xl}  {
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
  }

  @media only screen and (${devices.md}) and (max-width: 1199px) {
  }

  @media only screen and (${devices.xs}) and (max-width: 767px) {
  }
`;

export const PageLogoContainer = style.section`
`;

export const UlElement = style.ul`
  display: flex;
`;

export const LiElement = style.li`
  padding-bottom: 0.75rem;
`;

export const ContactContainer = style.section`
  justify-self: center;
`;

export const GoToToppContainer = style.section`
  justify-self: end;
`;

export const PageLinkContainer = style.section`
  grid-column: 1 / 3;
`;

export const LinkStyle = style(Link)`
  color: hsla(0, 0%, 100%, 1);
  font-size: 1.125rem;
  padding-right: 0.75rem;
  text-decoration: none;
`;

export const FooterPageLogo = style.span`
  font-family: 'Roboto Mono', monospace;
  font-weight: bolder;
`;

export const ContactHeader = style.h4`
  font-size: 1.125rem;
  padding-bottom: 1rem;
`;

export const SpanElement = style.span`
  font-size: 0.938rem;
  padding-right: 0.75rem;
`;

export const ToToppSpanElement = style.span`
  font-size: 1.125rem;
  padding-right: 0.75rem;
`;

export const ToToppButton = style.a`
  :hover {
    cursor: pointer;
  }
`;

export const CopyRightInformationContainer = style.section`
  justify-self: end;
`;
