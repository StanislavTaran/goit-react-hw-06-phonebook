import { combineReducers } from 'redux';
import * as Types from './actionTypes';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_CONTACT:
      return [...state, action.payload];

    case Types.DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload.id);

    // case Types.SAVE_EDITED_CONTACT:
    //   return;

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
