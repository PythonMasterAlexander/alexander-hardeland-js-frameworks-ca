import styled from "styled-components";
import { devices } from "../../styles/constants/devices";
import { breakpoints } from "../../styles/constants/breakpoints";
export const IndividualProductGridContainer = styled.article`
  display: grid;
  grid-gap: 1.5rem;
  @media only screen and ${devices.lg} {
    grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  }
  @media only screen and ${devices.xs} and (max-width: ${breakpoints.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 1fr 1fr;
  }
`;

export const PriceInformationContainer = styled.div`
  @media only screen and ${devices.xs} and (max-width: ${breakpoints.lg}) {
    grid-row: 1 / 2;
  }
`;

export const ProductBodyFlexContainer = styled.section`
  grid-column: 2 / 3;
  justify-content: space-between;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  @media only screen and ${devices.xs} and (max-width: ${breakpoints.lg}) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    gap: 0.75rem;
  }
`;

export const CartLinkButtonContainer = styled.div`
  background: var(--button-background-color);
  border-radius: 0.375rem;
  text-align: center;
`;

export const ImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  @media only screen and ${devices.xs} and (max-width: ${breakpoints.lg}) {
    grid-row: 2 / 3;
    justify-content: flex-start;
  }
`;

export const PriceInformationFlexContainer = styled.ul`
  display: flex;
  gap: 0.75rem;
`;

export const ProductImage = styled.img`
  max-width: 40%;
  @media only screen and (max-width: 500px) {
    max-width: 70%;
  }
`;

export const ProductItemHeading = styled.h1`
  font-size: var(--main-heading-responsive-font-size);
  padding-bottom: 1.5rem;
`;

export const ProductItemDescription = styled.p`
  font-size: clamp(1rem, 1vw + 3vw, 1.313rem);
  line-height: min(2rem, 7vw);
  letter-spacing: 0.06rem;
`;

export const ProductItemReviewHeading = styled.h2`
  font-size: var(--second-heading-responsive-font-size);
  padding-bottom: 0.375rem;
`;

export const ProductItemPriceHeading = styled.h3`
  font-size: var(--third-heading-responsive-font-size);
  padding-bottom: 0.375rem;
`;

export const ProductPriceListItemText = styled.span`
  font-size: clamp(0.7rem, 1vw + 2vw, 1rem);
`;

export const NoReviewText = styled.p`
  font-size: var(--third-heading-responsive-font-size);
`;

export const CartButtonLink = styled.button`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  padding-block: 1rem;
  /*Create cursor of pointer*/
`;
