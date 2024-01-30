import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addToCart: (state, action) => {
      let product = action.payload;
      let temp = [...state.value];

      if (temp.find((el) => el._id == product._id)) {
        temp = temp.map((el) => {
          if (el._id == product._id) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return el;
        });
      } else {
        temp.push({ ...product, quantity: 1 });
      }

      state.value = temp;
      localStorage.setItem("cartItems", JSON.stringify(state.value));
    },
    increment: (state, action) => {
      localStorage.setItem("cartItems", JSON.stringify(state.value));
    },
    decrement: (state, action) => {
      let product = action.payload;
      let temp = [...state.value];

      temp = temp = temp.map((el) => {
        if (el._id == product._id) {
          return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      });

      temp = temp.filter((el) => el.quantity > 0);

      state.value = temp;

      localStorage.setItem("cartItems", JSON.stringify(state.value));
    },
  },
});

export const { increment, decrement, setCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
