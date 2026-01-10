import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./burgerSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: {
    burger: burgerSlice,
    modal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
