import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AuthProvider from './contexts/auth';

import Route from './routes/index';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
