import styled from "styled-components";
import { Link } from "react-router-dom";
export const CheckoutSuccessPageHeader = styled.h1`
  margin: 1.5rem 0;
`;
export const GoBackToStoreButton = styled(Link)`
  color: var(--black-text-color);
  font-weight: ${(props) => props.theme.buttons.primary.fontWeight};
  padding-left: 1rem;
`;
