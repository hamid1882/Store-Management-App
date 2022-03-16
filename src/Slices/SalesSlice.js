import { createSlice } from "@reduxjs/toolkit";

let id = 1;

export const initialState = {
  allSalesExecs: [],
  id,
};

const SalesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addSalesExec: (state, action) => {
      state.allSalesExecs.push(action.payload);
      state.id = state.id + 1;
    },
    deleteSalesExec: (state, action) => {
      const filteredSalesExec = state.allSalesExecs.filter(
        (value) => value.id !== action.payload
      );
      state.allSalesExecs = filteredSalesExec;
    },
  },
});

export const { addSalesExec, deleteSalesExec } = SalesSlice.actions;

// Selectors

export const selectAllSales = (state) => state.SalesSlice.allSalesExecs;
export const selectIds = (state) => state.SalesSlice.id;

export default SalesSlice.reducer;
