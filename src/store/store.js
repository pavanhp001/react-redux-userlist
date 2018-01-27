import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userList from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(userList);

export default store;
