import { configureStore } from "@reduxjs/toolkit";

// Slices
import bookStoreSlice from "@/stores/bookStore/bookStoreSlice";

// RTK Queries
import { bookRTKQ } from "../RTKQueries/bookRTKQ";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    bookStore: bookStoreSlice,
    [bookRTKQ.reducerPath]: bookRTKQ.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookRTKQ.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
