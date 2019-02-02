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

export const signup = payload => ({ type:SIGNUP_USER, payload });

export const signupSuccess = payload => ({ type:SIGNUP_SUCCESS, payload });

export const login = payload => ({ type:LOGIN_USER, payload });

export const loginSuccess = payload => ({ type:LOGIN_SUCCESS, payload });

export const getUser = payload => ({ type:GET_USER, payload });

export const getUserSuccess = payload => ({ type:GET_USER_SUCCESS, payload });

export const getUserList = () => ({ type:GET_USER_LIST });

export const getUserListSuccess = payload => ({ type:GET_USER_LIST_SUCCESS, payload });

export const updateUser = payload => ({ type:UPDATE_USER, payload });

export const updateUserSuccess = payload => ({ type:UPDATE_USER_SUCCESS, payload });

export const filterUser = payload => ({ type:FILTER_USER, payload });

export const filterUserSuccess = payload => ({ type:FILTER_USER_SUCCESS, payload });