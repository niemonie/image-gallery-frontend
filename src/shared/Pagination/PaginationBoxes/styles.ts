import { css } from "styled-components";

export const MediaQueryMixin = css`
  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    font-size: 1.6rem;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

export const PaginationBoxMixin = css`
  border: 1px solid #e1e4e8;
  background-color: ${(props) => props.theme.global.colors.background};
  color: ${(props) => props.theme.global.colors.font};
  ${MediaQueryMixin}
`;
