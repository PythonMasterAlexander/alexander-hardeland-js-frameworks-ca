import styled from "styled-components";
import { Link } from "react-router-dom";
export const PrimaryButtonContainer = styled.div`
  background: ${(props) => props.theme.buttons.primary.background};
  border-radius: ${(props) => props.theme.buttons.primary.borderRadius};
  text-align: ${(props) => props.theme.buttons.primary.textAlign};
`;
export const PrimaryButtonStyle = styled.button`
  color: ${(props) => props.theme.buttons.primary.textColor};
  padding: ${(props) => props.theme.buttons.primary.padding};
  font-weight: ${(props) => props.theme.buttons.primary.fontWeight};
  text-decoration: ${(props) => props.theme.buttons.primary.textDecoration};
  text-transform: ${(props) => props.theme.buttons.primary.textTransform};
  font-size: ${(props) => props.theme.buttons.primary.fontSize};
`;
export const PrimaryLinkStyle = styled(Link)`
  color: ${(props) => props.theme.buttons.primary.textColor};
  font-size: ${(props) => props.theme.buttons.primary.fontSize};
  font-weight: ${(props) => props.theme.buttons.primary.fontWeight};
  text-decoration: ${(props) => props.theme.buttons.primary.textDecoration};
  text-transform: ${(props) => props.theme.buttons.primary.textTransform};
`;
export const FooterWrapperStyle = styled.footer`
  background: ${(props) => props.theme.footer.background};
  color: ${(props) => props.theme.footer.color};
`;
