import { combineReducers } from 'redux';

import errorReducer from '../Reducer/errorrReducer';
import authReducer from '../Reducer/authReducer';
import game from '../Reducer/game'
export default combineReducers({
  game,
  error: errorReducer,
  auth: authReducer
});
