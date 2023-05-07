import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productosApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getProductos: builder.query({
      query: () => "/productos",
      providesTags: ["productos"],
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    createProducto: builder.mutation({
      query: (newProducto) => ({
        url: "/productos",
        method: "POST",
        body: newProducto,
      }),
      invalidatesTags: ["productos"],
    }),
    deleteProducto: builder.mutation({
      query: (id) => ({
        url: `/productos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["productos"],
    }),
    updateProducto: builder.mutation({
      query: (updatedProductos) => ({
        url: `/productos/${updatedProductos.id}`,
        method: "PATCH",
        body: updatedProductos,
      }),
      invalidatesTags: ["productos"],
    }),
  }),
});

export const {
  useGetProductosQuery,
  useCreateProductoMutation,
  useDeleteProductoMutation,
  useUpdateProductoMutation,
} = productosApi;
