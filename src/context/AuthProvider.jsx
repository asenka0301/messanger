import React, { useState, useMemo } from 'react';
import AuthContext from './context';

const AuthProvider = ({ children }) => {
  const getAuthHeader = () => {
    const userData = JSON.parce(localStorage.getItem('userData'));
    if (userData) {
      return { Authorization: `Bearer ${userData.token}` };
    }
    return {};
  };

  const initialState = Boolean(localStorage.getItem('userData'));

  const [loggedIn, setLoggedIn] = useState(initialState);

  const logIn = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setLoggedIn(true);
  };

  const data = useMemo(() => ({
    loggedIn,
    logIn,
    getAuthHeader,
  }), [loggedIn, logIn]);

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
