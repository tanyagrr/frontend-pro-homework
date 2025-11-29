import { Component } from "react";
import "./App.css";
import Emoji from "./Emoji.jsx";
import Result from "./Result.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { id: 1, icon: "🤣", count: 0 },
        { id: 2, icon: "🤠", count: 0 },
        { id: 3, icon: "🍔", count: 0 },
      ],
      showResult: false,
      winner: null,
      tie: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleClick(id) {
    this.setState((prevState) => {
      const updated = prevState.emojis.map((el) => {
        if (el.id === id) {
          return { ...el, count: el.count + 1 };
        }
        return el;
      });

      return { emojis: updated };
    });
  }

  handleClickButton() {
    this.setState((prevState) => {
      const sortedArray = [...prevState.emojis].sort(
        (a, b) => b.count - a.count
      );
      const winner = sortedArray[0];
      let updatedState;

      const tieHandleArray = sortedArray.filter(
        (el) => el.count === sortedArray[0].count && sortedArray[0].count !== 0
      );

      if (tieHandleArray.length > 1) {
        updatedState = {
          ...prevState,
          showResult: true,
          winner: tieHandleArray,
          tie: true,
        };
        localStorage.setItem("result", JSON.stringify(updatedState));
        return updatedState;
      }

      updatedState =
        winner.count === 0
          ? { ...prevState, showResult: true, winner: null }
          : { ...prevState, showResult: true, winner };

      localStorage.setItem("result", JSON.stringify(updatedState));
      return updatedState;
    });
  }

  handleClickClear() {
    this.setState(
      {
        emojis: [
          { id: 1, icon: "🤣", count: 0 },
          { id: 2, icon: "🤠", count: 0 },
          { id: 3, icon: "🍔", count: 0 },
        ],
        showResult: false,
        winner: null,
      },
      () => {
        localStorage.setItem("result", JSON.stringify(this.state.emojis));
      }
    );
  }

  componentDidMount() {
    const saved = localStorage.getItem("result");
    if (saved) {
      this.setState(JSON.parse(saved));
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Pick your favorite!</h1>
        <div className="emojis">
          <div className="emojis">
            {this.state.emojis.map((emoji) => (
              <Emoji
                key={emoji.id}
                id={emoji.id}
                value={emoji.icon}
                count={emoji.count}
                onEmojiClick={this.handleClick}
              />
            ))}
          </div>
        </div>
        <button className="btn" onClick={this.handleClickButton}>
          Show result
        </button>
        {this.state.showResult && (
          <Result tie={this.state.tie} winner={this.state.winner} />
        )}
        <button className="btn" onClick={this.handleClickClear}>
          Clear result
        </button>
      </div>
    );
  }
}

export default App;
