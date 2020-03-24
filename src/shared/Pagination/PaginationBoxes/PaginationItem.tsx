import React from "react";
import styled, { css } from "styled-components";

import { PaginationBoxMixin } from "./styles";

interface IProps {
  isActive: boolean;
  pageNumber: number;
  onClick(pageNumber: number): void;
}

const PaginationItem = ({ isActive, pageNumber, onClick }: IProps) => {
  return (
    <StyledPaginationItem
      isActive={isActive}
      onClick={() => onClick(pageNumber)}
    >
      {pageNumber}
    </StyledPaginationItem>
  );
};

const ActiveMixin = css`
  background-color: ${(props) => props.theme.global.colors.markedBackground};
  color: ${(props) => props.theme.global.colors.main};
`;

const StyledPaginationItem = styled.button`
  ${PaginationBoxMixin};
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${(props: { isActive: boolean }) => (props.isActive ? ActiveMixin : null)};

  :hover,
  :active {
    color: ${(props) => props.theme.global.colors.main};
  }
`;

export { PaginationItem };
