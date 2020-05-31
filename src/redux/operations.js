import { onExistFlagAction, offExistFlagAction } from './actions';

// eslint-disable-next-line import/prefer-default-export
export const toogleExistFlag = () => dispatch => {
  dispatch(onExistFlagAction());

  setTimeout(() => {
    dispatch(offExistFlagAction());
  }, 3000);
};
