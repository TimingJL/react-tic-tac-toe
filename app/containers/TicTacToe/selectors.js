import { createSelector } from 'reselect';

const selectTicTacToe = state => state.get('tictactoe');

const makeSelectBlocks = () =>
  createSelector(selectTicTacToe, tictactoeState =>
    tictactoeState.get('blocks'),
  );

const makeSelectCurrentRole = () =>
  createSelector(selectTicTacToe, tictactoeState =>
    tictactoeState.get('currentRole'),
  );

const makeSelectMode = () =>
  createSelector(selectTicTacToe, tictactoeState =>
    tictactoeState.get('isSinglePlayer'),
  );

const makeSelectIsWin = () =>
  createSelector(selectTicTacToe, tictactoeState =>
    tictactoeState.get('isWin'),
  );

export {
  makeSelectBlocks,
  makeSelectCurrentRole,
  makeSelectMode,
  makeSelectIsWin,
};
