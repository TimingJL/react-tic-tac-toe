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

export { makeSelectBlocks, makeSelectCurrentRole };
