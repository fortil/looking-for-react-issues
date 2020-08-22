import { createReducer } from 'reduxsauce';
import { Types } from './actions';
import INITIAL_STATE from './initial-state';

const setData = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case Types.ISSUES:
      state[type] = [...data];
      return { ...state };
    case Types.LOADING:
      state[type] = data;
      return { ...state };
    case Types.ISSUES_SELECTED:
      state[type] = [...data];
      return { ...state };
    default:
      return state;
  }
};

const reducer = createReducer(INITIAL_STATE, Object.assign({}, ...Object.keys(Types).map(k => ({ [k]: setData }))));

export default reducer;