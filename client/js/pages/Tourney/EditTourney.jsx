import React from 'react';
/**
title: 'New Tourney',
players: [],
id: ++id,
inProgress: false,
*/

const EditTourney = React.createClass({
  getDefaultProps() {
    return {
    };
  },

  getInitialState(props) {
    return {}
  },

  saveState(e) {
    console.log('saving');
    console.log(e);
  },

  resetState(e) {
    console.log('resetting');
  },

  render() {
    const fields = ['title', 'inProgress', 'players', 'title'].map((field) => {
      return (
        <div>
          <span>{field}</span>
          <input type="text" />
        </div>
      );
    });

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
export default EditTourney;
