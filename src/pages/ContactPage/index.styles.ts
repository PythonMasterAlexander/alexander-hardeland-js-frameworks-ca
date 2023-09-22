import styled from "styled-components";
import { devices } from "../../styles/constants/devices";
export const ContactPageGridContainer = styled.div`
  display: grid;
  @media only screen and ${devices.xl} {
    grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  }
`;

export const ContactPageInformationContainer = styled.article``;
export const ContactPageDisclaimerInformationContainer = styled.section`
  @media only screen and (${devices.xs}) and (max-width: 992px) {
    grid-row: 3 / 4;
  }
`;
