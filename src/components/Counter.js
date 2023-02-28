import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, counterVisible } = useSelector((state) => {
    return { counter: state.counter, counterVisible: state.counterVisible };
  });
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispatch({ type: "INC" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DEC" });
  };

  const incByFiveHandler = () => {
    dispatch({ type: "INC", incByFive: true });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incByFiveHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
