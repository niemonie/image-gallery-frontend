import React from "react";
import { mdiChevronLeft } from "@mdi/js";
import styled from "styled-components";

import { Icon } from "../Icon";
import { iconColorMixinDark } from "../styles";

interface IProps {
  size: string;
}

const LeftArrowIcon = ({ size }: IProps) => {
  return (
    <StyledLeftArrowIcon>
      <Icon path={mdiChevronLeft} size={size} />
    </StyledLeftArrowIcon>
  );
};
const StyledLeftArrowIcon = styled.div`
  ${iconColorMixinDark}
`;

export { LeftArrowIcon };
