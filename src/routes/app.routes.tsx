import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewNaver from '../pages/NewNaver';

const AppRoute: React.FC = () => {
  const Pagina404 = () => <div>Página 404</div>;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewNaver} />
      <Route component={Pagina404} />
    </Switch>
  );
};

export default AppRoute;
