import "../../stylesheets/css/DadJokes.css";
import { useState } from "react";
import { dadJokesData } from "../home/Data/DadJokesData";

function DadJokes() {
  const [currentJoke, setCurrentJoke] = useState(0);

  const onLeftClick = () => {
    if (currentJoke > 0 && setCurrentJoke(currentJoke - 1)) {
    } else if (currentJoke === 0) {
      setCurrentJoke(dadJokesData.length - 1);
    }
  };

  const onRightClick = () => {
    if (currentJoke === dadJokesData.length - 1) {
      setCurrentJoke(0);
    } else {
      setCurrentJoke(currentJoke + 1);
    }
  };

  return (
    <div>
      <div className="left-click" onClick={() => onLeftClick()}>
        <button />
      </div>
      <div className="dad-joke">
        <h1 className="joke-text">{dadJokesData[currentJoke]}</h1>
      </div>
      <div className="right-click" onClick={() => onRightClick()}>
        <button />
      </div>
    </div>
  );
}

export default DadJokes;
