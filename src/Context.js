import { useEffect, useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchfield, setSearchfield] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(24);

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

  const filteredCountries = allCountries.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchfield) &&
      country.region.toLowerCase().includes(region)
    );
  });

  //  search for country
  function getCountry(filter) {
    const userSearch = filter.toLowerCase();
    setSearchfield(userSearch);
  }

  function getRegion(continent) {
    setRegion(continent.toLowerCase());
  }

  // get current cards for page numbers
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // to state but just the [firstcard - lastcards] aka 20 cards
  const currentCards = filteredCountries.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // changePage
  function flipPages(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function resetPages() {
    setCurrentPage(1);
  }

  function toggleNextPage() {
    if (currentPage < 13) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  }

  function togglePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  }

  return (
    <Context.Provider
      value={{
        allCountries,
        getBorderCountries,
        getCountry,
        getRegion,
        filteredCountries,
        isLoading,
        toggleNextPage,
        togglePreviousPage,
        flipPages,
        currentCards,
        cardsPerPage,
        currentPage,
        resetPages,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
