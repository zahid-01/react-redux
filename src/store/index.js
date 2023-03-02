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
      state.counter += action.value;
    },
  },
});

const store = configureStore(counterSlice);

export default store;
