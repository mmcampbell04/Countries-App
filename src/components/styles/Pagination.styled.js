import styled from "styled-components";

export const PaginationContainer = styled.div`
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
  display: flex;
  margin-inline: 1.5em;
`;

export const Page = styled.li`
  display: grid;
  place-content: center;
`;

export const PageLink = styled.a`
  padding: 0.25rem 0.75rem;
  &.active {
    background: ${({ theme }) => theme.accentColorSecondary};
  }
`;
