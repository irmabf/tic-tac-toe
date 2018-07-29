const ADD_MARK = 'ADD_MARK';
const RESET_GAME = 'RESET_GAME';

const cells = (state = [
  undefined, undefined, undefined,
  undefined, undefined, undefined,
  undefined, undefined, undefined], action) => {
  switch (action.type) {
    case ADD_MARK:
      return state.map((item, cell) => (cell === action.cell ? action.player : item));
    case RESET_GAME:
      return [
        undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined];
    default:
      return state;
  }
};

export default cells;
