import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    // [
    //   {"name:one",_id,quantity:1}
    //   {"name:two",_id,quantity:2}
    // ]

  },
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addToCart:(state,action)=>{
      let product = action.payload
      let temp = [...state.value]
      /* code here.. */

      state.value = temp

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

export const { increment, decrement,setCart,addToCart } = cartSlice.actions;

export default cartSlice.reducer;
