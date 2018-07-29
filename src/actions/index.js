const ADD_MARK = 'ADD_MARK';
const RESET_GAME = 'RESET_GAME';


export const addMark = (cell, player) => ({ type: ADD_MARK, cell, player });

export const resetGame = () => ({ type: RESET_GAME });
