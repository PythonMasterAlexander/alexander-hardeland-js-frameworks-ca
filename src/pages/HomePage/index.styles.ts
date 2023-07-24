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

export const ProductCardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
`;

export const HomePageMainContainer = styled.section`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
