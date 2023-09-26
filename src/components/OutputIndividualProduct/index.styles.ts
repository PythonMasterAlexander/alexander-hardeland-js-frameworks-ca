import styled from "styled-components";
export const IndividualProductCardContainer = styled.article`
  background-color: #005e9b;
  border-radius: 0.375rem;
  display: grid;
  grid-gap: 1.5rem;
  padding: 1rem;
  max-width: 80%;
  margin: 0 auto;
`;

export const PriceInformationContainer = styled.div``;

export const IndividualProductCardBody = styled.section`
  grid-column: 2;
`;

export const CartLinkButtonContainer = styled.div`
  align-self: end;
  background-color: #ffffff;
  border-radius: 0.375rem;
  text-align: center;
  padding: 1rem 0;
`;
export const Img = styled.img`
  max-width: 100%;
  object-fit: contain;
  grid-column: 1;
`;

export const CartButtonLink = styled.button`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;
