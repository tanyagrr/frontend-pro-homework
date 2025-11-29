import { Component } from "react";

class Result extends Component {
  render() {
    if (this.props.winner === null) {
      return (
        <>
          <h2>No votes yet.</h2>
        </>
      );
    } else if (this.props.tie && Array.isArray(this.props.winner)) {
      return (
        <>
          <h2>It's a tie!</h2>
          <div className="tie">
            {this.props.winner.map((emoji) => (
              <div key={emoji.id} className="emoji-wrapper">
                <div className="emoji">{emoji.icon}</div>
                <span className="count">{emoji.count}</span>
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
            <div className="emoji">{this.props.winner.icon}</div>
            <span className="count">{this.props.winner.count}</span>
          </div>
        </>
      );
  }
}

export default Result;
