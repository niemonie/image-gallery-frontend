import "styled-components";
import { FontSizes, Padding } from "styled-components";

declare module "styled-components" {
  enum Colors {
    Main = "main",
    MainWithOpacity = "mainWithOpacity",
    Font = "font",
    Background = "background",
    MarkedBackground = "markedBackground",
    Icon = "icon",
    IconDark = "iconDark",
    FontDark = "fontDark",
    Border = "border",
    MarkedBackgroundDarker = "markedBackgroundDarker",
  }
  enum Fonts {
    Main = "main",
  }
  enum FontSizes {
    Main = "main",
  }

  enum Padding {
    Box = "box",
    Container = "container",
  }

  enum LineHeights {
    Main = "main",
    Rows = "rows",
  }

  interface DefaultTheme {
    global: {
      colors: {
        [key in Colors]: string;
      };
      fonts: {
        [key in Fonts]: string;
      };
      fontSizes: {
        [key in FontSizes]: string;
      };
      lineHeights: {
        [key in LineHeights]: string;
      };
      padding: {
        [key in Padding]: string;
      };
    };
  }
}

export { DefaultTheme };
