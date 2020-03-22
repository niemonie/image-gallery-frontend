import React from "react";
import styled from "styled-components";

import { CloseIcon } from "components/Icons/CloseIcon";

interface IProps {
  onClick(): void;
  isVisible: boolean;
}

const ResetButton = ({ onClick, isVisible }: IProps) => {
  return (
    <StyledResetButton
      id="reset-button"
      type="button"
      onClick={onClick}
      isVisible={isVisible}
    >
      <CloseIcon size={"2rem"} />
    </StyledResetButton>
  );
};

const StyledResetButton = styled.button`
  cursor: pointer;
  font-size: 1.9rem;
  line-height: 2.3rem;
  border: none;
  background-color: ${(props) => props.theme.global.colors.markedBackground};

  display: ${(props: { isVisible: boolean }) =>
    props.isVisible ? "inline-block" : "none"};
`;

export { ResetButton };
