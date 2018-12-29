import { combineReducers } from 'redux';

import campusReducer from './campusReducer';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
  campuses: campusReducer,
  students: studentReducer,
});

export default rootReducer;
