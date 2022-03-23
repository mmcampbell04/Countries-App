import { useState } from "react";

import {
  StyledInputs,
  InputWrapper,
  SearchBar,
  DropdownContainer,
  DropdownHeader,
  DropdownListContainer,
  DropdownList,
  ListItem,
} from "./styles/Inputs.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Inputs({ getRegion, resetRegion, onSearchChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [headerText, setHeaderText] = useState("Filter by Region");

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
    setIsDropdownOpen((prevState) => !prevState);
  }

  return (
    <StyledInputs>
      <InputWrapper>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <SearchBar
          onChange={onSearchChange}
          type="search"
          placeholder="Search for a country..."
        />
      </InputWrapper>
      <DropdownContainer>
        <DropdownHeader onClick={toggleDropdown}>
          {headerText}
          <FontAwesomeIcon
            icon={faAngleDown}
            rotation={isDropdownOpen ? 180 : 0}
            size="sm"
          />
        </DropdownHeader>

        {isDropdownOpen && (
          <DropdownListContainer>
            <DropdownList>{regions}</DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    </StyledInputs>
  );
}
