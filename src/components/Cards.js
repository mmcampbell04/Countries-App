import {
  CardsContainer,
  Card,
  CountryFlag,
  CountryDetails,
} from "./styles/Cards.styled";

export default function Cards({ countryData }) {
  const country = countryData.map((item, index) => {
    return (
      <Card key={index}>
        <CountryFlag src={`${item.flags}`} />
        <CountryDetails>
          <h2>{item.name}</h2>
          <p>
            <strong>Population: </strong>
            {item.population.toLocaleString("en-US")}
          </p>
          <p>
            <strong>Region: </strong>
            {item.continent}
          </p>
          <p>
            <strong>Capital: </strong>
            {item.capital}
          </p>
        </CountryDetails>
      </Card>
    );
  });

  return <CardsContainer>{country}</CardsContainer>;
}
