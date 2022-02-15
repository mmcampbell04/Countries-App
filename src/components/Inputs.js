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

export default function Inputs({
  isOpen,
  toggleDropdown,
  getRegion,
  onSearchChange,
  region,
}) {
  const regionArray = ["Africa", "America", "Asia", "Europe", "Oceania"];

  let regions = regionArray.map((region) => {
    return (
      <ListItem key={region} onClick={getRegion}>
        {region}
      </ListItem>
    );
  });

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
          {/* {`${region}`.charAt(0).toUpperCase() + `${region}`.slice(1) ||
            "Filter by Region"} */}
          Filter
          <FontAwesomeIcon
            icon={faAngleDown}
            rotation={isOpen ? 180 : 0}
            size="sm"
          />
        </DropdownHeader>

        {isOpen && (
          <DropdownListContainer>
            <DropdownList>{regions}</DropdownList>
          </DropdownListContainer>
        )}
      </DropdownContainer>
    </StyledInputs>
  );
}
