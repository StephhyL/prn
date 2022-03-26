import React from "react";
// import { InputGroup, FormControl, Button} from 'react-bootstrap'
// import other Components
import Back from "./Back";

// import data
import { guessData } from "../../Data/guessData";

import "../../stylesheets/scss/Guess.scss";
const Guess = () => {
  console.log("guessData-->", guessData);

  return (
    <>
      <div className="back">
        <Back />
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">TEST</div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Guess;

