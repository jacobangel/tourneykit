const { combineReducers } = require('redux');
import tourneys from './tourneys';

const App = combineReducers({
  tourneys
});

module.exports = App;
