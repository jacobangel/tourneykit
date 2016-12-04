import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import { render } from 'react-dom';

import routes from './routes';
import App from './containers/App';
import Home from './pages/Home';

// wrap `Match` and use this everywhere instead, then when
// sub routes are added to any route it'll work
const MatchWithSubRoutes = route => (
  <Match
    {...route} render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
  )}
  />
);

render((
  <BrowserRouter>
    <App>
      <Match exactly pattern="/" component={Home} />
      {routes.map((route, i) => (
        <MatchWithSubRoutes key={i} {...route} />
      ))}
    </App>
  </BrowserRouter>
), document.getElementById('root'));