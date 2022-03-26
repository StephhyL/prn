import React from "react";
import { useState } from "react";
// import { InputGroup, FormControl, Button} from 'react-bootstrap'
// import other Components
import Back from "./Back";

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
  };

  const onRightClick = () => {
    if (currentJoke === guess.length - 1) {
      setCurrentJoke(0);
    } else {
      setCurrentJoke(currentJoke + 1);
    }
  };

  return (
    <>
      <div className="back">
        <Back />
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" onClick={onClick}>
            <p className="answer">
              {question === true
                ? guess[currentJoke].question
                : guess[currentJoke].answer}
            </p>
          </div>
          {/* <div class="flip-card-back"> */}
        </div>
      </div>
    </>
  );
};

export default Guess;
