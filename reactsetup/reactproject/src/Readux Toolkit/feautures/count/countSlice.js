import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("amount/incrementByValue", (state, action) => {
      console.log("state------>");
      state.count += 1000;
    });
  },
});

export default countSlice.reducer;
export const { increment, decrement } = countSlice.actions;
