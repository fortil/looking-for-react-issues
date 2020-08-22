import { createReducer } from 'reduxsauce';
import { Types } from './actions';
import INITIAL_STATE from './initial-state';

const setData = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    default:
      state[type] = data;
      return { ...state };
  }
};

const reducer = createReducer(INITIAL_STATE, Object.assign({}, ...Object.keys(Types).map(k => ({ [k]: setData }))));

export default reducer;