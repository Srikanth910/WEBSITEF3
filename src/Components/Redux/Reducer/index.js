import { combineReducers } from 'redux';

import errorReducer from '../Reducer/errorrReducer';
import authReducer from '../Reducer/authReducer';

export default combineReducers({
 
  error: errorReducer,
  auth: authReducer
});
