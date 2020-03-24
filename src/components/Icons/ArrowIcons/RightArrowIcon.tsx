import React from "react";
import styled from "styled-components";
import { mdiChevronRight } from "@mdi/js";

import { iconColorMixinDark } from "../styles";

import { Icon } from "../Icon";

interface IProps {
  size: string;
}

const RightArrowIcon = ({ size }: IProps) => {
  return (
    <StyledRightArrowIcon>
      <Icon path={mdiChevronRight} size={size} />
    </StyledRightArrowIcon>
  );
};
const StyledRightArrowIcon = styled.div`
  ${iconColorMixinDark}

  svg {
    width: 2rem;
  }
`;
export { RightArrowIcon };
