import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
  HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
};

export const WINDOW_EVENTS = {
  LOGIN_RECEIVE_DATA: "LOGIN_RECEIVE_DATA",
  LOGIN_SESSION_EXPIRED: "LOGIN_SESSION_EXPIRED",
};

const initialState = {
  logging: false,
  loggingOut: false,
  loadingUser: false,
  user: {},
  authorities: [],
  error: null,
  registered: false,
  isAuthorized: false,
};

const name = "authentication";

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    setRegisterStatus(state, action) {
      state.registered = action.payload;
    },
    loginRequest(state, action) {},
    registerRequest(state, action) {},
    registerSuccess(state, action) {
      state.registered = true;
    },
    loginSuccess(state, action) {
      state.logging = true;
      state.isAuthorized = true;
    },
    loadUserRequest(state, action) {},
    loadUserSuccess(state, action) {
      const { user } = action.payload;
      state.loadingUser = true;
      state.user = user.data;
    },
    logoutRequest(state, action) {},
    logoutSuccess(state, action) {
      state.logging = false;
      state.isAuthorized = false;
    },
    clear(state, action) {
      state = Object.assign(state, initialState);
    },
    error(state, action) {
      state.error = action.payload;
      state.logging = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  loadUserRequest,
  loadUserSuccess,
  registerRequest,
  registerSuccess,
  setRegisterStatus,
  clear,
  error,
} = authSlice.actions;

export default authSlice.reducer;
