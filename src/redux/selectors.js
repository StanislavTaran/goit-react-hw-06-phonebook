import { createSelector } from 'reselect';

export const getAllContacts = state => state.contacts.contacts;

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector([getAllContacts, getFilter], (contacts, filter) =>
  contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())),
);

export const getExistContactFlag = state => state.notification.isContactAlreadyExist;
