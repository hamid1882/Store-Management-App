import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "../Feautures/ItemsSlice";

const store = configureStore({
  reducer: {
    itemsSlice,
  },
});

export default store;
