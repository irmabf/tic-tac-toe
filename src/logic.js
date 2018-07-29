export const getWinner = (cells) => {
  const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  let winner = undefined;
  winningStates.forEach((winningState) => {
    const potentialWinner = cells[winningState[0]];
    if (potentialWinner !== undefined) {
      let hasWonCurrentState = true;
      winningState.forEach((winningCell) => {
        if (cells[winningCell] !== potentialWinner) hasWonCurrentState = false;
      });
      if (hasWonCurrentState) winner = potentialWinner;
    }
  });
  return winner;
};

export const isTie = (cells) => {
  // No tie when the game is won
  if (getWinner(cells) !== undefined) return false;
  let isTie = true;
  cells.forEach((cell) => {
    if (cell === undefined) isTie = false;
  });
  return isTie;
};

export const isValidMove = (cells, cell) => {
  // Invalid move when the cell is not free
  if (cells[cell] !== undefined) return false;
  // Do not update when the game is over
  if (getWinner(cells) !== undefined || isTie(cells)) return false;
  return true;
};

export const getStatusMessage = (cells, player) => {
  if (isTie(cells)) return 'It is a tie!';
  const winner = getWinner(cells);
  if (winner !== undefined) {
    return `${winner} has won the game!`;
  } else {
    return `Player ${player}`;
  }
};

