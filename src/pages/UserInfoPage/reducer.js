import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
    HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
  };
  

  const initialState = {
   userInfo : {},
   error: null,
  };
  
  
const name = "user";

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
      retrieveUserInfoRequest() {}, 
      retrieveUserInfoSuccess(state, action) {
          state.userInfo = action.payload.user
      },
      error(state, action) {
        state.error = action.payload;
      },
    },
  });


  export const {
    retrieveUserInfoRequest,
    retrieveUserInfoSuccess,
    error,
   
  } = authSlice.actions;
  
  export default authSlice.reducer;