function Result({ winner, tie }) {
  if (winner === null) {
    return (
      <>
        <h2>No votes yet.</h2>
      </>
    );
  } else if (tie && Array.isArray(winner)) {
    return (
      <>
        <h2>It's a tie!</h2>
        <div className="tie">
          {winner.map((emoji) => (
            <div key={emoji.id} className="emoji-wrapper">
              <ResultEmoji value={emoji} />
            </div>
          ))}
        </div>
      </>
    );
  } else
    return (
      <>
        <h2>The winner is:</h2>
        <div className="emoji-wrapper result">
          <ResultEmoji value={winner} />
        </div>
      </>
    );
}

export default Result;

function ResultEmoji({ value }) {
  return (
    <>
      <div className="emoji">{value.icon}</div>
      <span className="count">{value.count}</span>
    </>
  );
}
