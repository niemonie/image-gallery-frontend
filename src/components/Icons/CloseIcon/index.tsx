import React from "react";
import styled from "styled-components";
import { mdiClose } from "@mdi/js";

import { Icon } from "../Icon";

interface IProps {
  size: string;
}

const CloseIcon = ({ size }: IProps) => {
  return (
    <StyledCaseIcon>
      <Icon path={mdiClose} size={size} />
    </StyledCaseIcon>
  );
};

const StyledCaseIcon = styled.div`
  display: flex;
  align-items: center;
  path {
    fill: ${(props) => props.theme.global.colors.fontDark};
  }
`;

export { CloseIcon };
