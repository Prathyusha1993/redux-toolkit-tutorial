import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incByAmount(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incByAmount } = counter.actions;
export default counter.reducer;
