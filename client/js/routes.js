
function loadRoute(cb) {
  return module => cb(null, module.default);
}
import Home from './pages/Home';

import React from 'react';
function asyncComponent(getComponent) {
  class AsyncComponent extends React.Component {
    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  }

  AsyncComponent.Component = null;
  AsyncComponent.state = { Component: AsyncComponent.Component };

  return AsyncComponent;
}

const routes = [
  {
    pattern: '/add-tourney',
    component: asyncComponent(() =>
      System.import('./pages/AddTourney').then(module => module.default),
    ),
  },
  {
    pattern: '/tourney/:key',
    component: asyncComponent(() =>
      System.import('./pages/AddTourney').then(module => module.default),
    ),
  },
];
export default routes;
