import { fromJS, Map } from 'immutable';
import {
  INIT,
  SET_BLOCK_VALUE,
  CIRCLE,
  TOGGLE,
  SET_ON_MODE_TOGGLE,
  SET_IS_WIN,
} from 'containers/TicTacToe/constants';
import { getWinner } from 'containers/TicTacToe/utils';

const NUMBER_OF_BLOCKS = 9;
const initBlocks = fromJS(
  Array.from(new Array(NUMBER_OF_BLOCKS), (value, index) => ({
    id: index,
    owner: value,
  })),
);

// The initial state of the App
const initialState = fromJS({
  currentRole: CIRCLE, // 1: X, -1: O
  blocks: initBlocks,
  isSinglePlayer: true,
  isWin: getWinner(initBlocks),
});

function tictactoeReducer(state = initialState, action) {
  switch (action.type) {
    case INIT: {
      const isSinglePlayer = state.get('isSinglePlayer');
      return initialState.set('isSinglePlayer', isSinglePlayer);
    }

    case SET_BLOCK_VALUE: {
      const { id, currentRole } = action.payload;
      return state
        .setIn(['blocks', id, 'owner'], currentRole)
        .set('currentRole', currentRole * TOGGLE);
    }

    case SET_IS_WIN: {
      return state.set('isWin', Map(action.payload));
    }

    case SET_ON_MODE_TOGGLE: {
      return state.updateIn(
        ['isSinglePlayer'],
        isSinglePlayer => !isSinglePlayer,
      );
    }

    default:
      return state;
  }
}

export default tictactoeReducer;
