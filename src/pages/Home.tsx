import { Grid, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Login from "./auth/Login";

const Home = () => {
  return (
    <>
      <Grid container component="main">
        <Grid item xs={12} sm={8} md={6} margin="auto">
          <Login />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
