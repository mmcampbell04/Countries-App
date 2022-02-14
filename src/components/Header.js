// import Toggle from "./Toggle";
import {
  StyledHeader,
  Nav,
  Checkbox,
  CheckboxLabel,
} from "./styles/Header.styled";
import { Grid } from "./styles/Grid.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function Header({ theme, themeToggler }) {
  return (
    <StyledHeader>
      <Grid>
        <Nav>
          <h1>Where in the world?</h1>
          <div>
            <Checkbox
              type="checkbox"
              id="themeSwitch"
              name="theme"
              onChange={themeToggler}
            />
            <CheckboxLabel htmlFor="themeSwitch">
              <FontAwesomeIcon
                icon={theme === "light" ? faMoonLight : faMoon}
              />
              Dark Mode
            </CheckboxLabel>
          </div>
        </Nav>
      </Grid>
    </StyledHeader>
  );
}
