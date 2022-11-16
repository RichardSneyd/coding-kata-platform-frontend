import Login from "./../pages/auth/Login";

const routes = [
  /**
   * Auth
   */
  {
    name: "Login",
    link: "/login",
    Component: Login,
    authed: false,
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
