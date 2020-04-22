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
        },
        loginSuccess(state, action){
            state.logging = true;
        },
        loadUserRequest(state, action){
        },
        loadUserSuccess(state, action){
            const { user } = action.payload;
            state.loadingUser = true;
            state.user = user;
        },
        logoutRequest(state, action ){
        },
        logoutSuccess(state, action ){
            state.logging = false;
        },
        clear(state,action){
            state = Object.assign(state, initialState);
        },
        error(state, action){
            state.error = action.payload;
            state.logging = false;
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