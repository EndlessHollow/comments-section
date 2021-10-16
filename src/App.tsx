import React from "react";
import { ThemeProvider } from "styled-components";
import { CommentsSection } from "./modules/comments-section/comments-section";
import { GlobalStyle } from "./utils/global-style";
import theme from "./utils/theme";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CommentsSection />
      </ThemeProvider>
    </>
  );
};

App.displayName = "App";

export default App;
