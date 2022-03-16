import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  allMedicines: [],
};

const OrderSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addMedicines: (state, action) => {
      state.allMedicines.push(action.payload);
    },
  },
});

export const { addMedicines } = OrderSlice.actions;

// Selectors

export const selectAllMedicinesValue = (state) => state.OrderSlice.allMedicines;

export default OrderSlice.reducer;
