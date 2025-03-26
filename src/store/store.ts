import { configureStore } from "@reduxjs/toolkit";
import { paintingsApi } from "../api/api";

export const store = configureStore({
  reducer: {
    [paintingsApi.reducerPath]: paintingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paintingsApi.middleware),
});
