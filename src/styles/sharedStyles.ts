import styled from "styled-components";
export const PrimaryButtonContainer = styled.div`
  background: ${(props) => props.theme.buttons.primary.background};
  border-radius: ${(props) => props.theme.buttons.primary.borderRadius};
  text-align: ${(props) => props.theme.buttons.primary.textAlign};
`;
