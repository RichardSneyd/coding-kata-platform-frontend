import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  //custom theme will go here
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
      marginBottom: "20px",
    },
  },
});

export default theme;
