import styled from "styled-components";
import { Grid } from "./Layouts.styled";
// import { Device } from "./Device";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  ${Grid}
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.accentColor};
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);
  -webkit-box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);

  h1 {
    font-weight: 800;
    font-size: clamp(1rem, 75% + 2px, 3rem);
  }
`;

export const HeaderWrapper = styled.div`
  grid-column: 2/-2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1em;
`;

export const ThemeButton = styled.button`
  width: 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  font-size: clamp(0.75rem, 75% + 2px, 1rem);
  color: ${({ theme }) => theme.textColor};

  &:focus-within {
    outline: 3px dotted green;
  }
`;
