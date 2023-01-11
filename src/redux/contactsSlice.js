import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  notifyContactsCount,
  notifyError,
  notifyAddContactSuccess,
  notifyDeleteContactSuccess,
} from 'components/Notification/Notification';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  notifyError();
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      notifyContactsCount(state.items.length);
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
      notifyAddContactSuccess();
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      notifyDeleteContactSuccess();
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
