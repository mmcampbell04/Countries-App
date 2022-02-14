import styled from "styled-components";

export const StyledHeader = styled.header`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.accentColor};

  h1 {
    font-weight: 800;
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
`;

export const Checkbox = styled.input`
  opacity: 0;
  position: absolute;
`;
