import { ADD_TOURNAMENT } from 'actions/index.js';

const initialState = {
  tournaments: []
}
const tourneys =  (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOURNAMENT:
      return Object.assign({}, state, {
        tournaments: [
          ...state.tournaments,
          { title: "Why Hello" }
        ]
      })

    default:
      return state;
  }
};
export default tourneys;
