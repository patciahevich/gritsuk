import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleBurger: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
