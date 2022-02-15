import {
  CardsContainer,
  Card,
  CountryFlag,
  CountryDetails,
} from "./styles/Cards.styled";

export default function Cards({ countryData }) {
  const countries = countryData
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map((item, index) => {
      return (
        <Card key={index}>
          <CountryFlag src={item.flag} />
          <CountryDetails>
            <h2>{item.name}</h2>
            <p>
              <strong>Population: </strong>
              {item.population.toLocaleString("en-US")}
            </p>
            <p>
              <strong>Region: </strong>
              {item.region}
            </p>
            <p>
              <strong>Capital: </strong>
              {item.capital}
            </p>
          </CountryDetails>
        </Card>
      );
    });

  return <CardsContainer>{countries}</CardsContainer>;
}
