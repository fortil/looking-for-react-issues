/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducersApp from './reducers';
import saga from './sagas';

declare global {
  /* tslint:disable:interface-name */
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

function createMiddleware(middlewares: any[]) {
  const middleware = applyMiddleware(...middlewares);
  /* tslint:disable:strict-type-predicates */
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  return composeEnhancers(middleware);
}


const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducersApp, applyMiddleware(sagaMiddleware));
const store = createStore(reducersApp, createMiddleware([sagaMiddleware]));

sagaMiddleware.run(saga);
(store as any).runSaga = sagaMiddleware.run;

export default store;
