import React from "react";
import styled from "styled-components";

import { PaginationBoxMixin } from "./styles";

const PaginationGap = () => {
  return <StyledPaginationGap>...</StyledPaginationGap>;
};

const StyledPaginationGap = styled.div`
  ${PaginationBoxMixin};
  padding: 0.5rem 1rem;
`;
export { PaginationGap };
