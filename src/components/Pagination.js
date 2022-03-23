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

export default function Pagination(
  togglePreviousPage,
  toggleNextPage,
  flipPages,
  currentPage,
  cardsPerPage,
  totalCards
) {
  // const { countryData } = useContext(Context);

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
