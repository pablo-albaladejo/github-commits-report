import React from 'react';
import { AuthContext } from './context';

import Main from './pages/main';
import { initialState, reducer } from "./store/reducer";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <Main />
    </AuthContext.Provider>
  )
};
export default App;
