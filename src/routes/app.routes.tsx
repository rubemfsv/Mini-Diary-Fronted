import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewNote from '../pages/NewNote';

const AppRoute: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewNote} />
    </Switch>
  );
};

export default AppRoute;
