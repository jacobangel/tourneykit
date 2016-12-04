import asyncComponent from './components/asyncComponent';

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
