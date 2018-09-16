import { Observable } from 'rxjs/Rx';
import { getWinner, getBlockId } from 'containers/TicTacToe/utils';
import { setIsWin, setBlockValue } from 'containers/TicTacToe/actions';
import {
  SET_BLOCK_VALUE,
  SET_IS_WIN,
  SET_ON_MODE_TOGGLE,
  CROSS,
} from './constants';

const setIsWinEpic = (action$, store) =>
  action$.ofType(SET_BLOCK_VALUE).switchMap(() => {
    const tictactoeState = store.value.get('tictactoe');
    const isWin = getWinner(tictactoeState.get('blocks'));
    return Observable.of(setIsWin(isWin));
  });

const setAutoPlayEpic = (action$, store) =>
  action$
    .ofType(SET_IS_WIN)
    .debounceTime(300)
    .switchMap(() => {
      const tictactoeState = store.value.get('tictactoe');
      if (
        tictactoeState.get('isSinglePlayer') &&
        tictactoeState.get('currentRole') === CROSS &&
        !tictactoeState.getIn(['isWin', 'isGameFinished'])
      ) {
        const id = getBlockId(tictactoeState.get('blocks'));
        const currentRole = CROSS;
        return Observable.of(setBlockValue(id, currentRole));
      }
      return Observable.empty();
    });

const setOnModeToggle = (action$, store) =>
  action$.ofType(SET_ON_MODE_TOGGLE).switchMap(() => {
    const tictactoeState = store.value.get('tictactoe');
    const isWin = getWinner(tictactoeState.get('blocks'));
    return Observable.of(setIsWin(isWin));
  });

export default [setIsWinEpic, setAutoPlayEpic, setOnModeToggle];
