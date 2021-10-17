import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { CommentsSection } from "./modules/comments-section/comments-section";
import { store } from "./redux/store";
import { GlobalStyle } from "./utils/global-style";
import theme from "./utils/theme";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CommentsSection />
      </ThemeProvider>
    </Provider>
  );
};

App.displayName = "App";

export default App;
