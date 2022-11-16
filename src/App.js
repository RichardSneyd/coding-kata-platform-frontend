import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

// import TopBar from "./components/TopBar";
// import PlaygroundContainer from "./containers/PlaygroundContainer";
import theme from "./theme";
import MainRouter from "./routing/MainRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainRouter />
        </ThemeProvider>
        {/* <PlaygroundContainer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
