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
  BtnsWrapper,
  Btns,
  SubSection,
} from "../components/styles/Details.styled";

export default function Details() {
  const { currentCountryDetails, matchCountryCode } = useContext(Context);
  let params = useParams();
  let country = currentCountryDetails(params.countryName);

  // filter down for more specific details: native name, currencies, language, border countries (thank you stackoverflow!)
  const getCurrencies = () => {
    if (!country.currencies) {
      return "none";
    } else {
      const currenciesArray = Object.values(country.currencies);
      return String(currenciesArray[0].name)
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    }
  };

  const getNativeName = () => {
    if (!country.nativeName) {
      return country.name;
    } else {
      let nameArray = Object.values(country.nativeName);
      return nameArray[0].common;
    }
  };

  const getLanguages = () => {
    if (!country.languages) {
      return "none";
    } else {
      const languagesArray = Object.values(country.languages);
      return languagesArray.toString().replace(/,(?=[^\s])/g, ", ");
    }
  };

  // can i do this when i first get the data...?
  const borderCountryArray = !country.borderCountries
    ? ""
    : Object.values(country.borderCountries).map((country) => {
        return matchCountryCode(country);
      });

  const borderCountryBtns =
    borderCountryArray === ""
      ? ""
      : borderCountryArray.map((country) => {
          return <PrimaryButton key={country}>{country}</PrimaryButton>;
        });

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
                {getNativeName()}
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
                {getCurrencies()}
              </p>
              <p>
                <strong>Languages: </strong>
                {getLanguages()}
              </p>
            </SubSection>
            <BtnsWrapper>
              <p>
                <strong>Border Countries: </strong>
              </p>

              <Btns>{borderCountryBtns}</Btns>
            </BtnsWrapper>
          </CountryFacts>
        </StyledCountryCard>
      </CountriesSection>
    </Main>
  );
}

// need a button component
// grid
// FLAG / INFO
