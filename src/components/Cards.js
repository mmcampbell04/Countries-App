import {
  CardsContainer,
  Card,
  CountryFlag,
  CountryDetails,
} from "./styles/Cards.styled";

export default function Cards({ countryData, loading }) {
  const countries = countryData.map((item) => {
    return (
      <Card key={item.id}>
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
          {item.capital && (
            <p>
              <strong>Capital: </strong>
              {item.capital}
            </p>
          )}
        </CountryDetails>
      </Card>
    );
  });

  return (
    <CardsContainer>
      {loading && <h2>Loading...</h2>}

      {countries}
    </CardsContainer>
  );
}
