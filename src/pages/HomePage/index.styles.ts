import styled from "styled-components";
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
export const HomePageSearchProductContainer = styled.section`
  margin: 3rem 0;
`;
export const SearchProductFlexContainer = styled.div`
  display: flex;
`;
export const HomePageHeading = styled.h1`
  font-size: var(--main-heading-responsive-font-size);
  margin-bottom: 1.5rem;
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
