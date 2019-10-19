import { combineReducers } from 'redux';
import userReducer from './containers/home/reducer';
import loaderReducer from './containers/Loader/reducer';

export default combineReducers({
  "users" : userReducer,
  "loader": loaderReducer
});
