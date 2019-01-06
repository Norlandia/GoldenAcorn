import { combineReducers } from 'redux';
import { acornReducer } from './acorn';

const rootReducer = combineReducers({
  acornReducer,
});

export default rootReducer;
