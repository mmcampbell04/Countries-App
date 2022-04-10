import { useParams, Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
  const { allCountries } = useContext(Context);
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      const data = await res.json();
      setCountryDetails(
        data.map((i) => {
          return {
            id: i.name.common,
            name: i.name.common,
            nativeName: i.name.nativeName,
            population: i.population,
            flag: i.flags.svg,
            region: i.region,
            subRegion: i.subregion,
            capital: i.capital,
            domain: i.tld,
            currencies: i.currencies,
            languages: i.languages,
            borders: i.borders,
          };
        })
      );
    };
    fetchCountry();
  }, [countryName]);

  const countryCard = countryDetails.map((i) => {
    const getNativeName = () => {
      if (!i.nativeName) {
        return i.name;
      } else {
        let nameArray = Object.values(i.nativeName);
        return nameArray[0].common;
      }
    };

    const getLanguages = () => {
      if (!i.languages) {
        return "none";
      } else {
        const languagesArray = Object.values(i.languages);
        return languagesArray.toString().replace(/,(?=[^\s])/g, ", ");
      }
    };

    const getCurrencies = () => {
      if (!i.currencies) {
        return "none";
      } else {
        const currenciesArray = Object.values(i.currencies);
        return String(currenciesArray[0].name)
          .split(" ")
          .map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          })
          .join(" ");
      }
    };

    const borderNamesArray = !i.borders
      ? ""
      : i.borders.map((border) => {
          return matchCountryCode(border);
        });

    function matchCountryCode(code) {
      // look through country data and find the coutnry
      // that matches the country code and then return the country name
      return allCountries
        .filter((country) => country.code === code)
        .map((country) => country.name);
    }

    const borderBtns =
      borderNamesArray === ""
        ? ""
        : borderNamesArray.map((border, index) => {
            return (
              <PrimaryButton key={index}>
                <Link to={`/Countries-App/${border}`}>{border}</Link>
              </PrimaryButton>
            );
          });

    return (
      <StyledCountryCard key={i.capital}>
        <Flag src={i.flag} alt="country's flag" />
        <CountryFacts>
          <h2>{i.name}</h2>
          <SubSection>
            <p>
              <strong>Native Name: </strong>
              {getNativeName()}
            </p>
            <p>
              <strong>Population: </strong>
              {i.population.toLocaleString("en-US")}
            </p>
            <p>
              <strong>Region: </strong>
              {i.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {i.subRegion}
            </p>
            <p>
              <strong>Capital: </strong>
              {i.capital}
            </p>
          </SubSection>
          <SubSection>
            <p>
              <strong>Top Level Domain: </strong>
              {i.domain}
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
            <p>Border Countries:</p>
            {borderNamesArray.length > 0 ? <Btns>{borderBtns}</Btns> : "None"}
          </BtnsWrapper>
        </CountryFacts>
      </StyledCountryCard>
    );
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
      <CountriesSection>{countryCard}</CountriesSection>
      <Outlet />
    </Main>
  );
}
