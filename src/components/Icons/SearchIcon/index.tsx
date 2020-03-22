import React from "react";
import styled from "styled-components";
import { mdiMagnify } from "@mdi/js";

import { Icon } from "../Icon";

interface IProps {
  size: string;
}

const SearchIcon = ({ size }: IProps) => {
  return (
    <StyledSearchIcon>
      <Icon path={mdiMagnify} size={size} />
    </StyledSearchIcon>
  );
};

const StyledSearchIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  path {
    fill: ${(props) => props.theme.global.colors.font};
  }
`;

export { SearchIcon };
