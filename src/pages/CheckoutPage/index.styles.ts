import styled from "styled-components";
import { Link } from "react-router-dom";

export const IndividualLinkButtonContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem;
  padding: 1rem 0;
`;

export const ButtonLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  padding: 1rem;
`;

export const ClearCartButton = styled.button`
  display: block;
`;
