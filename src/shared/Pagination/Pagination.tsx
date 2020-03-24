import React, { memo, useCallback } from "react";
import { range } from "lodash";
import styled from "styled-components";

import { PaginationItem } from "./PaginationBoxes";
import { PaginationGap } from "./PaginationBoxes";
import { PaginationPreviousButton } from "./PaginationBoxes";
import { PaginationNextButton } from "./PaginationBoxes";

const PAGES_MARGIN = 1;
const FIRST_PAGE_MARGIN = 2;
const LAST_PAGE_MARGIN = 6;

interface IProps {
  activePage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = memo(({ activePage, totalPages, onPageChange }: IProps) => {
  const pages = createPages(activePage, totalPages, PAGES_MARGIN);

  const isFirstPageActive = activePage === 1;
  const isLastPageActive = activePage === totalPages;

  const handleFirstPageClick = useCallback(() => {
    if (activePage > 1) {
      onPageChange(1);
    }
  }, [activePage, onPageChange]);

  const handlePrevPageClick = useCallback(() => {
    if (activePage > 1) {
      onPageChange(activePage - 1);
    }
  }, [activePage, onPageChange]);

  const handlePageClick = useCallback(
    (page: number) => {
      if (activePage !== page) {
        onPageChange(page);
      }
    },
    [activePage, onPageChange]
  );

  const handleNextPageClick = useCallback(() => {
    if (activePage < totalPages) {
      onPageChange(activePage + 1);
    }
  }, [activePage, totalPages, onPageChange]);

  const handleLastPageClick = useCallback(() => {
    if (activePage < totalPages) {
      onPageChange(totalPages);
    }
  }, [activePage, totalPages, onPageChange]);

  return totalPages > 1 ? (
    <PaginationContainer>
      <PaginationWrapper>
        {activePage > 1 && (
          <PaginationPreviousButton onClick={handlePrevPageClick} />
        )}
        {activePage > 2 && (
          <PaginationItem
            isActive={isFirstPageActive}
            pageNumber={1}
            onClick={handleFirstPageClick}
          />
        )}
        {activePage > FIRST_PAGE_MARGIN + 1 && <PaginationGap />}
        {pages.map((page, index) => {
          return (
            <PaginationItem
              key={index}
              isActive={page === activePage}
              pageNumber={page}
              onClick={handlePageClick}
            />
          );
        })}
        {totalPages > LAST_PAGE_MARGIN && <PaginationGap />}
        {totalPages > LAST_PAGE_MARGIN - 1 && (
          <PaginationItem
            isActive={isLastPageActive}
            pageNumber={totalPages}
            onClick={handleLastPageClick}
          />
        )}
        {activePage !== totalPages && (
          <PaginationNextButton onClick={handleNextPageClick} />
        )}
      </PaginationWrapper>
    </PaginationContainer>
  ) : null;
});

const createPages = (currentPage: number, totalPages: number, margin: number) =>
  range(currentPage - margin, currentPage + margin + 2).filter(
    (page) => page >= 1 && page <= totalPages
  );

const PaginationContainer = styled.div`
  display: flex;
  padding-top: ${(props) => props.theme.global.padding.container};
`;

const PaginationWrapper = styled.div`
  display: flex;
`;
export { Pagination };
