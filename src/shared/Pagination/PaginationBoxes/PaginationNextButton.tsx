import React from "react";
import styled from "styled-components";
import Media from "react-media";

import { PaginationBoxMixin } from "./styles";
import { iconColorMixinMain } from "components/Icons/styles";
import { RightArrowIcon } from "components/Icons/ArrowIcons";

interface IProps {
  onClick(): void;
}

const PaginationNextButton = ({ onClick }: IProps) => {
  return (
    <StyledPaginationNextButton onClick={() => onClick()}>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && <RightArrowIcon size={"6rem"} />}
            {matches.medium && <RightArrowIcon size={"2rem"} />}
            {matches.large && <RightArrowIcon size={"1.5rem"} />}
          </>
        )}
      </Media>
    </StyledPaginationNextButton>
  );
};

const StyledPaginationNextButton = styled.button`
  ${PaginationBoxMixin};
  padding: 0.6rem 0.4rem 0.5rem;

  :hover,
  :active {
    ${iconColorMixinMain}
  }
`;
export { PaginationNextButton };
