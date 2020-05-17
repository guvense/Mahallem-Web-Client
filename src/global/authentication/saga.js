import { takeLatest, call, put } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  logoutRequest,
  logoutSuccess,
  loadUserRequest,
  loadUserSuccess,
  registerRequest,
  registerSuccess,
  error,
} from "./reducer";

import authApi from "./api";

export function* loginFlow(action) {
  try {
    const res = yield call(authApi.login, action.payload);
    yield put(loginSuccess());
    yield put(loadUserRequest());
  } catch (err) {
    const {
      error: { detail },
    } = err;
    yield put(error(detail));
  }
}

export function* registerFlow(action) {
  try {
    yield call(authApi.register, action.payload);
    yield put(registerSuccess());
  } catch (err) {
    const {
      error: { detail },
    } = err;
    yield put(error(detail));
  }
}

export function* loadUser(action) {
  try {
    const data = yield call(authApi.loadUser);
    yield put(loadUserSuccess(data));
  } catch (err) {
    yield put(error(err.toString()));
  }
}

export function* logoutFlow(action) {
  try {
    yield call(authApi.logout);
    yield put(logoutSuccess());
  } catch (err) {
    yield put(error(err.toString()));
  }
}

export default function* rootSaga() {
  yield takeLatest(loginRequest.type, loginFlow);
  yield takeLatest(loadUserRequest.type, loadUser);
  yield takeLatest(logoutRequest.type, logoutFlow);
  yield takeLatest(registerRequest.type, registerFlow);
}
