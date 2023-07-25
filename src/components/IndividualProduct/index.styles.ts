import styled from "styled-components";

export const Img = styled.img`
  height: 18.75rem;
  max-width: 100%;
  object-fit: contain;
  grid-column-start: 1;
`;

export const IndividualProductCardBody = styled.div``;

export const IndividualProductReviewBody = styled.div`
  grid-column: 2;
`;

export const IndividualLinkButtonContainer = styled.div`
  grid-row: 2;
`;

export const IndividualProductCardContainer = styled.div`
  background-color: #005e9b;
  border-radius: 0.375rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.5rem;
  padding: 1rem;
  max-width: 80%;
  margin: 0 auto;
`;
