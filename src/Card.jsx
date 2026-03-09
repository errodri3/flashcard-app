import { useState } from "react";
import "./App.css";

function Card({ card, color }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>

        <div className="card-face card-front" style={{ backgroundColor: color }}>
          <span className="category">{card.category}</span>
          {card.image && <img src={card.image} alt={card.back} className="card-img" />}
          <p className="card-text">{card.front}</p>
          <span className="hint">click to flip</span>
        </div>

        <div className="card-face card-back" style={{ backgroundColor: color }}>
          <span className="category">{card.category}</span>
          <p className="card-text">{card.back}</p>
          <span className="hint">click to flip back</span>
        </div>

      </div>
    </div>
  );
}

export default Card;