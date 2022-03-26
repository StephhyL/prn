import "../../stylesheets/css/DadJokes.css";
import { useState } from "react";
import { dadJokesData } from "../../Data/dadJokesData";
import { shadows } from '@mui/system';
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

import Button from "@mui/material/Button";
import Card from "../../UI/Card";
// import Button from ""
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
        <div className="left-click">
          <Button
            onClick={() => onLeftClick()}
            variant="contained"
            size="large"
            endIcon={<ArrowBackSharpIcon />}
          ></Button>
        </div>

        <div className="right-click">
          <Button
            onClick={() => onRightClick()}
            variant="contained"
            size="large"
            startIcon={<ArrowForwardSharpIcon />}
          />
        </div>
      </div>
    </div>
  );
}

export default DadJokes;
