import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
    HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
  };
  

  const initialState = {
   homemates : [],
   error: null,
  };
  

  
const name = "home";

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
      retriveHomeMatesRequest() {}, 
      retriveHomeMatesSuccess(state, action) {
          state.homemates = action.payload.homemates;
      },
      error(state, action) {
        state.error = action.payload;
      },
    },
  });


  export const {
    retriveHomeMatesRequest,
    retriveHomeMatesSuccess,
    error,
   
  } = authSlice.actions;
  
  export default authSlice.reducer;

  