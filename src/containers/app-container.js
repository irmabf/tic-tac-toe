import { connect } from 'react-redux';
import { isValidMove, getStatusMessage } from '../logic';
import { addMark, resetGame } from '../actions/index';
import App from '../components/app';

const mapStateToProps = (state) => {
  return {
    player: state['player'],
    cells: state['cells'],
    message: getStatusMessage(state['cells'], state['player'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCell: (cell, cells, player) => {
      if (isValidMove(cells, cell)) dispatch(addMark(cell, player));
    },
    onReset: () => {
      dispatch(resetGame());
    },
  };
};

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;




