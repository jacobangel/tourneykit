import React from 'react';
import TournamentList from 'components/TournamentList';

const Home = React.createClass({
  render() {
  return (
    <div>
      <h1>Home</h1>
      <TournamentList />
      {this.props.children}
    </div>
  );
  }
});

Home.propTypes = {}
export default Home;
