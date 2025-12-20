import { useSelector } from "react-redux";

function Card() {
  const { data, isLoading, error } = useSelector((state) => state.swapi);

  if (isLoading) {
    return <div className="spinner-border" />;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (data.payload === null) {
    return (
      <div className="card">
        <div className="card-body"></div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <span className="badge bg-secondary me-2">{data.type}</span>
        <span className="badge bg-secondary">{data.id}</span>

        <pre className="mt-3 mb-0">{JSON.stringify(data.payload, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Card;
