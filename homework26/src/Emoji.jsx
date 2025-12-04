function Emoji({ onEmojiClick, id, count, value }) {
  return (
    <div className="emoji-wrapper">
      <button className="emoji" onClick={() => onEmojiClick(id)}>
        {value}
      </button>
      <span className="count">{count}</span>
    </div>
  );
}

export default Emoji;
