import styled from "styled-components";
import { CountryFlag, CountryDetails } from "./CountriesList.styled";

export const StyledSection = styled.section`
  grid-area: 2/2;
`;

export const CountriesSection = styled.section`
  grid-area: 3/2;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-block: 4em;
  padding: 0.5em 2em;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  cursor: pointer;
`;

export const Flag = styled(CountryFlag)`
  border-radius: 0px;
  aspect-ratio: 1.5 / 1;
  object-fit: revert;
`;

export const StyledCountryCard = styled.div`
  grid-area: 2/2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4em;
`;

export const CountryFacts = styled(CountryDetails)`
  display: grid;
  grid-auto-rows: min-content;
  grid-template-areas:
    "title title"
    "one two"
    "btns btns";

  h2 {
    grid-area: title;
    align-self: center;
    padding: 1em 0;
    margin: 0;
}
  }
`;

export const SubSection = styled.div`
  &:first-of-type {
    grid-area: one;
  }
`;

export const Btns = styled(SubSection)`
  grid-area: btns;
  margin-top: 4em;
`;
