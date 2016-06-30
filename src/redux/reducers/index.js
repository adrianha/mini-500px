import { combineReducers } from 'redux';

import featureReducer from './featureReducer';
import photoReducer from './photoReducer';

export default combineReducers({
  featureReducer,
  photoReducer,
});
