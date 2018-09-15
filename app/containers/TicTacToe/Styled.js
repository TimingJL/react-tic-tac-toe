import styled, { keyframes } from 'styled-components';

const BLOCK_SIZE = 500;
const CHESS_SIZE = 100;

const winnerBackground = keyframes`
  from {
    background: #ff4f6e;
  }

  to {
    background: #ff99ab;
  }
`;

export const StyledTicTacToe = styled.div`
  width: ${BLOCK_SIZE}px;
  height: ${BLOCK_SIZE}px;

  .tic-tac-toe__blocks-wrapper {
    height: 100%;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px 15px;
  }

  .tic-tac-toe__item {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    background: #ff99ab;
    cursor: pointer;
    &:hover {
      background: #ff4f6e;
    }
  }

  .tic-tac-toe__item-win {
    animation: ${winnerBackground} 0.5s linear infinite alternate;
  }

  .tic-tac-toe__restart-btn {
    font-family: 'Rammetto One', cursive;
    width: 100%;
    line-height: 50px;
    font-size: 1.5em;
    letter-spacing: 1px;
    background: white;
    cursor: pointer;
    outline: none;
    margin: 20px 0px;
    padding: 5px 0px;
    border-radius: 5px;
    transition: all 0.25s ease-out;
    &:hover {
      box-shadow: 0 10px 20px 0 #e2a900;
      transform: translateY(-1px);
      color: #ff4f6e;
    }
  }
`;

export const Circle = styled.div`
  border-radius: 100%;
  border: 15px solid white;
  width: ${CHESS_SIZE}px;
  height: ${CHESS_SIZE}px;
`;

export const Cross = styled.div`
  &:before {
    content: '';
    border-radius: 10px;
    position: absolute;
    display: flex;
    transform: rotate(45deg);
    top: 50;
    height: 15px;
    width: 100px;
    background: black;
  }

  &:after {
    content: '';
    border-radius: 10px;
    display: flex;
    transform: rotate(-45deg);
    height: 15px;
    width: 100px;
    background: black;
  }
`;

export const StyledInfo = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: #ffffff5e;
  margin: 20px 0px;
  text-align: center;
  font-size: 2em;
  font-family: 'Rammetto One', 微軟正黑體;
  font-weight: 900;
  color: #ff4f6e;
  letter-spacing: 2px;

  .info__role-wrapper {
    display: flex;
    align-items: center;
  }

  span {
    margin: 0px 20px;
  }
`;
