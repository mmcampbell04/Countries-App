import styled from "styled-components";

export const StyledInputs = styled.section`
  grid-column: 2 / -2;
  padding-block: 2em;
  display: flex;
  justify-content: space-between;
`;

export const InputWrapper = styled.div``;

export const SearchBar = styled.input``;

export const DropdownContainer = styled.div`
  width: 10.5em;
  cursor: pointer;
`;

export const DropdownHeader = styled.div`
  background-color: ${({ theme }) => theme.accentColor};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
`;
export const DropdownListContainer = styled.div`
  width: 10.5em;
  position: absolute;
  z-index: 1000;
`;

export const DropdownList = styled.ul`
  background-color: ${({ theme }) => theme.accentColor};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
`;
export const ListItem = styled.li`
  font-weight: 300;
  padding: 0.5em 1em;

  &:not(:first-of-type) {
    margin-top: 0.5em;
  }

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.accentColorSecondary};
  }
`;
