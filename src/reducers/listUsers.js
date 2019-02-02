import { GET_USER_LIST_SUCCESS, FILTER_USER_SUCCESS } from '../constants';

const UserList = (state = [], action) => {
  switch (action.type) {
    case GET_USER_LIST_SUCCESS:
    return action.payload;

    case FILTER_USER_SUCCESS:
    return action.payload;

    default:
    return state
  }
}

export default UserList;