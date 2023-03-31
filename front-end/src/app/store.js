import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { store } from "redux/lib/redux/store";

export const { useGetPostsQuery } = apiSlice;

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
// Path: front-end\src\app\apiSlice.js
// Compare this snippet from front-end\src\app\apiSlice.js:
// export const { useGetPostsQuery } = apiSlice;
//
// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });
