import styled from "styled-components";

export const HeadingOne = styled.h1`
  color: red;
`;

export const Input = styled.input`
  background: gray;
  border: solid 2px black;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const ProductCardContainer = styled.div``;

export const HomePageMainContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
