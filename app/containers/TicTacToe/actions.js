import {
  INIT,
  SET_BLOCK_VALUE,
  SET_ON_MODE_TOGGLE,
  SET_IS_WIN,
} from './constants';

export const setBlockValue = (id, currentRole) => ({
  type: SET_BLOCK_VALUE,
  payload: {
    id,
    currentRole,
  },
});

export const setInit = () => ({
  type: INIT,
});

export const setOnModeToggle = () => ({
  type: SET_ON_MODE_TOGGLE,
});

export const setIsWin = isWin => ({
  type: SET_IS_WIN,
  payload: isWin,
});
