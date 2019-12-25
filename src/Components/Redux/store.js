import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
 import rootReducer from './Reducer'
import { compose } from 'redux';
  const middleware=[thunk]
   const initialstate={}

const store =createStore(
    rootReducer,
     initialstate,

 compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       
      ));

export default store;
 