import { SIGNUP_SUCCESS, LOGIN_SUCCESS, GET_USER_SUCCESS, UPDATE_USER_SUCCESS } from '../constants';

const Users = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    return action.payload;

    case LOGIN_SUCCESS:
    return action.user;

    case GET_USER_SUCCESS:
    return action.payload;

    case UPDATE_USER_SUCCESS:
    return action.payload;

    default:
    return state
  }
}

export default Users;