import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

// import Routes from "./pages/routes";
import store from "./redux/store";
import { globalStyles } from "./GlobalStyles";
import Routess from "./pages/routes";
import HeaderApp from "./pages/layouts/HeaderApp";
import { SnackbarProvider } from "notistack";

const theme = createTheme(globalStyles);

const App = () => {

  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme} >
        <Provider store={store}>
        <CssBaseline>
          <HeaderApp />
          <BrowserRouter>
            <Routess />
          </BrowserRouter>
        </CssBaseline>
      </Provider>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
