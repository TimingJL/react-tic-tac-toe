import { INIT, SET_BLOCK_VALUE } from './constants';

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
