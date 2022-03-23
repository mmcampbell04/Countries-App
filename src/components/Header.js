// import Toggle from "./Toggle";
import {
  StyledHeader,
  HeaderWrapper,
  Checkbox,
  CheckboxLabel,
} from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function Header({ theme, themeToggler }) {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <h1>Where in the world?</h1>
        <div className="darkmode toggle">
          <Checkbox
            type="checkbox"
            id="themeSwitch"
            name="theme"
            onChange={themeToggler}
          />
          <CheckboxLabel htmlFor="themeSwitch">
            <FontAwesomeIcon icon={theme === "light" ? faMoonLight : faMoon} />
            Dark Mode
          </CheckboxLabel>
        </div>
      </HeaderWrapper>
    </StyledHeader>
  );
}
