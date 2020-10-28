import { combineReducers } from 'redux';

import currentInfoApiReducer from './currentInfoApiReducer';

export const rootReducer = combineReducers({
  currentInfoApiReducer: currentInfoApiReducer,
});