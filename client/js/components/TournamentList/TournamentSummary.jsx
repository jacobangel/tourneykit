import { Link } from 'react-router';
import React from 'react';

const TournamentSummary = ({ title, id }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      <li><Link to={`tourney/${id}`}>view</Link></li>
      <li><Link to={`tourney/${id}/edit`}>edit</Link></li>
    </ul>
  </div>
);

TournamentSummary.propTypes = {
  title: React.PropTypes.string,
};

export default TournamentSummary;
