import { createSlice } from "@reduxjs/toolkit";

let id = 1;

export const initialState = {
  allInventories: [],
  id,
};

const InventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.allInventories.push(action.payload);
      state.id = state.id + 1;
    },
    deleteItem: (state, action) => {
      const filteredInventories = state.allInventories.filter(
        (val) => val.id !== action.payload
      );
      state.allInventories = filteredInventories;
    },
    updateItem: (state, action) => {
      state.allInventories[action.payload.id] = action.payload.data;
      // eslint-disable-next-line
      state.allInventories = state.allInventories;
    },
    updateStock: (state, action) => {
      const findId = state.allInventories.find(
        (val) => val.id === action.payload.id
      );
      findId.stock = findId.stock - action.payload.sold;
      // eslint-disable-next-line
      state.allInventories = state.allInventories;
    },
  },
});

export const { addNewItem, deleteItem, updateItem, updateStock } =
  InventorySlice.actions;

// Selectors

export const selectAllInventories = (state) =>
  state.InventorySlice.allInventories;
export const selectId = (state) => state.InventorySlice.id;

export default InventorySlice.reducer;
