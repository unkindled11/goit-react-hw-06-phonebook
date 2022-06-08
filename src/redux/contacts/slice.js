import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    add: {
      reducer(store, { payload }) {
        store.push(payload);
      },
      prepare(data) {
        const newContact = { ...data, id: nanoid() };
        return { payload: newContact };
      },
    },
    remove: (store, { payload }) => store.filter(({ id }) => id !== payload),
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;