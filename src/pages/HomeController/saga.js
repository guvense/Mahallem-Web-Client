import { takeLatest, call, put } from "redux-saga/effects";
import {
  retriveHomeMatesRequest,
  retriveHomeMatesSuccess,
  error
} from "./reducer";

import homeApi from "./api";

export function* retrivingHomeMatesFlow() {
  try {
    const res = yield call(homeApi.retriveHomeMates);
    yield put(retriveHomeMatesSuccess(res));
  } catch (err) {
    const {
      error: { detail },
    } = err;
    yield put(error(detail));
  }
}

export default function* rootSaga() {
  yield takeLatest(retriveHomeMatesRequest.type, retrivingHomeMatesFlow);
}
