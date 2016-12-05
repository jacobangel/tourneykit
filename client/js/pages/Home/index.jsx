import React from 'react';
import { connect } from 'react-redux';
import { addTournament } from 'actions';
import TournamentList from 'components/TournamentList';

const mapStateToProps = ({ tourneys }) => {
  console.log(tourneys);
  return { ...tourneys };
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
  tournaments,
}) => (
  <div>
    <h1>Home</h1>
    <div>
      <button onClick={onAddTourneyClick}>New Tournament</button>
    </div>
    <TournamentList tourneys={tournaments} />
  </div>
);

Home.propTypes = {
  onAddTourneyClick: React.PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
