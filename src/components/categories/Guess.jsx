import React from "react";
import { useState } from "react";
// import {Button} from 'react-bootstrap'
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Button from "@mui/material/Button";

// import other Components
import Back from "./Back";
import Card from "../../UI/Card";

// import data
import { guess } from "../../Data/guessData.js";

import "../../stylesheets/scss/Guess.scss";

const Guess = () => {
  const [currentJoke, setCurrentJoke] = useState(0);
  const [question, setQuestion] = useState(true);

  console.log("guessData-->", guess);
  const onClick = () => {
    setQuestion(!question);
  };
  const onLeftClick = () => {
    if (currentJoke > 0 && setCurrentJoke(currentJoke - 1)) {
    } else if (currentJoke === 0) {
      setCurrentJoke(guess.length - 1);
    }
    setQuestion(true);
  };

  const onRightClick = () => {
    if (currentJoke === guess.length - 1) {
      setCurrentJoke(0);
    } else {
      setCurrentJoke(currentJoke + 1);
    }
    setQuestion(true);
  };

  return (
    <div className="guess">
      <div className="backArrow">
        <div className="back">
          <Back />
        </div>
      </div>
      <Card>
        <div className="flip-card-front" onClick={onClick}>
          <p className="answer">
            {question === true
              ? guess[currentJoke].question
              : guess[currentJoke].answer}
          </p>
        </div>
      </Card>

      <div className="arrow-container">
        <div className="left-click">
          <Button
            onClick={() => onLeftClick()}
            // variant="contained"
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
};

export default Guess;
