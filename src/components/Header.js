// import Toggle from "./Toggle";
import {
  StyledHeader,
  HeaderWrapper,
  ThemeButton,
} from "./styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function Header({ theme, themeToggler }) {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <h1>Where in the world?</h1>
        <ThemeButton tabIndex={0} onClick={themeToggler}>
          <FontAwesomeIcon icon={theme === "light" ? faMoonLight : faMoon} />
          Dark Mode
        </ThemeButton>
      </HeaderWrapper>
    </StyledHeader>
  );
}
