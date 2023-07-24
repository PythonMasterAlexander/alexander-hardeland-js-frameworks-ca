import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadingOne = styled.h1`
  color: red;
`;

export const Input = styled.input`
  background: gray;
  border: solid 2px black;
`;

export const Img = styled.img`
  border-radius: 0.375rem;
  height: 9.375rem;
  object-fit: contain;
  max-width: 100%;
`;

export const ProductCardContainer = styled.div`
  background-color: #005e9b;
  border-radius: 0.375rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
`;

export const ProductCardBody = styled.div`
  flex-grow: 1;
`;

export const LinkButtonContainer = styled.div`
  border-radius: 0.375rem;
  background-color: #ffffff;
  text-align: center;
  padding: 1.5rem 0;
`;

export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
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
