import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
  HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
};

const initialState = {
  house: {},
  error: null,
  userHouseUpdateStatus: false,
};

const name = "house";

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    retrieveHouseInfoRequest() {},
    retrieveHouseInfoSuccess(state, action) {
      state.house = action.payload.house;
    },
    updateHouseInfoRequest() {},
    updateHouseInfoSuccess(state) {
      state.userHouseUpdateStatus = true;
    },
    closeHouseUpdateModal(state) {
      state.userHouseUpdateStatus = false;
    },
    openHouseUpdateModal(state) {
      state.userHouseUpdateStatus = true;
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
  error,
} = authSlice.actions;

export default authSlice.reducer;
