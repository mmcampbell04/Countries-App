import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Main } from "../components/styles/Layouts.styled";
import {
  StyledSection,
  CountriesSection,
  Flag,
  CountryFacts,
  PrimaryButton,
  StyledCountryCard,
  Btns,
  SubSection,
} from "../components/styles/Details.styled";

export default function Details() {
  const { currentCountryDetails } = useContext(Context);
  let params = useParams();
  let country = currentCountryDetails(params.countryName);

  // filter down for more specific details: native name, currencies, language, border countries (thank you stackoverflow!)
  const currenciesArray = Object.values(country.currencies);
  const nativeNameArray = Object.values(country.nativeName); // fix this so each word is capitalized
  const languagesArray = Object.values(country.languages); // fix this so its seperated by commas
  // const borderCountryArray = Object.values(country.borderCountries);

  // const borderCountryBtns = borderCountryArray.map((country) => {
  //   return <PrimaryButton key={country}>{country}</PrimaryButton>;
  // });

  // if there are no border countries, render "none"

  return (
    <Main>
      <StyledSection>
        <Link to="/">
          <PrimaryButton>
            <FontAwesomeIcon icon={faArrowLeftLong} size="lg" />
            Back
          </PrimaryButton>
        </Link>
      </StyledSection>
      <CountriesSection>
        <StyledCountryCard>
          <Flag src={country.flag} />
          <CountryFacts>
            <h2>{country.name}</h2>
            <SubSection>
              <p>
                <strong>Native Name: </strong>
                {nativeNameArray[0].common}
              </p>
              <p>
                <strong>Population: </strong>
                {country.population.toLocaleString("en-US")}
              </p>
              <p>
                <strong>Region: </strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {country.subRegion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
            </SubSection>
            <SubSection>
              <p>
                <strong>Top Level Domain: </strong>
                {country.domain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {currenciesArray[0].name}
              </p>
              <p>
                <strong>Languages: </strong>
                {languagesArray}
              </p>
            </SubSection>
            <Btns>
              <strong>Border Countries: </strong>
              {/* {borderCountryBtns} */}
            </Btns>
          </CountryFacts>
        </StyledCountryCard>
      </CountriesSection>
    </Main>
  );
}

// need a button component
// grid
// FLAG / INFO
