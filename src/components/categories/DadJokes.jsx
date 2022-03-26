import "../../stylesheets/css/DadJokes.css";
import { useState } from "react";
import { dadJokesData } from "../../Data/dadJokesData";
import Button from "@mui/material/Button";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
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
        <div className="left-click">
          <Button
            onClick={() => onLeftClick()}
            color="primary"
            variant="variant"
            size="large"
            sx={{ boxShadow: 3 }}
            aria-label="add"
          >
            <ArrowBackSharpIcon classname="arrow-icon" />
          </Button>
        </div>

        <div className="right-click">
          <Button
            onClick={() => onRightClick()}
            variant="variant"
            size="large"
            sx={{ boxShadow: 3 }}
            color="primary"
            aria-label="add"
          >
            <ArrowForwardSharpIcon classname="arrow-icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DadJokes;
