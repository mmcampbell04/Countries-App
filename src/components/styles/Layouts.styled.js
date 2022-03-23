import styled, { css } from "styled-components";

export const Grid = css`
  display: grid;
  grid-template-columns: minmax(2em, 1fr) minmax(0px, 85em) minmax(2em, 1fr);
`;

export const Main = styled.main`
  ${Grid}
`;
