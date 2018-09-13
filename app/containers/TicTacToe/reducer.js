import { fromJS } from 'immutable';
import { SET_BLOCK_VALUE } from './constants';

const NUMBER_OF_BLOCKS = 9;

// The initial state of the App
const initialState = fromJS({
  currentRole: 1, // 1: X, -1: O
  blocks: Array.from(new Array(NUMBER_OF_BLOCKS), (value, index) => ({
    id: index,
    owner: value,
  })),
});

function tictactoeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BLOCK_VALUE: {
      const { id, currentRole } = action.payload;
      return state
        .setIn(['blocks', id, 'owner'], currentRole)
        .set('currentRole', currentRole * -1);
    }
    default:
      return state;
  }
}

export default tictactoeReducer;
