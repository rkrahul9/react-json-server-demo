import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const UnAuthenticatedRoute = ({component: Component, authenticated, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>{
       return (!!authenticated === true
      ? <Redirect to={{pathname: '/index'}} />
: <Component {...props} />)}}
  />
)