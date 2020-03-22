import React from "react";
import styled from "styled-components";

const SearchButton = () => {
  return (
    <StyledSearchButton id="search-button" type="submit">
      Search
    </StyledSearchButton>
  );
};

const StyledSearchButton = styled.button`
  border: 1px solid
    ${(props) => props.theme.global.colors.markedBackgroundDarker};
  opacity: 0.8;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.global.colors.markedBackgroundDarker};
  cursor: pointer;
  font-size: 1.9rem;
  line-height: 2.3rem;
  color: #8f9297;
  padding: 0.8rem 2.3rem;
`;

export { SearchButton };
