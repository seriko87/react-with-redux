import { combineReducers } from 'redux';
import reducer from './accountReducer';

const reducers = combineReducers({
  account: reducer,
});

export default reducers;
