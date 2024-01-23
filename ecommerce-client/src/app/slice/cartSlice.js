import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("cart", state.value);
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement,setCart } = cartSlice.actions;

export default cartSlice.reducer;
