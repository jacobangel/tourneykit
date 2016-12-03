import React from 'react';
import { Router, Route, Link } from 'react-router'
import App from './containers/App';
import routes from './routes';

function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

const routerProps = {
  component: App,
  path: '/',
  childRoutes: routes
};
const Rout = ( <Router routes={routerProps} /> )
export default Rout;
