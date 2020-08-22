import { all, put, takeLatest } from 'redux-saga/effects';
import action, { Types } from './actions';

function* getClick({ type, data }) {
  try {
    if (!data) {
      return;
    }
    yield put(action.loading({ init: true }));
    yield new Promise((res) => setTimeout(res, 3000));
    yield put(action.loading({ init: false }));
  } catch (error) {
    yield put(action.loading({ init: false }));
  }
}

function* rootSaga() {
  yield all([takeLatest(Types.CLICK_SEARCH, getClick)]);
}

export default rootSaga;