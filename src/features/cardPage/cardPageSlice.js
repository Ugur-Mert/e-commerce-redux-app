import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//const params = useParams();${params.productId}
const url = `https://fakestoreapi.com/products/1`;

const initialState = {
  singlePageItems: [],
  isLoadingPage: false,
};

export const getPageItems = createAsyncThunk(
  "cardPage/getPageItems",
  async () => {
    try {
      const res = await axios(url);
      console.log(res.data);
      return res.data;
    } catch (error) {}
  }
);

const cardPageSlice = createSlice({
  name: "cardPage",
  initialState,
  extraReducers: {
    [getPageItems.pending]: (state) => {
      state.isLoadingPage = true;
    },
    [getPageItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoadingPage = false;
      state.singlePageItems = action.payload;
    },
    [getPageItems.rejected]: (state) => {
      state.isLoadingPage = false;
    },
  },
});

export default cardPageSlice.reducer;
