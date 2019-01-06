import { combineReducers } from 'redux';
import { acornReducer } from './acorn';

export default (rootReducer = combineReducers({
  acornReducer,
}));
