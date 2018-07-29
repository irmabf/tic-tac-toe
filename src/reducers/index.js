import { combineReducers } from 'redux';
import cells from './reducer_cells';
import player from './reducer_player';

const rootReducer = combineReducers({ cells, player });

export default rootReducer;
