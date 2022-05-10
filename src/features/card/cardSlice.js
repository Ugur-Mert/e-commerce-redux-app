import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cardItems: [],
  cartItems: [],
  amount: 5,
  isLoading: false,
};

export const getProductItems = createAsyncThunk(
  "card/getProductItems",
  async () => {
    try {
      const res = await axios(url);
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload;
      state.cartProduct = state.cardItems.filter((item) => item.id === itemId);
      state.cartItems = state.cartItems.concat(state.cartProduct);
    },
  },
  extraReducers: {
    [getProductItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cardItems = action.payload;
    },
    [getProductItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addItem } = cardSlice.actions;

export default cardSlice.reducer;
