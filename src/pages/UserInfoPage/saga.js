import { takeLatest, call, put } from "redux-saga/effects";
import {
    retrieveUserInfoRequest,
    retrieveUserInfoSuccess,
    error
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

export default function* rootSaga() {
  yield takeLatest(retrieveUserInfoRequest.type, retrieveUserInfoFlow);
}
