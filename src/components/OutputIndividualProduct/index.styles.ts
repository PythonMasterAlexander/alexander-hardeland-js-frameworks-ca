import styled from "styled-components";
import { devices } from "../../styles/constants/devices";
export const IndividualProductGridContainer = styled.article`
  display: grid;
  @media only screen and ${devices.lg} {
    grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  }
  @media only screen and ${devices.xs} and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 1fr 1fr;
  }
`;

export const PriceInformationContainer = styled.div`
  @media only screen and ${devices.xs} and (max-width: 992px) {
    grid-row: 2 / 3;
  }
`;

export const ProductBodyFlexContainer = styled.section`
  grid-column: 2 / 3;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  @media only screen and ${devices.xs} and (max-width: 992px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    gap: 0.75rem;
  }
`;

export const ImageContainer = styled.section`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  @media only screen and ${devices.xs} and (max-width: 992px) {
    grid-row: 1 / 2;
  }
`;

export const CartLinkButtonContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  text-align: center;
  padding: 1rem 0;
`;
export const ProductImage = styled.img`
  max-width: 70%;
  @media only screen and ${devices.xl} {
    max-width: 80%;
  }
  @media only screen and ${devices.xs} and (max-width: 992px) {
    max-width: 50%;
  }
`;

export const CartButtonLink = styled.button`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;
