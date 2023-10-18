import styled from "styled-components";
import {
  PrimaryButtonContainer,
  PrimaryLinkStyle,
} from "../../styles/sharedStyles";
export const ProductCardContainer = styled.article`
  background-color: var(--card-product-background-color);
  border-radius: 0.375rem;
  color: var(--button-background-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
`;
export const ProductLinkContainer = styled(PrimaryButtonContainer)`
  cursor: pointer;
  padding: var(--button-padding-horizontal) 0;
`;
export const ProductLinkStyle = styled(PrimaryLinkStyle)`
  display: block;
  width: 100%;
`;
export const ProductCardTextHeading = styled.h2`
  font-size: var(--second-heading-responsive-font-size);
  letter-spacing: -0.031rem;
  margin-bottom: 1rem;
`;
export const ProductImage = styled.img`
  height: 9.375rem;
  object-fit: contain;
  max-width: 100%;
`;
export const ProductCardBody = styled.div`
  flex-grow: 1;
`;
export const ProductCardText = styled.p`
  font-size: clamp(0.75rem, 1vw + 2vw, 1.3rem);
`;
