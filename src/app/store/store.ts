import { configureStore } from '@reduxjs/toolkit';
import { requestSlice } from "./requestSlice"

export const store = configureStore({
  reducer: {
    requests: requestSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;