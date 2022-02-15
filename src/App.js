import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/themes";
import GlobalStyles from "./components/styles/Globals.styles";
import { Grid } from "./components/styles/Grid.styled";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState("");
  const [searchfield, setSearchfield] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(20);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setLoading(true);
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
      setLoading(false);
    };
    fetchCountries();
  }, []);

  const filteredCountries = countryData.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchfield) &&
      country.region.toLowerCase().includes(region)
    );
  });

  // toggle dropdown filter options
  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  // filter by region
  function getRegion(e) {
    let region = e.target.innerText.toLowerCase();
    setRegion(region);
    toggleDropdown();
  }

  //  search for country
  function onSearchChange(e) {
    let userSearch = e.target.value.toLowerCase();
    setSearchfield(userSearch);
  }

  // const filterbyRegion = filteredCountries.filter((country) => {
  //   return country.region.toLowerCase().includes(region);
  // });

  // get current cards for page numbers
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // to state but just the [firstcard - lastcards] aka 20 cards
  const currentCards = filteredCountries.slice(
    indexOfFirstCard,
    indexOfLastCard
  );
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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />
      <Grid>
        <Inputs
          isOpen={isOpen}
          region={region}
          toggleDropdown={toggleDropdown}
          getRegion={getRegion}
          onSearchChange={onSearchChange}
        />
        <Cards countryData={currentCards} loading={loading} />
        {filteredCountries.length > cardsPerPage && (
          <Pagination
            currentPage={currentPage}
            cardsPerPage={cardsPerPage}
            totalCards={totalCards}
            flipPages={flipPages}
            toggleNextPage={toggleNextPage}
            togglePreviousPage={togglePreviousPage}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
