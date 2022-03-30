import { useEffect, useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // first load
  useEffect(() => {
    setIsLoading(true);
    const fetchCountries = async () => {
      setIsLoading(true);
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setAllCountries(
        data
          .map((country) => {
            return {
              id: country.name.common,
              name: country.name.common,
              code: country.cca3,
              population: country.population,
              flag: country.flags.svg,
              region: country.region,
              capital: country.capital,
            };
          })
          .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      );
      setIsLoading(false);
    };
    fetchCountries();
  }, []);

  function getBorderCountries(code) {
    // look through country data and find the coutnry
    // that matches the country code and then return the country name
    return allCountries
      .filter((country) => country.countryCode === code)
      .map((country) => country.name);
  }

  return (
    <Context.Provider
      value={{
        allCountries,
        getBorderCountries,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
