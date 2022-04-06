import styled, { css } from "styled-components";

export const Grid = css`
  display: grid;
  grid-template-columns: minmax(2em, 1fr) minmax(0px, 120em) minmax(2em, 1fr);
`;

export const Main = styled.main`
  ${Grid}
  margin-top: 6em;
`;

export const StyledDiv = styled.div`
  grid-column: 2;
  place-self: center;
  padding-block: 10em;
`;
