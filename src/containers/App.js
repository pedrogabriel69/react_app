import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '../routes/routes';

import { BagProvider } from './BagProvider';
import Menu from '../components/views/Menu';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
)

const App = () => {
  return (
    <BrowserRouter>
      <BagProvider>
        <Menu />
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </BagProvider>
    </BrowserRouter>
  );
}

export default App;
