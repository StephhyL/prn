import React from 'react'
import { InputGroup, FormControl, Button} from 'react-bootstrap'

import "../../stylesheets/scss/Guess.scss"
const Guess = () => {
  return (
    <div className='guess'>
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

export default Guess