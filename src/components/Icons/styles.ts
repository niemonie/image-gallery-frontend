import { css } from "styled-components";

export const iconColorMixinMain = css`
  path {
    fill: ${(props) => props.theme.global.colors.main};
  }
`;

export const iconColorMixinDark = css`
  path {
    fill: ${(props) => props.theme.global.colors.font};
  }
`;
