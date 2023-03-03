import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
  counterVisible: true,
};

const counterSlice = createSlice({
  name: "COUNTER",
  initialState,
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

const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;
