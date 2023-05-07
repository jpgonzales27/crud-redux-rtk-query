import { configureStore } from "@reduxjs/toolkit";
import { productosApi } from "./apis/productosApi";
import { productoSlice } from "./slices/productoSlice";

export const store = configureStore({
  reducer: {
    producto: productoSlice.reducer,

    [productosApi.reducerPath]: productosApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productosApi.middleware),
});
