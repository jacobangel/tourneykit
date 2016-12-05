import { ADD_TOURNAMENT } from 'actions/index.js';

let id = 0;

const initialState = {
  tournaments: []
}
const tourneys =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT:
      return Object.assign({}, state, {
        tournaments: [
          ...state.tournaments,
          {
            title: 'New Tourney',
            players: [],
            id: ++id,
            inProgress: false,
          }
        ]
      })

    default:
      return state;
  }
};
export default tourneys;
