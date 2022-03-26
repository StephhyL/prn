import "../../stylesheets/css/DadJokes.css";
import { useState } from "react";
import { dadJokesData } from "../../Data/dadJokesData";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Card from "../../UI/Card";
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
      <Card>
      <div className="left-click" onClick={() => onLeftClick()}>
        <ArrowBackIosSharpIcon style={{ fontSize: 30 }} />
      </div>
      <div className="dad-joke">
        <h1 className="joke-text">{dadJokesData[currentJoke].joke}</h1>
      </div>
      <div className="right-click" onClick={() => onRightClick()}>
        <ArrowForwardIosSharpIcon style={{ fontSize: 30 }} />
      </div>
      </Card>
    </div>
  );
}

export default DadJokes;
