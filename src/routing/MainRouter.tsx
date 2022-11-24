import { Button, Grid } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import Loading from "../components/global/Loading";
import Home from "../pages/Home";
import authService from "../services/authService";
import routes from "./routes";

/**
 * Handles Routing for the application
 *
 * @returns {React.FC}
 */
const MainRouter = () => {
  const [isAuthed, setIsAuthed] = React.useState(false);
  const [role, setRole] = React.useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Runs when route updates
  useEffect(() => {
    // check if the user is authenticated

    /**
     * trying to use access token instead of user in session storage
     * so it's more secure, not implemented yet
     */
    // const token = authService.getAccessToken();
    // const user = authService.parseJwt(token ? token : null);

    const user = authService.getUser();

    if (user && user?.roles) {
      console.log(user);
      setIsAuthed(() => new Date(user.exp as number) < new Date());
      setRole(user.roles[0]);
    }
  }, [location]);

  const logout = () => {
    authService.logout();
    setIsAuthed(false);
    setRole("");
    navigate("/");
  };

  return (
    <React.Fragment>
      <p>Authed: {isAuthed ? "true" : "false"}</p>
      <p>Role: {role}</p>
      {isAuthed && <Button onClick={logout}>Logout</Button>}
      {/* <Header isAuthed={isAuthed} setIsAuthed={setIsAuthed} history={history} /> */}
      <Grid container style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Grid item xs={11}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />

              {routes.map(({ link, Component, authed }, i) => {
                if (authed && !isAuthed)
                  return (
                    <Route
                      key={`${i}-${link}`}
                      path={link}
                      element={
                        <EmptyState
                          message="You need to be logged in to view this page"
                          action={() => navigate("/login")}
                          actionLabel={"Login"}
                        />
                      }
                    />
                  );

                return <Route path={link} element={<Component />} key={i} />;
              })}
              <Route
                path="*"
                element={
                  <EmptyState
                    message={"The page you are looking for does not exist"}
                    action={() => navigate("/")}
                    actionLabel={"Home"}
                  />
                }
              />
            </Routes>
          </Suspense>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainRouter;
