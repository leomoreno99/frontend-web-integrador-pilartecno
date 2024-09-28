import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { createTheme, CssBaseline } from "@mui/material";
// import Routes from "./pages/routes";
// import { globalStyles } from "./GlobalStyles";
import store from "./redux/store";
import Routess from "./pages/routes";
import HeaderApp from "./pages/layouts/HeaderApp";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "./components/ThemeProvider";


// const theme = createTheme(globalStyles);

const App = () => {
 
  return (
    <SnackbarProvider maxSnack={3}>
      {/* <ThemeProvider theme={theme} > */}
        <Provider store={store}>
          <ThemeProvider >
        {/* <CssBaseline> */}
          <HeaderApp />
          <BrowserRouter>
            <Routess />
          </BrowserRouter>
        {/* </CssBaseline> */}
        </ThemeProvider>
      </Provider>
      {/* </ThemeProvider> */}
    </SnackbarProvider>
  );
};

export default App;
