import React from 'react';
// need to set up resolves in webpack.
import TournamentList from '../../components/TournamentList';

const App = () => {
  return (
    <div>
      <h1>Sup</h1>
      <TournamentList />
    </div>
  );
};

App.propTypes = {}
export default App;
