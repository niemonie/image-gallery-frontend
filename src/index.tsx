import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./theme";
import { Spinner } from "./shared/Spinner";

const App = lazy(() => import("./App"));
const Providers = lazy(() => import("./Providers"));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Suspense fallback={<Spinner size={"lg"} />}>
      <Providers>
        <App />
      </Providers>
    </Suspense>
  </ThemeProvider>,
  document.getElementById("root")
);
