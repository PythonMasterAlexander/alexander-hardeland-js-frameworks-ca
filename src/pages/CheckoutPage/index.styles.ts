import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/constants/breakpoints";
import {
  PrimaryButtonContainer,
  PrimaryButtonStyle,
  PrimaryLinkStyle,
} from "../../styles/sharedStyles";
export const ShoppingCartFlexContainer = styled.section`
  display: flex;
  gap: 1.5rem;
  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;
export const ShoppingCartContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`;
export const ShoppingCartListFlexContainer = styled.ul`
  display: flex;
  flex: 2;
  gap: 1.5rem;
  flex-direction: column;
`;
export const OrderSummaryContainer = styled.section`
  flex-shrink: 1;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const ClearCartContainer = styled(PrimaryButtonContainer)`
  cursor: pointer;
`;
export const ContinueShoppingContainer = styled.div`
  margin-top: 1.5rem;
`;
export const SummaryInformationBeforeCheckout = styled.div`
  flex: 2;
`;
export const ContinueShoppingButtonLink = styled(Link)`
  color: var(--black-text-color);
  font-weight: 700;
  padding-left: 1rem;
`;
export const CheckoutButtonLink = styled(PrimaryLinkStyle)`
  padding: var(--button-padding-horizontal) 0;
  display: block;
  width: 100%;
  height: 100%;
`;
export const ClearCartButton = styled(PrimaryButtonStyle)`
  padding: var(--input-padding-horizontal) 0;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
`;
export const ShoppingCartHeader = styled.h1`
  font-size: var(--main-heading-responsive-font-size);
  padding-bottom: 1.5rem;
`;
export const IfCartIsEmptyHeading = styled.h2`
  font-size: var(--second-heading-responsive-font-size);
  padding-bottom: 1.5rem;
`;
export const SummaryInformationListItem = styled.li`
  position: relative;
  margin-bottom: 1rem;
`;
export const SummaryInformationListItemText = styled.span`
  font-size: 0.938rem;
`;
export const SummaryInformationListItemPrice = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;
