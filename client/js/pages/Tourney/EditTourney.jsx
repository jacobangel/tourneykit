import React from 'react';
import capitalize from 'lodash/capitalize';
import { connect } from 'react-redux';
import { editTournament } from 'actions';
import { Redirect } from 'react-router';
/**
title: 'New Tourney',
players: [],
id: ++id,
inProgress: false,
*/

const EditTourney = React.createClass({
  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {
      goBack: false,
      ...this.props.initialState,
    };
  },

  updateState(value, key) {
    this.setState({
      [key]: value,
    });
  },

  saveState(e) {
    console.log('saving');
    e.preventDefault();
    this.props.onEditTourney(Object.assign({
      id: this.props.params.key,
    }, this.state));
    this.setState({
      goBack: true,
    });
  },

  resetState(e) {
    e.preventDefault();
    this.setState(this.getInitialState());
  },

  render() {
    if (this.state.goBack) {
      return <Redirect to="/" />;
    }
    const fields = ['title', 'inProgress', 'players', 'title'].map(field => (
      <div key={`form-${field}`}>
        <span>{field}</span>
        <input
          type="text"
          value={this.state[field]}
          onBlur={(e) => { this.updateState(e.target.value, field); }}
        />
      </div>
    ));

    return (
      <div>
        <h1>Edit Tourney</h1>
        <form onSubmit={this.saveState}>
          {fields}
          <button onClick={this.saveState}>Save</button>
          <button onClick={this.resetState}>Cancel</button>
        </form>
      </div>
    );
  },
});

EditTourney.propTypes = {
  id: React.PropTypes.string,
  inProgress: React.PropTypes.bool,
  players: React.PropTypes.arrayOf(React.PropTypes.string),
  title: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const tourney = state.tourneys.tournaments.find(({ id }) => id === ownProps.params.key) || {};
  console.log(state, ownProps, tourney);
  return { initialState: { ...tourney }, ...tourney };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    onEditTourney: (state) => {
      dispatch(editTournament(state));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditTourney);
