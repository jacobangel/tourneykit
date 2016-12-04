import React from 'react';

const AddTourney = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Add Tourney</h1>
      <p>Sup.</p>
      {props.children}
    </div>
  );
};

AddTourney.propTypes = {};
export default AddTourney;
