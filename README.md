# Tic Tac Toe

A Tic-Tac-Toe game build by React.js

## Demo
![Image of Demo](https://raw.githubusercontent.com/TimingJL/react-tic-tac-toe/master/app/images/tic-tac-toe-demo.gif)

## Introduction
1. In `Battle Mode`, this game use `Random Algorithm` as strategy. So its behavior looks very stupid. If you want it to be smarter, you can modify the algorithm in `app/containers/TicTacToe/utils.js`.
2. I use `redux-observable` to help me decide which player is winner and apply automatic Game-Playing for Player2. So I guess it's a little bit hard for the React.js Beginner to understand the action flow. But I think it's a good example to familiar with `Epic`.

## Todo
1. Add some animation to make the game looks lovely or full of life.
2. Add scoreboard.
3. Refactor to improve  readability.