import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/card/cardSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
