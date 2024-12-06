import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./burgerSlice";

const store = configureStore({
  reducer: {
    burger: burgerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
