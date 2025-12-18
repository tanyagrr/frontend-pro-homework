import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "./store/rootReducer";

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleDecrement = () => {
    dispatch(decremented());
  };

  return (
    <div className="container">
      <span className="value">Value: {value}</span>
      <div className="btn-container">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
