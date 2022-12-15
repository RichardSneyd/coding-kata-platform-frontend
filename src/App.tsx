import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import MainRouter from "./routing/MainRouter";

/**
 * Entry point for the application
 *
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
