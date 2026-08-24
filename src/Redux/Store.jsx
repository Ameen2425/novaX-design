import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
