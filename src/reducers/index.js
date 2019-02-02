import { combineReducers } from 'redux';
import Users from './users';
import UserList from './listUsers';

export default combineReducers({
  Users,
  UserList,
})