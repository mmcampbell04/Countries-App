import { useEffect, useState, createContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [countryData, setCountryData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  useEffect(() => {
    // setLoading(true);
    const fetchCountries = async () => {
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
      //   setLoading(false);
    };
    fetchCountries();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // to state but just the [firstcard - lastcards] aka 20 cards
  const showCurrentCards = countryData.slice(indexOfFirstCard, indexOfLastCard);

  const totalCards = countryData.length;

  // changePage
  function flipPages(pageNumber) {
    setCurrentPage(pageNumber);
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
        currentPage,
        cardsPerPage,
        togglePreviousPage,
        toggleNextPage,
        flipPages,
        showCurrentCards,
        totalCards,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
