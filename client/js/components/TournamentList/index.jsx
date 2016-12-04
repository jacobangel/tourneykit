import React from 'react';

const TournamentList = props => (
  <div>
    <h2>Tourmanent List</h2>
    {props.children}
  </div>
);

TournamentList.propTypes = { children: React.PropTypes.children };
export default TournamentList;
