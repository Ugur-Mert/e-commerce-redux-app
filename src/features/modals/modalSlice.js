import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  isLoginOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openLogin: (state, action) => {
      state.isLoginOpen = true;
    },
    closeLogin: (state, action) => {
      state.isLoginOpen = false;
    },
  },
});

export const { openModal, closeModal, openLogin, closeLogin } =
  modalSlice.actions;
export default modalSlice.reducer;
