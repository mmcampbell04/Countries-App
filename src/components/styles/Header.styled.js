import styled from "styled-components";
import { Grid } from "./Layouts.styled";
// import { Device } from "./Device";

export const StyledHeader = styled.header`
  ${Grid}
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.accentColor};

  h1 {
    font-weight: 800;
    font-size: clamp(1rem, 75% + 12px, 3rem);
  }
`;

export const HeaderWrapper = styled.div`
  grid-column: 2/-2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1em;
`;

export const CheckboxLabel = styled.label`
  width: 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  font-size: clamp(0.875rem, 50% + 4px, 1rem);
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;
