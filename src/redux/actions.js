import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('ADD_CONTACT', (name, number) => ({
  payload: { name, number, id: uuidv4() },
}));

export const deleteContactAction = createAction('DELETE_CONTACT');

export const loadPersistedContacts = createAction('LOAD_PERSISTED_CONTACT');

export const onExistFlagAction = createAction('ON_FLAG_EXIST');

export const offExistFlagAction = createAction('OFF_FLAG_EXIST');

export const changeFilterAction = createAction('CHANGE_EDITOR');
