import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import TournamentList from 'components/TournamentList';

const App = React.createClass({
  render() {
    console.log('rendering');
    return (
      <div>
        <h1>Tourneykit</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-tourney">Tournaments</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
})

export default App;
