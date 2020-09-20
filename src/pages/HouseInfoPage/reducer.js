import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
  HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
};

const initialState = {
  house: {},
  error: null,
  userHouseUpdateStatus: false,
  userHouseCreateStatus: false,
};

const name = "house";

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    retrieveHouseInfoRequest() {},
    retrieveHouseInfoSuccess(state, action) {
      state.house = action.payload;
    },
    updateHouseInfoRequest() {},
    updateHouseInfoSuccess(state, action) {
      state.userHouseUpdateStatus = false;
      state.house = action.payload;
      state.error = null;
    },
    closeHouseUpdateModal(state) {
      state.userHouseUpdateStatus = false;
    },
    openHouseUpdateModal(state) {
      state.userHouseUpdateStatus = true;
    },
    createHouseInfoRequest() {},
    createHouseInfoSuccess(state, action) {
      state.userHouseCreateStatus = false;
      state.house = action.payload;
      state.error = null;
    },
    closeHouseCreateModal(state) {
      state.userHouseCreateStatus = false;
    },
    openHouseCreateModal(state) {
      state.userHouseCreateStatus = true;
    },
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  retrieveHouseInfoRequest,
  retrieveHouseInfoSuccess,
  updateHouseInfoRequest,
  updateHouseInfoSuccess,
  closeHouseUpdateModal,
  openHouseUpdateModal,
  createHouseInfoRequest,
  createHouseInfoSuccess,
  closeHouseCreateModal,
  openHouseCreateModal,
  error,
} = authSlice.actions;

export default authSlice.reducer;
