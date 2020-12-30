import React from 'react';

import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import MainPage from '../main';
import ErrorPage from '../error';

const Home = () => (
  <HashRouter>

    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/error' component={ErrorPage} />
      <Redirect to="/error" />

    </Switch>
  </HashRouter>
);

export default Home;
