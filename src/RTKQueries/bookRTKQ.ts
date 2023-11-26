import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookRTKQ = createApi({
  reducerPath: "bookRTKQ",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/" }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    // ===========================
    // Books
    getAllBooks: builder.query<IBook[], void>({
      query: () => "books",
    }),

    getBooksByStatusCondition: builder.query<IBook[], string>({
      query: (condition) => `books/?q=${condition}`,
    }),

    // ==========================

    // Users
    addUser: builder.mutation<any, Omit<IUser, "id">>({
      query: (userInfo) => ({
        url: "users",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: [{ type: "Users", id: "Users_ID" }],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBooksByStatusConditionQuery,
  useAddUserMutation,
} = bookRTKQ;
