import { configureStore } from "@reduxjs/toolkit";
import InventorySlice from "../Slices/InventorySlice";
import SalesSlice from "../Slices/SalesSlice";
import OrderSlice from "../Slices/OrderSlice";

const store = configureStore({
  reducer: {
    InventorySlice,
    SalesSlice,
    OrderSlice,
  },
});

export default store;
