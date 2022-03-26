import React from 'react'
import { InputGroup, FormControl, Button} from 'react-bootstrap'
// import other Components
import Back from "./Back";

// import data
import { guessData } from "../../Data/guessData";

import "../../stylesheets/scss/Guess.scss"
const Guess = () => {
  console.log("guessData-->", guessData);
  return (
    <div className='guess'>
      <div className="back">
        <Back />
      </div>
    <div className='question'></div>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Take a guess!"
      aria-describedby="basic-addon2"
    />
    <Button className='enterButton' variant="outline-secondary" id="button-addon2">
      Enter
    </Button>
  </InputGroup>
    </div>
  )
}


export default Guess;
