import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGNUP_USER, 
         SIGNUP_SUCCESS, 
         LOGIN_USER, 
         LOGIN_SUCCESS, 
         GET_USER, 
         GET_USER_SUCCESS, 
         GET_USER_LIST, 
         GET_USER_LIST_SUCCESS,
         UPDATE_USER,
         UPDATE_USER_SUCCESS,
         FILTER_USER,
         FILTER_USER_SUCCESS } from '../constants';
import api from '../utility/query';

export function* watchUserRegistration() {
  yield takeEvery(SIGNUP_USER, registerUser);
}

function* registerUser(data) {
  try{
    const payload = yield call(api.create,"/users", data.payload);
    window.localStorage.setItem("id", payload.id);
    window.localStorage.setItem("LoggedIn", payload.isLoggedIn);
    yield put({ type: SIGNUP_SUCCESS, payload });
  }
  catch(err){
    // yield put({ type: REGISTER_FAIL, payload });
    console.log(err);
  }
}

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

function* loginUser(data) {
  try{
    const payload = yield call(api.get,"/users");
    debugger;
    const user = payload.find( k => ( k.email === data.payload.email ));
    
    if(user){
      window.localStorage.setItem("id", user.id);
      window.localStorage.setItem("LoggedIn", user.isLoggedIn);
      yield put({ type: LOGIN_SUCCESS, user});
    }
    else{
      window.alert("No user was found.");
    }
  }
  catch(err){
    // yield put({ type: REGISTER_FAIL, payload });
    console.log(err);
  }
}

export function* watchGetCurrentUser(){
  yield takeEvery(GET_USER, currentUser);
}

function* currentUser(data){
  const payload = yield call(api.get,`/users/${data.payload.id}`);
  yield put({ type: GET_USER_SUCCESS, payload });
}

export function* watchGetUserList(){
  yield takeEvery(GET_USER_LIST, listUser);
}

function* listUser(){
  try{
    const payload = yield call(api.get,"/users");
    yield put({ type: GET_USER_LIST_SUCCESS, payload});
  }
  catch(err){
    console.log(err);
  }
}

export function* watchUpdateUser(){
  yield takeEvery(UPDATE_USER, updateUserDetails);
}

function* updateUserDetails(data){
  try{
    const id = window.localStorage.getItem('id');
    const payload = yield call(api.put,`/users/${id}`, data.payload);
    yield put({ type: UPDATE_USER_SUCCESS, payload});
    window.alert("User Details have been saved successfully");
  }
  catch(err){
    console.log(err);
  }
}

export function* watchFilterUser(){
  yield takeEvery(FILTER_USER, usersFilter);
}

function* usersFilter(data){
  try{
    const filterdata = yield call(api.get,'/users');
    const payload = filterdata.filter(k => ( k.email.startsWith(data.payload.value)));
    yield put({ type: FILTER_USER_SUCCESS, payload});
  }
  catch(err){
    console.log(err);
  }
}