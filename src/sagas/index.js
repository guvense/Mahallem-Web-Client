import { all, fork } from 'redux-saga/effects';

import app from './app';
import user from './user';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(app), fork(user)]);
}
