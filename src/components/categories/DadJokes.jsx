import "../../stylesheets/css/DadJokes.css";
import { useState } from "react";
import { dadJokesData } from "../home/Data/DadJokesData.js";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"

function DadJokes() {
  const [currentJoke, setCurrentJoke] = useState(0);

  // console.log('dadJokesData--->', dadJokesData)

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
    <div className="dad">
      
      <div className="left-click" onClick={() => onLeftClick()}>
      <ArrowBackIosSharpIcon style={{ fontSize: 30 }} />
      </div>
      <div className="dad-joke">
        <h1 className="joke-text">{dadJokesData[currentJoke]}</h1>
      </div>
      <div className="right-click" onClick={() => onRightClick()}>
      <ArrowForwardIosSharpIcon style={{ fontSize: 30 }} />
      </div>
    </div>
  );
}

export default DadJokes;
