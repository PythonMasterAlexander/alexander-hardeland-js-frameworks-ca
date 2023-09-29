import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints } from "../../styles/constants/breakpoints";
import { devices } from "../../styles/constants/devices";
export const ShoppingCartFlexContainer = styled.section`
  display: flex;
  gap: 1.5rem;
  @media only screen and (max-width: ${breakpoints.lg}) {
    flex-direction: column;
  }
`;
export const ShoppingCartContainer = styled.section`
  position: relative;
  flex: 1;
`;
export const ShoppingCartListFlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const OrderSummaryContainer = styled.section`
  flex-shrink: 1;
`;
export const OrderSummaryCheckoutContainer = styled.div``;
export const ShoppingCartClearCartContainer = styled.div``;
export const ShoppingCartContinueShoppingContainer = styled.div``;

export const ButtonLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  padding: 1rem;
`;

export const ClearCartButton = styled.button`
  display: block;
`;

export const ShoppingCartHeader = styled.h1`
  display: inline-block;
`;
export const NumberOfProductsInCartText = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;
