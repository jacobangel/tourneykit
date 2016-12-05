import React from 'react';
import { Link } from 'react-router';
import style from './App.less';

const App = props => (
  <div className={style.wrapper}>
    <div>
      <h1 className={style.logo}>Tourneykit</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <div className={style.content}>
        {props.children}
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.children,
};

export default App;
