import { DefaultTheme } from "styled-components";

const colors = {
  orange: "#f7a033",
  orangeWithOpacity: "rgba(247, 160, 51, 0.2)",
  lighterGray: "#F2F2F2",
  lightGray: "#ebebeb",
  gray: "#7d7d8e",
  darkGray: "#262626",
  white: "#fff",
};

const fontSizes = {
  regular: "1.3rem",
  large: "1.8rem",
  xlarge: "3.6rem",
};

const lineHeights = {
  regular: "1.538462",
  big: "2",
  small: "1.2",
};

const padding = {
  small: "1rem",
  medium: "2rem",
  large: "4rem",
};

export const theme: DefaultTheme = {
  global: {
    colors: {
      main: colors.orange,
      mainWithOpacity: colors.orangeWithOpacity,
      background: colors.white,
      markedBackground: colors.lighterGray,
      markedBackgroundDarker: colors.lightGray,
      font: colors.gray,
      fontDark: colors.darkGray,
      icon: colors.gray,
      iconDark: colors.darkGray,
      border: colors.lighterGray,
    },
    fonts: {
      main: "Roboto, sans-serif",
    },
    fontSizes: {
      main: fontSizes.regular,
    },
    padding: {
      box: padding.medium,
      container: padding.large,
    },
    lineHeights: {
      main: lineHeights.regular,
      rows: lineHeights.small,
    },
  },
};
