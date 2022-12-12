import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Login from "./auth/Login";

const Home = () => {
  const navigate = useNavigate();
  const user = authService.getUser();

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

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
