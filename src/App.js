import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/themes";
import GlobalStyles from "./components/styles/Globals.styles";
import Header from "./components/Header";
import Home from "./routes/Home";
import Details from "./routes/Details";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header theme={theme} themeToggler={themeToggler} />

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home/:pageNumber" />
        </Route>
        <Route exact path="/details/:countryName" element={<Details />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
