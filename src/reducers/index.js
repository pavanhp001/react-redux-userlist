import { combineReducers } from 'redux';
import userList from './getUsersList';

const rootReducer = combineReducers({
 userListResp:    userList
});

export default rootReducer;
