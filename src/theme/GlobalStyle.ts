import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.global.fonts.main};
    font-size: ${(props) => props.theme.global.fontSizes.main};
    background-color: ${(props) => props.theme.global.colors.background};
    color: ${(props) => props.theme.global.colors.font};
    line-height: ${(props) => props.theme.global.lineHeights.main};
  }
   html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  button {
  outline: none;
  }
`;

export { GlobalStyle };
