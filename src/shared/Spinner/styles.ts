import { css, keyframes } from "styled-components";

export const spinnerAnimation = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const SpinnerMixin = css`
  height: 10px;
  border-color: ${(props) => props.theme.global.colors.main} transparent
    transparent;
  color: ${(props) => props.theme.global.colors.icon};

  :before {
    border-color: rgba(0, 0, 0, 0.1);
  }
  :after {
    animation: ${spinnerAnimation} 0.6s linear;
    animation-iteration-count: infinite;
    border-color: ${(props) => props.theme.global.colors.main} transparent
      transparent;
  }
  :before,
  :after {
    justify-self: center;
    align-self: center;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    border-style: solid;
    content: "";
    left: 50%;
    position: absolute;
    top: 50%;
  }
`;
