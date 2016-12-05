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
    exactly: true,
    component: asyncComponent(() =>
      System.import('./pages/Tourney/ViewTourney').then(module => module.default),
    ),
  },
  {
    pattern: '/tourney/:key/edit',
    exactly: true,
    component: asyncComponent(() =>
      System.import('./pages/Tourney/EditTourney').then(module => module.default),
    ),
  },
];
export default routes;
