import { Link } from 'react-router';
import React from 'react';

const TournamentSummary = ({ title, }) => (
  <div>
    <h2>{title}</h2>
    <Link to={'#'}>View</Link>
  </div>
);

TournamentSummary.propTypes = {
  title: React.PropTypes.string,
};

export default TournamentSummary;
