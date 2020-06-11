import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
    HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
  };
  

  const initialState = {
   createdTask : {},
   error: null,
  };
  

  
const name = "createTask";

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
      createTaskRequest() {}, 
      createTaskSuccess(state, action) {
          state.createdTask = true
      },
      error(state, action) {
        state.error = action.payload;
      },
    },
  });


  export const {
    createTaskRequest,
    createTaskSuccess,
    error,
   
  } = authSlice.actions;
  
  export default authSlice.reducer;

  