import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSwapiThunk } from "./store/swapiSlice";

function SwapiForm() {
  const [path, setPath] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!path.trim()) return;
    dispatch(fetchSwapiThunk(path));
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <span className="input-group-text">https://swapi.info/api/</span>

      <input
        type="text"
        className="form-control"
        placeholder="people/1/"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />

      <button className="btn btn-outline-secondary" type="submit">
        Get info
      </button>
    </form>
  );
}

export default SwapiForm;
