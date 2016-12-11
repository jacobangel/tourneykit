import React from 'react';
import { connect } from 'react-redux';
import { editTournament } from 'actions';
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
    return {};
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
  },

  resetState(e) {
    console.log('resetting');
    e.preventDefault();
  },

  render() {
    const fields = ['title', 'inProgress', 'players', 'title'].map(field => (
      <div key={`form-${field}`}>
        <span>{field}</span>
        <input type="text" onBlur={(e) => { this.updateState(e.target.value, field); }} />
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
  console.log(state, ownProps);
  return { tournament: state.tourneys[ownProps.params.key] };
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
