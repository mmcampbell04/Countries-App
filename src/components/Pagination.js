import {
  Arrow,
  PaginationContainer,
  Pages,
  Page,
  PageLink,
} from "./styles/Pagination.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({
  cardsPerPage,
  totalCards,
  flipPages,
  currentPage,
  togglePreviousPage,
  toggleNextPage,
}) {
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
              onClick={() => flipPages(pageNumber)}
              href="!#"
              currentPage={currentPage}
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
