import React from "react";
import styled from "styled-components";
import Media from "react-media";

import { PaginationBoxMixin } from "./styles";
import { iconColorMixinMain } from "components/Icons/styles";
import { LeftArrowIcon } from "components/Icons/ArrowIcons";

interface IProps {
  onClick(): void;
}

const PaginationPreviousButton = ({ onClick }: IProps) => {
  return (
    <StyledPaginationPreviousButton onClick={() => onClick()}>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && <LeftArrowIcon size={"6rem"} />}
            {matches.medium && <LeftArrowIcon size={"2rem"} />}
            {matches.large && <LeftArrowIcon size={"1.5rem"} />}
          </>
        )}
      </Media>
    </StyledPaginationPreviousButton>
  );
};

const StyledPaginationPreviousButton = styled.button`
  ${PaginationBoxMixin};
  padding: 0.6rem 0.4rem 0.5rem;

  :hover,
  :active {
    ${iconColorMixinMain}
  }
`;
export { PaginationPreviousButton };
