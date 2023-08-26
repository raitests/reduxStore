import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  title: "Test Item",
  items: [],
  quantity: 0,
  total: 0,
  price: 6,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    onShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    decreaseQuantity: (state) => {
      state.quantity = state.quantity - 1;
    },
    increaseQuantity: (state) => {
      state.quantity = state.quantity + 1;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
