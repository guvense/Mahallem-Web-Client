import { createSlice } from '@reduxjs/toolkit';

export const AUTHORITIES = {
    HOMEPAGE_VIEW: 'HOMEPAGE_VIEW',
};

export const WINDOW_EVENTS = {
    LOGIN_RECEIVE_DATA : 'LOGIN_RECEIVE_DATA',
    LOGIN_SESSION_EXPIRED : 'LOGIN_SESSION_EXPIRED'
};

const initialState = {
    logging: false,
    loggingOut: false,
    loadingUser: false,
    user: {},
    authorities: [],
    error: null
};

const name = "authenticate";

const authSlice = createSlice({
    name,
    initialState,
    reducers: {
        loginRequest(state, action){
            state.logging = true;
        },
        loginSuccess(state, action){
            state.logging = false;
        },
        loadUserRequest(state, action){
            state.loadingUser = true;
        },
        loadUserSuccess(state, action){
            const { user } = action.payload;
            console("loaduserSuccess")
            console.log(action.payload)
            console("loaduserSuccess")

            state.loadingUser = false;
            state.user = user;
        },
        logoutRequest(state, action ){// create unused reducers with createAction
        },
        logoutSuccess(state, action ){
        },
        clear(state,action){
            state = Object.assign(state, initialState);
        },
        error(state, action){
            state.error = action.payload;
        }
    }
});

export const {
    loginRequest,
    loginSuccess,
    logoutRequest,
    logoutSuccess,
    loadUserRequest,
    loadUserSuccess,
    clear,
    error
} = authSlice.actions;

export default authSlice.reducer;