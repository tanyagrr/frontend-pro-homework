import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Emoji from "./Emoji.jsx";
import Result from "./Result.jsx";

function App() {
  const [emojis, setEmojis] = useState([
    { id: 1, icon: "🤣", count: 0 },
    { id: 2, icon: "🤠", count: 0 },
    { id: 3, icon: "🍔", count: 0 },
  ]);
  const [showResult, setShowResult] = useState(false);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("result");
    if (saved) {
      const parsed = JSON.parse(saved);
      setEmojis(parsed.emojis);
      setWinner(parsed.winner);
      setTie(parsed.tie);
      setShowResult(parsed.showResult);
    }
  }, []);

  useEffect(() => {
    if (!showResult) return;
    const data = { emojis, showResult, winner, tie };
    localStorage.setItem("result", JSON.stringify(data));
  }, [emojis, showResult, winner, tie]);

  const handleClick = (id) => {
    setEmojis(
      emojis.map((el) => {
        if (el.id === id) {
          return { ...el, count: el.count + 1 };
        }
        return el;
      })
    );
  };

  const handleClickButton = () => {
    const sortedArray = emojis.toSorted((a, b) => b.count - a.count);
    const winner = sortedArray[0];
    const tieHandleArray = sortedArray.filter(
      (el) => el.count === sortedArray[0].count && sortedArray[0].count !== 0
    );
    if (tieHandleArray.length > 1) {
      setShowResult(true);
      setTie(true);
      setWinner(tieHandleArray);
      return;
    }

    setTie(false);

    if (winner.count === 0) {
      setShowResult(true);
      setWinner(null);
    } else {
      setShowResult(true);
      setWinner(winner);
    }
  };

  const handleClickClear = () => {
    setEmojis([
      { id: 1, icon: "🤣", count: 0 },
      { id: 2, icon: "🤠", count: 0 },
      { id: 3, icon: "🍔", count: 0 },
    ]);
    setShowResult(false);
    setWinner(null);
    setTie(false);

    localStorage.removeItem("result");
  };

  return (
    <>
      <div className="container">
        <h1>Pick your favorite!</h1>
        <div className="emojis">
          <div className="emojis">
            {emojis.map((emoji) => (
              <Emoji
                key={emoji.id}
                id={emoji.id}
                value={emoji.icon}
                count={emoji.count}
                onEmojiClick={handleClick}
              />
            ))}
          </div>
        </div>
        <button className="btn" onClick={handleClickButton}>
          Show result
        </button>
        {showResult && <Result tie={tie} winner={winner} />}
        <button className="btn" onClick={handleClickClear}>
          Clear result
        </button>
      </div>
    </>
  );
}

export default App;
