// import Toggle from "./Toggle";
import {
  StyledHeader,
  StyledToggle,
  Checkbox,
  CheckboxLabel,
} from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function Header({ theme, themeToggler }) {
  return (
    <StyledHeader>
      <StyledToggle>
        <Checkbox
          type="checkbox"
          id="themeSwitch"
          name="theme"
          onChange={themeToggler}
          theme={theme}
        />
        <CheckboxLabel htmlFor="themeSwitch">
          <FontAwesomeIcon icon={theme === "light" ? faMoonLight : faMoon} />
          Dark Mode
        </CheckboxLabel>
      </StyledToggle>
      <h1>Where in the world?</h1>
    </StyledHeader>
  );
}
