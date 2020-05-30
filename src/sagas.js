import { all, spawn, call } from 'redux-saga/effects';
import authSaga from 'global/authentication/saga';
import taskSaga from './pages/CreateTaskModal/saga'

export default function* rootSaga () {
    const sagas = [
        authSaga,
        taskSaga
    ];

    yield all(sagas.map(saga =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    );
}
