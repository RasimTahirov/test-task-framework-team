import { configureStore } from "@reduxjs/toolkit";
import { paintingsApi } from "../api/api";
import themeReducer from "./slice";

export const store = configureStore({
  reducer: {
    [paintingsApi.reducerPath]: paintingsApi.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paintingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
