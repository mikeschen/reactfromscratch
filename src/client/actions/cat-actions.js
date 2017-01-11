import { createAction } from 'redux-actions';

export const MAKE_MEOW = 'MAKE_MEOW';
export const makeMeow = createAction(MAKE_MEOW, () => true);
