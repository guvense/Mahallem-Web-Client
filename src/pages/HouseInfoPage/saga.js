import { takeLatest, call, put } from "redux-saga/effects";
import {
  retrieveHouseInfoRequest,
  error,
  retrieveHouseInfoSuccess,
  createHouseInfoRequest,
  createHouseInfoSuccess,
  updateHouseInfoRequest,
  updateHouseInfoSuccess,
} from "./reducer";

import houseApi from "./api";

export function* retrieveHouseInfoFlow() {
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

export function* createHouseFlow(action) {
  try {
    const data = yield call(houseApi.createHouse, action.payload);
    if (data.success) {
      yield put(createHouseInfoSuccess(data.data));
    } else {
      yield put(error(data.error_message.message));
    }
    console.log(data);
  } catch (err) {
    yield put(error(err.toString()));
  }
}

export function* updateHouseFlow(action) {
  try {
    const data = yield call(houseApi.updateHouseInfo, action.payload);
    if (data.success) {
      yield put(updateHouseInfoSuccess(data.data));
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
  yield takeLatest(createHouseInfoRequest.type, createHouseFlow);
  yield takeLatest(updateHouseInfoRequest.type, updateHouseFlow);
}
