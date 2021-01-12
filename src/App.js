import React from 'react';
import { AuthContext } from './context';

import Main from './pages/main';
import { initialState, reducer } from "./store/reducer";

const App = () => {
  const [auth, authDispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        auth,
        authDispatch
      }}
    >
      <Main />
    </AuthContext.Provider>
  )
};
export default App;
