import { ADD_TOURNAMENT, EDIT_TOURNAMENT } from 'actions/index.js';

let id = 0;

const initialState = {
  tournaments: [],
};

const tourneys =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT:
      id += 1;
      return Object.assign({}, state, {
        tournaments: [
          ...state.tournaments,
          {
            title: 'New Tourney',
            players: [],
            inProgress: false,
            id,
          }
        ]
      });

    case EDIT_TOURNAMENT:
      console.log('editing tournament in reducer', state, action);
      const newState = Object.assign({}, state, {
        tournaments: [
          ...state.tournaments,
        ]
      });
      const found = newState.tournaments.findIndex(({ id }) => id === action.id);
      const editedTourney = {
        id: action.id,
        ...action.state,
      };
      if (found === -1) {
        newState.tournaments.push(editedTourney);
      } else {
        newState.tournaments[found] = editedTourney;
      }
      return newState;

    default:
      return state;
  }
};
export default tourneys;
