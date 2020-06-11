import { takeLatest, call, put } from "redux-saga/effects";
import {
  createTaskRequest,
  createTaskSuccess,
  error
} from "./reducer";

import taskApi from "./api";

export function* creatingTaskFlow(action) {
  try {
    const res = yield call(taskApi.createTask, action.payload);
    yield put(createTaskSuccess());
  } catch (err) {
    const {
      error: { detail },
    } = err;
    yield put(error(detail));
  }
}

export default function* rootSaga() {
  yield takeLatest(createTaskRequest.type, creatingTaskFlow);
}
