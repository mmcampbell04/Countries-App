import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
// import Details from "../routes/Details";

import {
  CardsContainer,
  Card,
  CountryFlag,
  CountryDetails,
} from "./styles/CountriesList.styled";

export default function CountriesList({ filteredCountries }) {
  const { isLoading } = useContext(Context);

  const Loader = () => {
    if (isLoading) {
      return <h2>Content Loading!</h2>;
    } else {
      return null;
    }
  };

  const countries = filteredCountries.map((country) => {
    return (
      <Card key={country.id}>
        <Link to={`details/${country.name}`}>
          <CountryFlag src={country.flag} />
          <CountryDetails>
            <h2>{country.name}</h2>
            <p>
              <strong>Population: </strong>
              {country.population.toLocaleString("en-US")}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            {country.capital && (
              <p>
                <strong>Capital: </strong>
                {country.capital}
              </p>
            )}
          </CountryDetails>
        </Link>
      </Card>
    );
  });

  return (
    <CardsContainer>
      <Loader />
      {countries.length === 0 ? "No match!" : countries}
    </CardsContainer>
  );
}
