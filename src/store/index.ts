import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducersApp from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducersApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);
(store as any).runSaga = sagaMiddleware.run;

export default store;
