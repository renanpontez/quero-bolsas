// Set up your root reducer here...
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import scholarships from './scholarshipReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  scholarships
});

export default rootReducer;
