import { createSlice } from "@reduxjs/toolkit";

export const AUTHORITIES = {
    HOMEPAGE_VIEW: "HOMEPAGE_VIEW",
  };
  

  const initialState = {
    createTaskPopUpShow: false,
  };
  

  
const name = "header";

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
      showCreateTask(state, action) {
        state.createTaskPopUpShow = true
      },
      hideCreateTask(state, action) {
        state.createTaskPopUpShow = false
      },
    },
  });


  export const {
    showCreateTask,
    hideCreateTask,
  } = authSlice.actions;
  
  export default authSlice.reducer;

  