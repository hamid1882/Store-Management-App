import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  counter: 0,
};

const ItemsSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.counter = state.counter + 1;
    },
  },
});

export const { incrementCounter } = ItemsSlice.actions;

// Selectors

export const selectCounter = (state) => state.itemsSlice.counter;

export default ItemsSlice.reducer;
