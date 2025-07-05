import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["book"],  
    endpoints: (builder) => ({
        
        getBooks: builder.query<any, { filter?: string; sortBy?: string; sort?: string; limit?: number } | void>({
  query: (args) => {
    const params = new URLSearchParams();

    if (args?.filter) params.append("filter", args.filter);
    if (args?.sortBy) params.append("sortBy", args.sortBy);
    if (args?.sort) params.append("sort", args.sort);
    if (args?.limit) params.append("limit", args.limit.toString());

    const queryString = params.toString();
    return `/books${queryString ? `?${queryString}` : ""}`;
  },
  providesTags: ["book"],
}),


        getBookById: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["book"],
        }),

        getBorrowSummary: builder.query<any, void>({
            query: () => "/borrow",
            providesTags: ["book"],
        }),

        createBook: builder.mutation({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["book"] 
        }),

        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `/books/${bookId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["book"]
        }),

        updateBook: builder.mutation({
            query: ({ id, updatedData }) => ({
                url: `/books/${id}`,
                method: "PUT", 
                body: updatedData,
            }),
            invalidatesTags: ["book"],
        }),

        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData,
            }),
            invalidatesTags: ["book"],
        }),

    })
})

export const { useGetBooksQuery, useCreateBookMutation, useDeleteBookMutation, useUpdateBookMutation, useGetBookByIdQuery, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi;