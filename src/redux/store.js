import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from 'redux/contactsSlice';
import { filterReducer } from 'redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
