import styled from "styled-components";
import { breakpoints } from "../../styles/constants/breakpoints";
import { PrimaryButtonStyle } from "../../styles/sharedStyles";
export const ProductListItemContainer = styled.div`
  display: flex;
  background: var(--cart-list-item-background-color);
  border-radius: var(--page-border-radius);
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  height: 6.875rem;
`;
export const ListItemProductHeading = styled.h2`
  font-size: var(--list-item-product-font-size);
`;
export const ListItemProductImage = styled.img`
  max-width: 60px;
  height: auto;
`;
export const ListItemPriceText = styled.h3`
  font-size: var(--list-item-product-font-size);
`;
export const RemoveOnMobile = styled.div`
  @media only screen and (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
export const RemoveSingleProductButton = styled(PrimaryButtonStyle)`
  background: var(--button-background-color);
  font-size: var(--list-item-product-font-size);
  border-radius: ${(props) => props.theme.buttons.primary.borderRadius};
  margin-right: 0.75rem;
  padding: var(--input-padding-horizontal) var(--input-padding-vertical);
  &:hover {
    cursor: pointer;
    color: hsla(0, 0%, 20%, 1);
  }
`;
