import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {counterActions} from '../store/index'
const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  const toggleCounterHandler = (

  ) => {};
  
 
  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () =>{
    dispatch(counterActions.increase(10));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
