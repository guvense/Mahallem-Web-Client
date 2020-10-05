import { all, spawn, call } from "redux-saga/effects";
import authSaga from "global/authentication/saga";
import taskSaga from "./pages/TaskPage/saga";
import homeSaga from "./pages/HomeController/saga";
import userSaga from "./pages/UserInfoPage/saga";
import houseSaga from "./pages/HouseInfoPage/saga";

export default function* rootSaga() {
  const sagas = [authSaga, taskSaga, homeSaga, userSaga, houseSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
