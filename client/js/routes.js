
function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

const routes = [
  {
    path: '/add-tourney',
    getComponent(location, cb) {
      System.import('pages/AddTourney').then(loadRoute(cb)).catch(errorLoading);
    }
  }
]
export default routes;
