import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../login';
import HomePage from '../home';
import ErrorPage from '../error';
import ProtectedRoute from '../../router';

const Home = () => (
  <BrowserRouter>
    <HashRouter>
      <Switch>
        <ProtectedRoute exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/error' component={ErrorPage} />
        <Redirect to="/error" />
      </Switch>
    </HashRouter>
  </BrowserRouter>
)
export default Home;
