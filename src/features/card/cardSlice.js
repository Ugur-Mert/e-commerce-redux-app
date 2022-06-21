import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cardItems: [],
  cardItemsTemp: [],
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cardCategory: [],
  amount: 0,
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

      if (state.cartItems.find((item) => item.id === itemId)) {
        const cartItem = state.cartItems.find(
          (item) => item.id === action.payload
        );
        cartItem.quantity = cartItem.quantity + 1;
        state.amount = state.amount + 1;
        toast.info("increased quantity", {
          position: "top-right",
        });
      } else {
        state.cartItems.push(
          state.cardItems.find((item) => item.id === itemId)
        );
        state.amount = state.amount + 1;
        state.cardItems.map((obj) => (obj.quantity = 1));
        toast.success("Added to cart.", {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.amount = state.amount - cartItem.quantity;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("product removed", {
        position: "top-right",
      });
    },

    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
      state.amount = state.amount + 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      state.amount = state.amount - 1;
      cartItem.quantity = cartItem.quantity - 1;
      if (cartItem.quantity < 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== payload.id
        );
        toast.error("product removed", {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    men: (state) => {
      state.cardCategory = state.cardItems.filter(
        (item) => item.category === "men's clothing"
      );
    },
    women: (state) => {
      state.cardCategory = state.cardItems.filter(
        (item) => item.category === "women's clothing"
      );
    },
    jewelery: (state) => {
      state.cardCategory = state.cardItems.filter(
        (item) => item.category === "jewelery"
      );
    },
    electronics: (state) => {
      state.cardCategory = state.cardItems.filter(
        (item) => item.category === "electronics"
      );
    },

    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    filteredProducts: (state, action) => {
      state.cardItems = state.cardItemsTemp.filter((product) =>
        product.title.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: {
    [getProductItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cardItems = action.payload;
      state.cardItemsTemp = action.payload;
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
  men,
  women,
  jewelery,
  electronics,
  filteredProducts,
} = cardSlice.actions;

export default cardSlice.reducer;
