import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cardItems: [],
  cartItems: [],
  amount: 0,
  singleAmount: 1,
  total: 0,
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
      state.amount = state.amount + 1;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount = state.amount - 1;
    },
    increase: (state, { payload }) => {
      state.cartItems.find((item) => item.id === payload.id);
      state.amount = state.amount + 1;
    },
    decrease: (state, { payload }) => {
      state.cartItems.find((item) => item.id === payload.id);
      state.amount = state.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
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

export const {
  addItem,
  removeItem,
  increase,
  decrease,
  clearCart,
  calculateTotal,
} = cardSlice.actions;

export default cardSlice.reducer;
