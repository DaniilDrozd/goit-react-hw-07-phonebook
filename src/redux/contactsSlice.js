import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  toggleCompleted,
} from 'redux/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};
const handleAddContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};

const handleDeleteContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== action.payload);
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(getContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(getContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactsFulfilled)
      .addCase(addContact.rejected, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactsFulfilled)
      .addCase(toggleCompleted.rejected, handleRejected),
});
export const contactReducer = contactSlice.reducer;
