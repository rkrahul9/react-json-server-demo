import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Portfolio from './containers/Portfolio';
import Contacts from './containers/Contacts';
import Achievements from './containers/Achievements';
import { HelpCenter } from './components/help_center';
import BalanceSheet from './containers/BalanceSheet';
import { TnxHistory } from './components/tnx_history';
import { Buy } from './components/buy';
import { Sell } from './components/sell';
import { Transfer } from './components/transfer';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Account from './containers/Account';
import { PrivateRoute } from './PrivateRoute';
import { UnAuthenticatedRoute } from './UnAuthenticatedRoute';

export const Routes = (props) => {
  return(
  <Switch>
    <PrivateRoute exact path = '/index' authenticated={props.authenticated} component = { Dashboard }/>
    <PrivateRoute exact path = '/portfolio' authenticated={props.authenticated} component = { Portfolio }/>
    <PrivateRoute exact path = '/contacts' authenticated={props.authenticated} component = { Contacts }/>
    <PrivateRoute exact path = '/achievements' authenticated={props.authenticated} component = { Achievements }/>
    <PrivateRoute exact path = '/help' authenticated={props.authenticated} component = { HelpCenter }/>
    <PrivateRoute exact path = '/balance-sheet' authenticated={props.authenticated} component = { BalanceSheet }/>
    <PrivateRoute exact path = '/transactions' authenticated={props.authenticated} component = { TnxHistory }/>
    <PrivateRoute exact path = '/buy' authenticated={props.authenticated} component = { Buy }/>
    <PrivateRoute exact path = '/sell' authenticated={props.authenticated} component = { Sell }/>
    <PrivateRoute exact path = '/transfer' authenticated={props.authenticated} component = { Transfer }/>
    <PrivateRoute exact path = '/account' authenticated={props.authenticated} component = { Account }/>
    <UnAuthenticatedRoute exact path = '/signup' authenticated={props.authenticated} component = { Signup }/>
    <UnAuthenticatedRoute exact path = '/' authenticated={props.authenticated} component = { Login }/>
  </Switch>
)
}