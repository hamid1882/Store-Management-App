import { createSlice } from "@reduxjs/toolkit";

let id = 1;

export const initialState = {
  allInventories: [],
  editItemData: {},
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
    editItem: (state, action) => {
      state.editItemData = state.allInventories.filter(
        (value) => value.id === action.payload
      );
    },
    updateItem: (state, action) => {
      state.allInventories[action.payload.id] = action.payload.updatedFile;
      // eslint-disable-next-line
      state.allInventories = state.allInventories;
    },
  },
});

export const { addNewItem, deleteItem, editItem, updateItem } =
  InventorySlice.actions;

// Selectors

export const selectAllInventories = (state) =>
  state.InventorySlice.allInventories;
export const selectId = (state) => state.InventorySlice.id;
export const selectItem = (state) => state.InventorySlice.editItemData;

export default InventorySlice.reducer;
