import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    handleShowCart: (state, action) => {
        state.showCart = !state.showCart;
    }
  },
});

export const { addToCart, removeFromCart, handleShowCart } =
  cartSlice.actions;

export default cartSlice.reducer;