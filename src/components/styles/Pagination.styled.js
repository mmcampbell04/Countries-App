import styled from "styled-components";

export const PaginationContainer = styled.nav`
  margin-block: 6em;
  grid-column: 2/-2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.a`
  cursor: pointer;
`;

export const Pages = styled.ul`
  margin-inline: 4em;
  font-size: 0.9rem;
  display: flex;
  max-width: 100%;
`;

export const Page = styled.li`
  display: grid;
  place-content: center;
  cursor: pointer;
`;

export const PageLink = styled.a`
  padding: 0.5em;
  &.active {
    background: ${({ theme }) => theme.accentColorSecondary};
  }
`;
