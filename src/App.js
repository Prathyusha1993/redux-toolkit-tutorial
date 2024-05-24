import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, incByAmount, increment } from "./redux/counter";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Toolkit Tutorial</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incByAmount(30))}>Inc By 30</button>
    </div>
  );
};

export default App;
