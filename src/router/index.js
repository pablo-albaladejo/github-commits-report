import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { auth } = React.useContext(AuthContext);
  return (
    <Route
      {...props}
      render={localProps => (
        auth.isLoggedIn ?
          <Component {...localProps} /> :
          <Redirect to='/login' />
      )}
    />
  )
};

export default ProtectedRoute;
