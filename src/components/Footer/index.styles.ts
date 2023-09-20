import style from "styled-components";
import { devices } from "../../styles/constants/devices";
import { Link } from "react-router-dom";
export const PageFooterContainer = style.footer`
  background: hsla(0, 0%, 20%, 1);
  color: hsla(0, 100%, 100%, 0.78);
  padding-block: min(20vh, 3.375rem);
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }

  @media only screen and (${devices.xs}) and (max-width: 767px) {
    grid-template-columns: 1fr; 
    grid-template-rows: none;
  }
`;
export const FooterContactContainer = style.section`
  justify-self: center;

  @media only screen and (${devices.md}) and (max-width: 1199px) {
    justify-self: start;
  }
  @media only screen and (${devices.xs}) and (max-width: 767px) {
    justify-self: start;
  }
`;

export const GoToTopContainer = style.section`
  justify-self: end;

  @media only screen and (${devices.md}) and (max-width: 1199px) {
    justify-self: start;
  }
  @media only screen and (${devices.xs}) and (max-width: 767px) {
    justify-self: start;
  }
`;

export const PageLinkContainer = style.section`
  grid-column: 1 / 3;

  @media only screen and (${devices.md}) and (max-width: 1199px) {
    grid-column: 1;
    justify-self: start;
  }
  @media only screen and (${devices.xs}) and (max-width: 767px) {
    grid-column: 1;
  }
`;

export const CopyRightInformationContainer = style.section`
  justify-self: end;

  @media only screen and (${devices.md}) and (max-width: 1199px) {
    justify-self: start;
  }
  @media only screen and (${devices.xs}) and (max-width: 767px) {
    justify-self: start;
  }
`;

export const UnorderedListLinkContainer = style.ul`
  display: flex;
`;

export const ContactListItem = style.li`
  padding-bottom: 0.75rem;
`;

export const LinkStyle = style(Link)`
  color: hsla(0, 0%, 100%, 1);
  font-size: 1.125rem;
  padding-right: 0.75rem;
  text-decoration: none;
  &:hover {
    color: hsla(0, 0%, 60%, 0.8);
  }
`;

export const FooterPageLogo = style.span`
  font-family: 'Roboto Mono', monospace;
  font-weight: bolder;
`;

export const ContactInformationHeader = style.h4`
  font-size: 1.125rem;
  padding-bottom: 1rem;
`;

export const ScrollToTopSpan = style.span`
  font-size: 1.125rem;
  padding-right: 0.75rem;
`;

export const TakeUserToTopButton = style.a`
  :hover {
    cursor: pointer;
    color: hsla(0, 0%, 60%, 0.8);
  }
`;
