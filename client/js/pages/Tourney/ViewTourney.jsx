import React from 'react';
import { connect } from 'react-redux';

const ViewTourney = ({ title, players, id, inProgress }) => {
  return (
    <div>
      <h1>{title}</h1>
      {inProgress ? null : <p>This tourney is finished!</p>}
      <h2>Players</h2>
      <ul>
        {players.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

ViewTourney.defaultProps = {
  inProgress: false,
  players: [],
  title: 'No Title',
};

ViewTourney.propTypes = {
  id: React.PropTypes.string,
  inProgress: React.PropTypes.bool,
  players: React.PropTypes.arrayOf(React.PropTypes.string),
  title: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return { ...state.tourneys.tournaments[ownProps.params.key] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditTourney: (state) => {
      dispatch(editTournament(state));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTourney);
