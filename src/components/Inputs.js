import { useState, useContext } from "react";
import { Context } from "../Context";
import {
  StyledInputs,
  InputWrapper,
  SearchBar,
  DropdownContainer,
  DropdownButton,
  DropdownList,
  ListItem,
} from "./styles/Inputs.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Inputs() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [headerText, setHeaderText] = useState("Filter by Region");
  const { getRegion, getCountry, resetPages } = useContext(Context);

  const regionArray = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  let regions = regionArray.map((region) => {
    return (
      <ListItem key={region} onClick={getUserChoice}>
        {region}
      </ListItem>
    );
  });

  function getUserChoice(event) {
    resetPages();
    const chosenContinent = event.target.innerText;
    if (chosenContinent === "All") {
      getRegion("");
    } else {
      getRegion(chosenContinent);
    }
    setHeaderText(chosenContinent);
    setIsDropdownOpen(false);
  }

  // open dropdown
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function getFilterCountries(e) {
    let userSearch = e.target.value;
    getCountry(userSearch);
  }

  return (
    <StyledInputs>
      <InputWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <SearchBar
          onChange={getFilterCountries}
          type="search"
          placeholder="Search for a country..."
        />
      </InputWrapper>
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          {headerText}
          <FontAwesomeIcon
            icon={faAngleDown}
            rotation={isDropdownOpen ? 180 : 0}
            size="sm"
          />
        </DropdownButton>
        {isDropdownOpen && <DropdownList>{regions}</DropdownList>}
      </DropdownContainer>
    </StyledInputs>
  );
}
