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
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Inputs({ isOpen, toggleDropdown }) {
  // array of dropdown options & map over the array returning an Listitem

  const regionArray = ["Africa", "America", "Asia", "Europe", "Oceania"];

  let regions = regionArray.map((region, index) => {
    return (
      <ListItem key={index} value={region}>
        {region}
      </ListItem>
    );
  });

  return (
    <StyledInputs>
      <InputWrapper>
        <SearchBar type="search" placeholder="Search for a country..." />
      </InputWrapper>
      <DropdownContainer>
        <DropdownHeader onClick={toggleDropdown}>
          Filter by Region
          <FontAwesomeIcon
            icon={faAngleDown}
            rotation={`${isOpen ? 180 : ""}`}
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
