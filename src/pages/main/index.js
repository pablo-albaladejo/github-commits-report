import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../login';
import HomePage from '../home';
import ErrorPage from '../error';
import ProtectedRoute from '../../router';

const Home = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/error' component={ErrorPage} />
      <Redirect to="/error" />
    </Switch>
  </BrowserRouter>
)
export default Home;
