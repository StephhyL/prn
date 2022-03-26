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
      <Card className="dad-joke">
          <h1 className="joke-text">{dadJokesData[currentJoke].joke}</h1>
        
      </Card>
      <div className="arrow-container">
        <Card className="left-click" onClick={() => onLeftClick()}>
          <div >
            <ArrowBackIosSharpIcon style={{ fontSize: 30 }} />
          </div>
        </Card>
        <Card className="right-click" onClick={() => onRightClick()}>
    
            <ArrowForwardIosSharpIcon style={{ fontSize: 30 }} />
          
        </Card>
      </div>
    </div>
  );
}

export default DadJokes;
