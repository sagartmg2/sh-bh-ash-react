import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null, // logged out by default
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
      localStorage.removeItem("access_token")
    },
  },
});

export const { setUser, logout } = userSlice.actions; // named export

export default userSlice.reducer; // default export
