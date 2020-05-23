import * as Types from './actionTypes';

export const addContact = ({ name, number }) => ({
  type: Types.ADD_CONTACT,
  payload: { name, number },
});

export const deleteContact = id => ({
  type: Types.DELETE_CONTACT,
  payload: { id },
});

export const editContact = id => ({
  type: Types.START_EDIT_CONTACT,
  payload: { id },
});

export const changeEditor = ({ name, number }) => ({
  type: Types.CHANGE_EDITOR,
  payload: { name, number },
});

export const saveContact = ({ name, number }) => ({
  type: Types.SAVE_EDITED_CONTACT,
  payload: { name, number },
});
