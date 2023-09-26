import styled from "styled-components";
import { Link } from "react-router-dom";
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

export const LinkButtonContainer = styled.div`
  border-radius: 0.375rem;
  background-color: #ffffff;
  text-align: center;
  padding: 1rem 0;
`;

export const HomePageSearchProductContainer = styled.section``;

export const SearchProductFlexContainer = styled.div`
  display: flex;
`;

export const HeadingTwo = styled.h2`
  font-size: clamp(1.3rem, 1vw + 2vw, 1.5rem);
  letter-spacing: -0.031rem;
  margin-bottom: 1rem;
`;

export const HeadingOne = styled.h1`
  color: red;
`;

export const SearchProductText = styled.span`
  font-size: clamp(1rem, 1vw + 3vw, 1.313rem);
  font-weight: 700;
  color: white;
  background: var(--search-background-color);
  border-radius: var(--page-border-radius) 0 0 var(--page-border-radius);
  padding: var(--input-padding-horizontal) var(--input-padding-vertical);
`;

export const SearchProductInputField = styled.input`
  flex-grow: 2;
  border-radius: 0 var(--page-border-radius) var(--page-border-radius) 0;
  padding-left: var(--input-padding-vertical);

  &:focus {
    outline-color: var(--search-background-color);
    outline-style: solid;
    outline-width: 2px;
  }
`;

export const Img = styled.img`
  height: 9.375rem;
  object-fit: contain;
  max-width: 100%;
`;

export const ProductCardBody = styled.div`
  flex-grow: 1;
`;

export const CardText = styled.p`
  font-size: clamp(0.75rem, 1vw + 2vw, 1.3rem);
`;

export const ButtonLink = styled(Link)`
  color: #000000;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: clamp(1rem, 1vw + 2vw, 1.3rem);
  text-decoration: none;
  text-transform: uppercase;
`;
