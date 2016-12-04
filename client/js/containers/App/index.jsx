import React from 'react';
import { Link } from 'react-router';
import style from './App.less';

const App = props => (
  <div className={style.wrapper}>
    <div>
      <h1>Tourneykit</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-tourney">Tournaments</Link></li>
      </ul>
      <div>
        {props.children}
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.children,
};

export default App;
