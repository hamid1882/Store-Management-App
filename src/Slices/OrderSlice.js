import { createSlice } from "@reduxjs/toolkit";

let currentId = 1;

const savedOrders = localStorage.getItem("orders");

export const initialState = {
  allMedicines: [],
  allOrders: savedOrders === null ? [] : JSON.parse(savedOrders),
  currentId,
};

const OrderSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    addMedicines: (state, action) => {
      state.allMedicines.push(action.payload);
    },
    addOrders: (state, action) => {
      state.allOrders.push(action.payload);
      state.currentId = state.currentId + 1;
    },
    emptyMedicine: (state, action) => {
      state.allMedicines = [];
    },
    deleteOrder: (state, action) => {
      const filteredOrders = state.allOrders.filter(
        (val) => val.id !== action.payload
      );
      state.allOrders = filteredOrders;
    },
  },
});

export const { addMedicines, addOrders, emptyMedicine, deleteOrder } =
  OrderSlice.actions;

// Selectors

export const selectAllMedicinesValue = (state) => state.OrderSlice.allMedicines;
export const selectAllOrders = (state) => state.OrderSlice.allOrders;
export const selectOrderId = (state) => state.OrderSlice.currentId;

export default OrderSlice.reducer;
