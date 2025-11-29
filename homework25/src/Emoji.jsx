import { Component } from "react";

class Emoji extends Component {
  render() {
    return (
      <div className="emoji-wrapper">
        <button
          className="emoji"
          onClick={() => this.props.onEmojiClick(this.props.id)}
        >
          {this.props.value}
        </button>
        <span className="count">{this.props.count}</span>
      </div>
    );
  }
}

export default Emoji;
