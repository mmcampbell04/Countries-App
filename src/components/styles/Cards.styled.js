import styled from "styled-components";
import { Device } from "./Device";

export const CardsContainer = styled.section`
  margin-top: 3em;
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5em;

  @media ${Device.tablet} {
    margin-top: 0;
    gap: 3em;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.accentColor};
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  border-radius: 10px;
`;

export const CountryFlag = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const CountryDetails = styled.div`
  padding: 2em;

  h2 {
    margin-bottom: 1em;
  }

  p {
    margin-top: 0.25em;
  }
`;
