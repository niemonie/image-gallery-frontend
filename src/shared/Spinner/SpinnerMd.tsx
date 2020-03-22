import styled from "styled-components";

import { SpinnerMixin } from "./styles";

interface IProps {
  text?: string;
}

const SpinnerMd = styled.div<IProps>`
  ${SpinnerMixin};

  font-size: 16px;
  height: 32px;
  line-height: 32px;
  width: 32px;

  :before,
  :after {
    border-width: 0.2rem;
    height: 2.4rem;
    margin: -1.2rem 0 0 -1.2rem;
    width: 2.4rem;
  }
`;

export { SpinnerMd };
