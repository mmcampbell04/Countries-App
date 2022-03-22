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

export default function CountriesList() {
  const { showCurrentCards } = useContext(Context);

  const countries = showCurrentCards.map((country) => {
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
      {/* {loading && <h2>Loading...</h2>} */}

      {countries}
    </CardsContainer>
  );
}
