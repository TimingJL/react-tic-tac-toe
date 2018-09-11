import React from 'react';
import { StyledTicTacToe } from './Styled';

const TicTacToe = () => {
  const blocks = Array.from(Array(9).keys());
  return (
    <StyledTicTacToe>
      {blocks.map(block => (
        <li key={block} className="tic-tac-toe__item">
          <span>{block}</span>
        </li>
      ))}
    </StyledTicTacToe>
  );
};

export default TicTacToe;
