import React from "react";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Login from "./../pages/auth/Login";

/**
 * Route Types
 */
export type IRouteType = {
  name: string;
  link: string;
  Component: React.FC;
  authed: boolean;
};

const routes: IRouteType[] = [
  /**
   * Auth
   */
  {
    name: "Login",
    link: "/login",
    Component: Login,
    authed: false,
  },
  {
    name: "Signup",
    link: "/signup",
    Component: Signup,
    authed: false,
  },

  {
    name: "Dashboard",
    link: "/dashboard",
    Component: Dashboard,
    authed: true,
  },
  {
    name: "Profile",
    link: "/profile",
    Component: Profile,
    authed: true,
  },

  // /**
  //  * Modules
  //  */
  // {
  //   name: "Create Module",
  //   link: "/create/module",
  //   component: CreateModule,
  //   authed: true,
  // },
];

export default routes;
