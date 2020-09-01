import React, { createContext, useContext, useState } from 'react';

import { AuthContextData } from '../interfaces/index';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const verifyLoginRequest = () => {
  const { isLoged } =
    JSON.parse(localStorage.getItem('@Auth:token') as string) || {};
  if (isLoged) return isLoged;
  return false;
};

const handleLogin = (value: boolean) => {
  const auth = JSON.parse(localStorage.getItem('@Auth:token') as string);
  localStorage.setItem(
    '@Auth:token',
    JSON.stringify({ ...auth, isLoged: value }),
  );
};

const AuthProvider: React.FC = ({ children }) => {
  const [loged, setLoged] = useState(verifyLoginRequest());

  const handleAuth = (value: boolean) => {
    setLoged(value);
    handleLogin(value);
  };

  (window as any).handleAuth = handleAuth;

  return (
    <AuthContext.Provider value={{ loged, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export default AuthProvider;
