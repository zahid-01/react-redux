import { createStore } from "redux";

const initialState = {
  counter: 1,
  counterVisible: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INC") {
    if (action.incByFive) {
      return {
        counter: state.counter + 5,
        counterVisible: state.counterVisible,
      };
    }
    return {
      counter: state.counter + 1,
      counterVisible: state.counterVisible,
    };
  }

  if (action.type === "DEC") {
    return { counter: state.counter - 1, counterVisible: state.counterVisible };
  }

  if (action.type === "TOGGLE") {
    return { counter: state.counter, counterVisible: !state.counterVisible };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
