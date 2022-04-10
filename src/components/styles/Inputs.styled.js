import styled from "styled-components";
import { Device } from "./Device";

export const StyledInputs = styled.section`
  grid-column: 2 / -2;
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;

  @media ${Device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  max-width: 25em;
  display: flex;
  align-items: center;
  padding: 1em 1.75em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};
  font-size: clamp(0.875rem, 50% + 4px, 1rem)
  font-weight: 500;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);

  &:focus-within {
    outline: 3px dotted green;
  }
`;

export const SearchBar = styled.input`
  border: none;
  width: 100%;
  margin-left: 1em;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownContainer = styled.div`
  margin-top: 2em;
  width: 13em;
  cursor: pointer;

  @media ${Device.tablet} {
    margin-top: 0;
  }
`;

export const DropdownButton = styled.button`
  width: 100%;
  max-width: 25em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.75em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.textColor};
  font-size: clamp(0.875rem, 50% + 4px, 1rem)
  font-weight: 500;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 15%);

  &:focus-within {
    outline: 3px dotted green;
  }
`;

export const DropdownList = styled.ul`
  background-color: ${({ theme }) => theme.accentColor};
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  width: 13em;
  position: absolute;
  z-index: 1000;
  margin-top: 0.5em;
`;
export const ListItem = styled.li`
  font-weight: 300;
  font-size: clamp(0.75rem, 50% + 8px, 1rem);
  padding: 0.5em 1em;

  &:not(:first-of-type) {
    margin-top: 0.5em;
  }

  &:hover,
  :focus,
  :active {
    background-color: ${({ theme }) => theme.accentColorSecondary};
  }

  &[aria-selected="true"] {
    background-color: ${({ theme }) => theme.accentColorSecondary};
  }
`;
