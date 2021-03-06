import { takeLatest, call, put } from "redux-saga/effects";
import {
  retrieveUserInfoRequest,
  retrieveUserInfoSuccess,
  updateUserInfoRequest,
  updateUserInfoSuccess,
  error,
} from "./reducer";

import userApi from "./api";

export function* retrieveUserInfoFlow(action) {
  try {
    const data = yield call(userApi.retrieveUserInfo);
    yield put(retrieveUserInfoSuccess(data));
  } catch (err) {
    yield put(error(err.toString()));
  }
}

export function* updateUserInfoFlow(action) {
  try {
    const res = yield call(userApi.updateUserInfo, action.payload);
    yield put(updateUserInfoSuccess());
  } catch (err) {
    yield put(error(err.error));
  }
}

export default function* rootSaga() {
  yield takeLatest(retrieveUserInfoRequest.type, retrieveUserInfoFlow);
  yield takeLatest(updateUserInfoRequest.type, updateUserInfoFlow);
}
