import styled from "styled-components";
import { devices } from "../../styles/constants/devices";
export const PageHeaderContainer = styled.header`
  border-bottom: 0.063rem solid hsla(0, 0%, 100%, 1);
`;
export const HeaderFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.25rem;
  margin: 0 auto;
  width: 75%;
  @media only screen and (max-width: 490px) {
    flex-direction: column;
  }
`;
export const PageLinkNavigationContainer = styled.section`
  align-self: flex-end;
`;
export const CartIconContainer = styled.section`
  align-self: center;
  @media only screen and (max-width: 490px) {
    align-self: flex-start;
  }
`;
