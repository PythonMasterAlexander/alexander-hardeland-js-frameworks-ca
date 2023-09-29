import styled from "styled-components";
export const ProductListItemContainer = styled.div`
  display: flex;
  background: var(--cart-list-item-background-color);
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
`;
export const ListItemProductHeading = styled.h2`
  font-size: var(--list-item-product-font-size);
`;
export const ListItemProductImage = styled.img`
  width: 70px;
  height: auto;
`;
export const ListItemPriceText = styled.h3`
  font-size: var(--list-item-product-font-size);
`;
