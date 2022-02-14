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

  // selectedregion state for dropdown

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />
      <Grid>
        <Inputs isOpen={isOpen} toggleDropdown={toggleDropdown} />
        <Cards />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
