import React from 'react';
import { CIRCLE, CROSS } from 'containers/TicTacToe/constants';
import { Circle, Cross } from 'containers/TicTacToe/Styled';

const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getWinner = blocks => {
  let winner;
  let winCaseArr = [];
  let isGameFinished = false;
  const findEmptyBlock = blocks.find(block => block.get('owner') === undefined);
  winCases.map(winCase => {
    const case1 = blocks.getIn([winCase[0], 'owner']);
    const case2 = blocks.getIn([winCase[1], 'owner']);
    const case3 = blocks.getIn([winCase[2], 'owner']);
    if (case1 && (case1 === case2 && case2 === case3 && case1 === case3)) {
      winner = case1;
      winCaseArr = winCaseArr.concat(winCase);
      isGameFinished = true;
      return true;
    }
    return false;
  });
  if (!findEmptyBlock) {
    isGameFinished = true;
  }

  return {
    winner,
    winCaseArr,
    isGameFinished,
  };
};

export const showChess = role => {
  if (role === CIRCLE) {
    return <Circle />;
  } else if (role === CROSS) {
    return <Cross />;
  }
  return null;
};

/* Random Algorithm */
export const getBlockId = blocks => {
  const enableBlocks = blocks.filter(block => block.get('owner') === undefined);
  const choosedId = enableBlocks
    .get(Math.floor(Math.random() * enableBlocks.size))
    .get('id');
  return choosedId;
};
