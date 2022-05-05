import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cardItems: [],
  amount: 0,
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

export default cardSlice.reducer;
