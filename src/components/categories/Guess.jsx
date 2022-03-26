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

  console.log("guessData-->", guess);
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
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">{guess[currentJoke].question}</div>
          <div class="flip-card-back">
            
            <p>{guess[currentJoke].answer}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Guess;

