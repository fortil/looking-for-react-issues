import { all, put, takeLatest, call } from 'redux-saga/effects';
import actions, { Types } from './actions';

function* getReactIssues({ type, data }: { type: string, data: boolean }) {
  try {
    if (!data || type !== Types.GET_REACT_ISSUES) {
      return;
    }
    // start loading
    yield put(actions.loading(true));
    // requesting the react issues
    const response = yield call(fetch, 'https://api.github.com/repos/facebook/react/issues');
    const body = yield response.json();
    // keep the react issues
    yield put(actions.issues(body));
    // stop loading
    yield put(actions.loading(false));
  } catch (error) {
    // stop loading
    yield put(actions.loading(false));
    console.error(error);
  }
}

function* rootSaga() {
  yield all([takeLatest(Types.GET_REACT_ISSUES, getReactIssues)]);
}

export default rootSaga;