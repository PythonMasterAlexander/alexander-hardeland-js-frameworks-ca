import styled from "styled-components";
import { devices } from "../../styles/constants/devices";
export const IndividualProductGridContainer = styled.article`
  display: grid;
  @media only screen and ${devices.lg} {
    grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  }
`;

export const PriceInformationContainer = styled.div`
  align-self: end;
`;

export const IndividualProductBody = styled.section`
  grid-column: 2 / 3;
`;

export const ImageContainer = styled.section`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;

export const CartLinkButtonContainer = styled.div`
  align-self: end;
  background-color: #ffffff;
  border-radius: 0.375rem;
  text-align: center;
  padding: 1rem 0;
`;
export const ProductImage = styled.img`
  max-width: 60%;
  object-fit: contain;
  grid-column: 1;
  @media only screen and ${devices.xl} {
    max-width: 50%;
  }
  @media only screen and ${devices.xs} and (max-width: 1200px) {
    max-width: 70%;
  }
`;

export const CartButtonLink = styled.button`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;
