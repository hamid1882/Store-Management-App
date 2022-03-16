import { configureStore } from "@reduxjs/toolkit";
import InventorySlice from "../Slices/InventorySlice";
import SalesSlice from "../Slices/SalesSlice";

const store = configureStore({
  reducer: {
    InventorySlice,
    SalesSlice,
  },
});

export default store;
