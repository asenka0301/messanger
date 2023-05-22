/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentContactId: null,
  contacts: [],
};

const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    setCurrentContactId(state, { payload }) {
      state.currentContactId = payload;
    },
  },
});

export const { addContact, setCurrentContactId } = contactsReducer.actions;
export default contactsReducer.reducer;
