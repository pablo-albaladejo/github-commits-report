import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import LoginPage from '../login';
import HomePage from '../home';
import ErrorPage from '../error';
import ProtectedRoute from '../../router';

const Home = () => {
  return (
    <BrowserRouter
      basename={process.env.PUBLIC_URL}
    >
      <Switch>
        <ProtectedRoute exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/error' component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
    </BrowserRouter>
  )
}
export default Home;
