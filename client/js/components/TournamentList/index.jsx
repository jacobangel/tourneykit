import React from 'react';
import TournamentSummary from './TournamentSummary'

const TournamentList = ({ children, ...props }) => {
  const {
    tourneys,
  } = props;
  return (
    <div>
      <h2>Tourmanent List</h2>
      {tourneys.map((newProps, i) => <TournamentSummary key={i} {...newProps} />)}
      {children}
    </div>
  );
};

TournamentList.defaultProps = {
  tourneys: [],
};

TournamentList.propTypes = {
  children: React.PropTypes.func,
  tourneys: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default TournamentList;
