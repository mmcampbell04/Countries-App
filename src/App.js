import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/themes";
import GlobalStyles from "./components/styles/Globals.styles";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />
    </ThemeProvider>
  );
}

export default App;
