import React from "react";
import styled from "styled-components";

import { SearchBox } from "shared/SearchBox";

import { SearchIcon } from "components/Icons/SearchIcon";

const GallerySearchBox = () => {
  return (
    <StyledGallerySearchBox>
      <SearchIcon size={"3rem"} />
      <SearchBox placeholderMessage={"Find images"} />
    </StyledGallerySearchBox>
  );
};

const StyledGallerySearchBox = styled.div`
  display: flex;
  width: 70rem;
  margin-left: ${(props) => props.theme.global.padding.box};
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid
    ${(props) => props.theme.global.colors.markedBackgroundDarker};
  opacity: 0.8;
  border-radius: 10px;
  background-color: ${(props) => props.theme.global.colors.markedBackground};
`;

export { GallerySearchBox };
