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
  
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
font-size: 56.25%
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
 font-size: 50%;
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
font-size: 75%;
}
`;

export { GlobalStyle };
