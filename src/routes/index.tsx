import React from 'react';

import { useAuth } from '../contexts/auth';

import AuthRoute from './auth.routes';
import AppRoute from './app.routes';

const Routes: React.FC = () => {
  const { loged } = useAuth();

  return loged ? <AppRoute /> : <AuthRoute />;
};

export default Routes;
