import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactAction,
  deleteContactAction,
  loadPersistedContacts,
  changeFilterAction,
  onExistFlagAction,
  offExistFlagAction,
} from './actions';

const initialStateContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsReducer = createReducer(initialStateContacts, {
  [addContactAction]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload],
  }),
  [deleteContactAction]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== action.payload),
  }),
  [loadPersistedContacts]: (state, action) => ({ ...state, contacts: action.payload }),
  [changeFilterAction]: (state, action) => ({ ...state, filter: action.payload }),
});

const notificationState = { isContactAlreadyExist: false };
const notificationReducer = createReducer(notificationState, {
  [onExistFlagAction]: state => ({ ...state, isContactAlreadyExist: true }),
  [offExistFlagAction]: state => ({ ...state, isContactAlreadyExist: false }),
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
  notification: notificationReducer,
});

export default rootReducer;
