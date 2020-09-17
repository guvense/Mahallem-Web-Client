import { takeLatest, call, put } from "redux-saga/effects";
import {
  retrieveHouseInfoRequest,
  error,
  retrieveHouseInfoSuccess,
} from "./reducer";

import houseApi from "./api";

export function* retrieveHouseInfoFlow(action) {
  try {
    const data = yield call(houseApi.retrieveHouseInfo);
    if (data.success) {
      yield put(retrieveHouseInfoSuccess(data.data));
    } else {
      yield put(error(data.error_message.message));
    }
    console.log(data);
  } catch (err) {
    yield put(error(err.toString()));
  }
}

export default function* rootSaga() {
  yield takeLatest(retrieveHouseInfoRequest.type, retrieveHouseInfoFlow);
}
