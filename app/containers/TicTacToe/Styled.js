import styled from 'styled-components';

const BLOCK_SIZE = 200;

export const StyledTicTacToe = styled.div`
  margin: 50px;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .tic-tac-toe__item {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #f7f7f7;
    color: white;
    height: ${BLOCK_SIZE}px;
    width: ${BLOCK_SIZE}px;

    background: #55bbac;
    cursor: pointer;
    &:hover {
      background: #77ebbd;
    }
  }

  .tic-tac-toe__circle {
    border-radius: 100%;
    border: 15px solid white;
    width: 100px;
    height: 100px;
  }

  .tic-tac-toe__cross {
    &:before {
      content: '';
      position: absolute;
      display: flex;
      transform: rotate(45deg);
      height: 15px;
      width: 100px;
      background: black;
    }

    &:after {
      content: '';
      display: flex;
      transform: rotate(-45deg);
      height: 15px;
      width: 100px;
      background: black;
    }
  }
`;
