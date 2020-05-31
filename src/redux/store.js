import { configureStore } from '@reduxjs/toolkit';

import ReduxThunk from 'redux-thunk';
import rootReducer from './reducer';

const middlewares = [ReduxThunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});

export default store;
