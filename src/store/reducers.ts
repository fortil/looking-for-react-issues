import { createReducer } from 'reduxsauce';
import { Types } from './actions';
import INITIAL_STATE, { IInitialState, IIssue } from './initial-state';

interface IParams {
  type: string;
  data: boolean | IIssue[]
}
interface ISeData {
  (state: IInitialState, params: IParams): IInitialState;
}

const setData: ISeData = (state = INITIAL_STATE, { type, data }) => {
  switch (type) {
    case Types.ISSUES:
      if (Array.isArray(data)) {
        state.ISSUES = [...data];
      }
      return { ...state };
    case Types.LOADING:
      if (typeof data === 'boolean') {
        state.LOADING = data;
      }
      return { ...state };
    case Types.ISSUES_SELECTED:
      if (Array.isArray(data)) {
        state.ISSUES_SELECTED = [...data];
      }
      return { ...state };
    default:
      return state;
  }
};

const reducer = createReducer(INITIAL_STATE, Object.assign({}, ...Object.keys(Types).map(k => ({ [k]: setData }))));

export default reducer;