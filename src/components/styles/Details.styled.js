import styled from "styled-components";
import { Device } from "./Device";

export const StyledSection = styled.section`
  grid-area: 2/2;
`;

export const CountriesSection = styled.section`
  grid-area: 3/2;
  margin-bottom: 4em;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-block: 3em;
  padding: 0.5em 1.5em;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  background-color: ${({ theme }) => theme.accentColor};
  border-radius: 2px;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  cursor: pointer;

  @media ${Device.laptop} {
    margin-block: 5em;
  }
`;

export const StyledCountryCard = styled.div`
  grid-area: 2/2;
  display: grid;
  row-gap: 2em;

  @media ${Device.laptop} {
    grid-template-columns: 1fr 1fr;
    column-gap: 4em;
  }
`;

export const Flag = styled.img`
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  border-radius: 0px;
  aspect-ratio: 1.5 / 1;
  object-fit: cover;
`;

export const CountryFacts = styled.div`
  padding-inline: 0;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-areas:
  "title"
  "one"
  "two"
  "btns";

  @media ${Device.tablet} {
    grid-template-areas:
    "title title"
    "one two"
    "btns btns";
  }

  @media ${Device.laptop} {
    margin-top: 4em;
    gap: 2em;
  }
  
  h2 {
    grid-area: title;
    align-self: center;
    margin: 0;
}
  }
`;

export const SubSection = styled.div`
  margin-top: 1.5em;

  @media ${Device.laptop} {
    margin-top: 0;
  }
  
  }

  &:first-of-type {
    grid-area: one;
    margin-top: 1em;

    @media ${Device.laptop} {
    margin-top: 0;
  }
  
  }


  p {
    margin-block: 0.25em;
    flex: 0.1 0 16ch;
    font-weight: 700;
        
  }
`;

export const BtnsWrapper = styled(SubSection)`
  grid-area: btns;
  display: flex;
  flex-direction: column;

  @media ${Device.tablet} {
    flex-direction: row;
    align-items: center;
     
    }


  }
`;

export const Btns = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 0.25em;
margin-left: 1em;

@media ${Device.tablet} {
  align-items: center;
    }

button {
    margin-right: 0.5em;
    padding: 0.25em 1.75em;
    margin-block: 0.5em;

    @media ${Device.tablet} {
      align-items: center;
      margin-left: 0.75em;
    }

    @media ${Device.laptop} {
      margin-block: 0.25em;
      margin-left: 0.25em;
      
    }

`;
