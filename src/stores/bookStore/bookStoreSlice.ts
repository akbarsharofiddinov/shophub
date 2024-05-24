import { createSlice } from "@reduxjs/toolkit";

interface IState {
  users: IUser[];
}

const initialState: IState = {
  users: [
    {
      id: 0,
      user: "Akbar",
      password: "Akbar2004#",
    },
  ],
};

export const bookStoreSlice = createSlice({
  name: "BookStore",
  initialState,
  reducers: {},
});

export default bookStoreSlice.reducer;
