import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/themes";
import GlobalStyles from "./components/styles/Globals.styles";
import { Grid } from "./components/styles/Grid.styled";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Cards from "./components/Cards";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [regionFilter, setRegionFilter] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  // selectedregion state for dropdown

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  function getRegion(e) {
    setRegionFilter(e.target.innerText);
    toggleDropdown();
  }

  console.log(regionFilter);

  function filterCountries(e) {
    let country = e.target.value.toLowerCase();
    setCountrySearch(country);
  }

  console.log(countrySearch);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />
      <Grid>
        <Inputs
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          getRegion={getRegion}
          filterCountries={filterCountries}
        />
        <Cards />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
