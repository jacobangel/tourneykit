export const ADD_TOURNAMENT = 'ADD_TOURNAMENT';
export const ADD_TOURNAMENT_ERROR = 'ADD_TOURNAMENT_ERROR';
export const EDIT_TOURNAMENT = 'EDIT_TOURNAMENT';


export function addTournament() {
  return {
    type: ADD_TOURNAMENT,
  }
}
export function editTournment(id) {
  return {
    type: ADD_TOURNAMENT,
    id
  }
}
