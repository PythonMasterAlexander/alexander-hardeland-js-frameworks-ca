import styled from "styled-components";
import { devices } from "../../styles/constants/devices";
export const ContactPageGridContainer = styled.div`
  display: grid;
  justify-content: space-between;
  @media only screen and ${devices.xl} {
    grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  }
`;
export const ContactPageInformationContainer = styled.article``;
export const ContactPageDisclaimerInformationContainer = styled.section`
  grid-column: 1;
  @media only screen and (${devices.xs}) and (max-width: 992px) {
    grid-row: 3 / 4;
  }
`;

export const ContactPageFormContainer = styled.section`
  @media only screen and ${devices.xl} {
    grid-column: 2;
    grid-row: 1 / 3;
  }
`;

export const FormContainerFieldsetFlexContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InformationContainerHeading = styled.h1`
  font-size: clamp(1.75rem, 1vw + 3vw, 3.125rem);
`;

export const FormContainerHeading = styled.legend`
  font-size: clamp(1.313rem, 1vw + 3vw, 1.75rem);
  font-family: "Roboto Mono", monospace;
  padding-block: 1.5rem;
`;
