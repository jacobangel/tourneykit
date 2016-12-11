export const ADD_TOURNAMENT = 'ADD_TOURNAMENT';
export const ADD_TOURNAMENT_ERROR = 'ADD_TOURNAMENT_ERROR';
export const EDIT_TOURNAMENT = 'EDIT_TOURNAMENT';


export function addTournament() {
  return {
    type: ADD_TOURNAMENT,
  };
}

export function editTournament({ id, ...props }) {
  console.log('editing tournament', id, props);
  if (typeof props.players === 'string') {
    props.players = props.players.split(',');
  } else if (!props.players) {
    props.players = [];
  }
  return {
    type: EDIT_TOURNAMENT,
    id,
    state: props,
  };
}
