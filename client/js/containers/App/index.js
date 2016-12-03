import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import TournamentList from 'components/TournamentList';

const App = () => {
  return (
    <div>
      <h1>Tourneykit</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tournament">Tournaments</Link></li>
      </ul>
      <div>
        <button>Add Tournament</button>
      </div>
      <TournamentList />
    </div>
  );
};

App.propTypes = {}
export default App;
