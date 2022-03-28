import { useEffect, useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCountries = async () => {
      setIsLoading(true);
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountryData(
        data
          .map((country) => {
            return {
              id: country.name.common,
              countryCode: country.cca3,
              name: country.name.common,
              nativeName: country.name.nativeName,
              population: country.population,
              flag: country.flags.svg,
              region: country.region,
              subRegion: country.subregion,
              capital: country.capital,
              domain: country.tld,
              currencies: country.currencies,
              languages: country.languages,
              borderCountries: country.borders,
            };
          })
          .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      );
      setIsLoading(false);
    };
    fetchCountries();
  }, []);

  function currentCountryDetails(name) {
    return countryData.find((country) => country.name === name);
  }

  function matchCountryCode(code) {
    // look through country data and find the coutnry
    // that matches the country code and then return the country name
    return countryData
      .filter((country) => country.countryCode === code)
      .map((country) => country.name);
  }

  return (
    <Context.Provider
      value={{
        countryData,
        currentCountryDetails,
        isLoading,
        matchCountryCode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
