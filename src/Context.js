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

  return (
    <Context.Provider
      value={{
        countryData,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
