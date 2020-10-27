import { combineReducers } from 'redux';

import currentInfoApi from './currentInfoApi';

export const Reducers = combineReducers({
  currentInfoApi: currentInfoApi
});