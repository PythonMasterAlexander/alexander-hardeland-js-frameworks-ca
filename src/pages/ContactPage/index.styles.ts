import styled from "styled-components";
import { PrimaryButtonContainer } from "../../styles/sharedStyles";
import { devices } from "../../styles/constants/devices";
export const ContactPageGridContainer = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  padding-block: clamp(1rem, 1vw + 3vw, 6rem);
  @media only screen and ${devices.xl} {
    grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  }
`;
export const ContactPageInformationContainer = styled.article`
  max-width: 70%;
  @media only screen and ${devices.xl} {
    justify-self: end;
  }
  @media only screen and (${devices.xs}) and (max-width: 992px) {
    max-width: 100%;
  }
`;
export const ContactPageDisclaimerInformationContainer = styled.section`
  grid-column: 1;
  max-width: 70%;
  @media only screen and ${devices.xl} {
    justify-self: end;
  }
  @media only screen and (${devices.xs}) and (max-width: 1200px) {
    grid-row: 3 / 4;
    max-width: 100%;
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
  justify-content: space-between;
  height: 100%;
  gap: 1.5rem;
`;
export const InformationContainerHeading = styled.h1`
  padding-bottom: 1.5rem;
  font-size: var(--main-heading-responsive-font-size);
`;
export const FormContainerHeading = styled.legend`
  font-size: clamp(1.313rem, 1vw + 3vw, 1.75rem);
  padding-block: 1.5rem;
`;
export const InformationContainerText = styled.p`
  font-size: clamp(1rem, 1vw + 3vw, 1.313rem);
  line-height: min(2rem, 7vw);
  letter-spacing: 0.06rem;
  padding-bottom: 1rem;
`;
export const DisclaimerInformationContainerText = styled.p`
  font-style: italic;
  padding-bottom: 1rem;
`;
export const FormTextAreaFlexGrowContainer = styled.div`
  flex-grow: 2;
`;
export const FormButtonContainer = styled(PrimaryButtonContainer)`
  width: 50%;
  @media only screen and (${devices.xs}) and (max-width: 1200px) {
    width: 100%;
  }
`;
export const FormNameInputLabel = styled.label`
  font-size: clamp(0.5rem, 1vw + 3vw, 1rem);
  display: block;
  margin-bottom: 6px;
`;
export const FormInputField = styled.input`
  border-radius: var(--page-border-radius);
  padding: var(--input-padding-horizontal) var(--input-padding-vertical)
    var(--input-padding-horizontal);
  width: 100%;
`;
export const FormTextAreaField = styled.textarea`
  border-radius: var(--page-border-radius);
  padding: var(--input-padding-horizontal) var(--input-padding-vertical)
    var(--input-padding-horizontal);
  height: 100px;
  width: 100%;
`;
export const FormButton = styled.button`
  font-weight: 700;
  cursor: pointer;
  padding: var(--button-padding-horizontal) 0;
  width: 100%;
  &:hover {
    background: gray;
  }
`;
export const FormErrorMessage = styled.span`
  display: block;
  color: red;
  margin-top: 6px;
`;
