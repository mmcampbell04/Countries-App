import {
  Arrow,
  PaginationContainer,
  Pages,
  Page,
  PageLink,
} from "./styles/Pagination.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../Context";

export default function Pagination() {
  const {
    filteredCountries,
    toggleNextPage,
    togglePreviousPage,
    flipPages,
    cardsPerPage,
    currentPage,
  } = useContext(Context);

  const totalCards = filteredCountries.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <Arrow onClick={togglePreviousPage}>
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
      </Arrow>

      <Pages>
        {pageNumbers.map((pageNumber) => (
          <Page key={pageNumber}>
            <PageLink
              to={`/home${pageNumber === 1 ? "" : `?page=${pageNumber}`}`}
              onClick={() => flipPages(pageNumber)}
              page={currentPage}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </PageLink>
          </Page>
        ))}
      </Pages>
      <Arrow onClick={toggleNextPage}>
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </Arrow>
    </PaginationContainer>
  );
}
