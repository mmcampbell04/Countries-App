import styled from "styled-components";
import { Device } from "./Device";

export const StyledHeader = styled.header`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.accentColor};

  h1 {
    font-weight: 800;
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  grid-column: 2/-2;
  padding-block: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxLabel = styled.label`
  height: 2.5rem;
  width: 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;
