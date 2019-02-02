import { all } from 'redux-saga/effects';
import { watchUserRegistration,watchUserLogin, watchGetCurrentUser, watchGetUserList, watchUpdateUser, watchFilterUser } from './saga';

function* rootSaga() {
  yield all([
    watchUserRegistration(),
    watchUserLogin(),
    watchGetCurrentUser(),
    watchGetUserList(),
    watchUpdateUser(),
    watchFilterUser(),
  ])
}

export default rootSaga;