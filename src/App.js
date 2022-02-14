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
  const [countryData, setCountryData] = useState(dummyCountries);
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

  // console.log(regionFilter);

  function filterCountries(e) {
    let country = e.target.value.toLowerCase();
    setCountrySearch(country);
  }

  // console.log(countrySearch);

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
        <Cards countryData={countryData} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;

const dummyCountries = [
  {
    name: "Colombia",
    capital: "Bogotá",
    region: "South America",
    continent: "Americas",
    population: 48759958,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    numericCode: "170",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],

    flags: "https://countries.petethompson.net/data/flags/col.svg",
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    region: "South America",
    continent: "Americas",
    population: 48759958,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    numericCode: "170",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],

    flags: "https://countries.petethompson.net/data/flags/col.svg",
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    region: "South America",
    continent: "Americas",
    population: 48759958,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    numericCode: "170",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],

    flags: "https://countries.petethompson.net/data/flags/col.svg",
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    region: "South America",
    continent: "Americas",
    population: 48759958,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    numericCode: "170",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],

    flags: "https://countries.petethompson.net/data/flags/col.svg",
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    region: "South America",
    continent: "Americas",
    population: 48759958,
    timezones: ["UTC-05:00"],
    borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
    numericCode: "170",
    currencies: [
      {
        code: "COP",
        name: "Colombian peso",
        symbol: "$",
      },
    ],
    languages: [
      {
        iso639_1: "es",
        iso639_2: "spa",
        name: "Spanish",
        nativeName: "Español",
      },
    ],

    flags: "https://countries.petethompson.net/data/flags/col.svg",
  },
];
