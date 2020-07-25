import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
    HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
  };
  

  const initialState = {
   userInfo : {},
   userInfoUpdateModalStatus: false,
   userInfoUpdateStatus:false,
   error: null,
  };
  
  
const name = "user";

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
      closeUserUpdateModal(state){
        state.userInfoUpdateModalStatus = false
      },
      openUserUpdateModal(state){
        state.userInfoUpdateModalStatus = true
      },
      retrieveUserInfoRequest() {}, 
      retrieveUserInfoSuccess(state, action) {
          state.userInfo = action.payload.user
      },
      updateUserInfoRequest(){},
      updateUserInfoSuccess(state) {
        state.userInfoUpdateStatus = true
        state.userInfoUpdateModalStatus = false
    },
      error(state, action) {
        state.error = action.payload;
      },
    },
  });


  export const {
    retrieveUserInfoRequest,
    retrieveUserInfoSuccess,
    updateUserInfoRequest,
    updateUserInfoSuccess,
    closeUserUpdateModal,
    openUserUpdateModal,
    error,
   
  } = authSlice.actions;
  
  export default authSlice.reducer;