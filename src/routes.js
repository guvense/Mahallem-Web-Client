import React from "react";

import { HomePage, LoginPage, RegisterPage, UserInfoPage } from "pages";

export const routes = [
  {
    path: "/",
    component: HomePage,
    protect: true,
    layoutProps: {
      disableHeader: false,
      disableSidebar: true,
      disableFooter: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    layoutProps: {
      disableHeader: true,
      disableSidebar: true,
      disableFooter: true,
    },
  },
  {
    path: "/register",
    component: RegisterPage,
    layoutProps: {
      disableHeader: true,
      disableSidebar: true,
      disableFooter: true,
    },
  },
  {
    path: "/user-info",
    component: UserInfoPage,
    layoutProps: {
      disableHeader: false,
      disableSidebar: true,
      disableFooter: false,
    },
  },
];
