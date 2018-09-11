import styled from 'styled-components';

const BLOCK_SIZE = 200;

export const StyledTicTacToe = styled.ul`
  margin: 50px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .tic-tac-toe__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    color: white;
    height: ${BLOCK_SIZE}px;
    width: ${BLOCK_SIZE}px;

    background: #e6b082;
    cursor: pointer;
    &:hover {
      background: #e46646;
    }
  }
`;
