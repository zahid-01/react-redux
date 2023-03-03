import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 1,
  counterVisible: true,
};

const counterSlice = createSlice({
  name: "COUNTER",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.counterVisible = !state.counterVisible;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
