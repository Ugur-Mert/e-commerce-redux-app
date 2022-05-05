import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./features/card/cardSlice";
import cardPageReducer from "./features/cardPage/cardPageSlice";
export const store = configureStore({
  reducer: {
    card: cardReducer,
    cardPage: cardPageReducer,
  },
});
