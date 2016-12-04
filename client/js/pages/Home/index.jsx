import React from 'react';
import { connect } from 'react-redux';
import { addTournament } from 'actions';
import TournamentList from 'components/TournamentList';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    onAddTourneyClick: (id = Math.random()) => {
      dispatch(addTournament(id));
    },
  };
};

const Home = ({
  onAddTourneyClick,
}) => (
  <div>
    <h1>Home</h1>
    <div>
      <button onClick={onAddTourneyClick}>New Tournament</button>
    </div>
    <TournamentList />
  </div>
);

Home.propTypes = {
  onAddTourneyClick: React.PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
