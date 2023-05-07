import { createSlice } from "@reduxjs/toolkit";

export const productoSlice = createSlice({
  name: "producto",
  initialState: {
    productoEditar: {},
  },
  reducers: {
    obtenerProductoEditar: (state, action) => {
      state.productoEditar = action.payload;
    },
  },
});

export const { obtenerProductoEditar } = productoSlice.actions;
