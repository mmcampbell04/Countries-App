import { useState, useEffect } from "react";
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
  const [countryData, setCountryData] = useState([]);
  // selectedregion state for dropdown

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((results) => {
        setCountryData(
          results.map((country) => {
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
        );
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  // toggle dropdown filter options
  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  // filter by region
  function getRegion(e) {
    setRegionFilter(e.target.innerText);
    toggleDropdown();
  }

  //  search for country
  function filterCountries(e) {
    let country = e.target.value.toLowerCase();
    setCountrySearch(country);
  }

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
