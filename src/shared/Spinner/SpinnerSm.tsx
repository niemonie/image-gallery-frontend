import styled from "styled-components";

import { SpinnerMixin } from "./styles";

interface IProps {
  text?: string;
}

const SpinnerSm = styled.div<IProps>`
  ${SpinnerMixin};

  font-size: 1.2rem;
  height: 3rem;
  line-height: 3rem;
  width: 3rem;

  :before,
  :after {
    border-width: 0.2rem;
    height: 1.8rem;
    margin: -0.9rem 0 0 -0.9rem;
    width: 1.8rem;
  }
`;

export { SpinnerSm };
