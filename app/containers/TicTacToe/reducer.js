import { fromJS } from 'immutable';
import {
  INIT,
  SET_BLOCK_VALUE,
  CIRCLE,
  TOGGLE,
} from 'containers/TicTacToe/constants';

const NUMBER_OF_BLOCKS = 9;

// The initial state of the App
const initialState = fromJS({
  currentRole: CIRCLE, // 1: X, -1: O
  winner: null,
  blocks: Array.from(new Array(NUMBER_OF_BLOCKS), (value, index) => ({
    id: index,
    owner: value,
  })),
});

function tictactoeReducer(state = initialState, action) {
  switch (action.type) {
    case INIT: {
      return initialState;
    }

    case SET_BLOCK_VALUE: {
      const { id, currentRole } = action.payload;
      return state
        .setIn(['blocks', id, 'owner'], currentRole)
        .set('currentRole', currentRole * TOGGLE);
    }
    default:
      return state;
  }
}

export default tictactoeReducer;
