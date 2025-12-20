import "./App.css";
import Card from "./Card.jsx";
import SwapiForm from "./Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearData } from "./store/swapiSlice.js";

function App() {
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>SWAPI</h1>
        <SwapiForm></SwapiForm>
        <Card></Card>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => dispatch(clearData())}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
