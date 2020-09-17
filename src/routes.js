import React from "react";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  UserInfoPage,
  HouseInfoPage,
} from "pages";

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
  {
    path: "/house-info",
    component: HouseInfoPage,
    layoutProps: {
      disableHeader: false,
      disableSidebar: true,
      disableFooter: false,
    },
  },
];
