import { useState, useContext } from "react";
import Inputs from "../components/Inputs";
import CountriesList from "../components/CountriesList";
// import Pagination from "../components/Pagination";
import { Main } from "../components/styles/Layouts.styled";
import { Context } from "../Context";

export default function Home() {
  const { countryData } = useContext(Context);
  const [region, setRegion] = useState("");
  const [searchfield, setSearchfield] = useState("");

  const filteredCountries = countryData.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchfield) &&
      country.region.toLowerCase().includes(region)
    );
  });

  //  search for country
  function onSearchChange(e) {
    let userSearch = e.target.value.toLowerCase();
    setSearchfield(userSearch);
  }

  function getRegion(continent) {
    setRegion(continent.toLowerCase());
  }

  return (
    <Main>
      <Inputs
        getRegion={getRegion}
        searchfield={searchfield}
        onSearchChange={onSearchChange}
      />
      <CountriesList filteredCountries={filteredCountries} />
    </Main>
  );
}
