import styled from "styled-components";

import { SpinnerMixin } from "./styles";

interface IProps {
  text?: string;
}

const SpinnerLg = styled.div<IProps>`
  ${SpinnerMixin};

  font-size: 5rem;
  height: 10rem;
  line-height: 10rem;
  width: 10rem;

  :before,
  :after {
    border-width: 0.3rem;
    height: 4.8rem;
    margin: -2.4rem 0 0 -2.4rem;
    width: 4.8rem;
  }
`;
export { SpinnerLg };
