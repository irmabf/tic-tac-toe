const ADD_MARK = 'ADD_MARK';
const RESET_GAME = 'RESET_GAME';

const player = (state = 'X', action) => {
  switch (action.type) {
    case ADD_MARK:
      return (state === 'X') ? 'O' : 'X';
    case RESET_GAME:
      return 'X';
    default:
      return state;
  }
};

export default player;
