const { combineReducers } = require('redux');

const App = combineReducers({
  noop: (state = {}, action) => state,
});

module.exports = App;
