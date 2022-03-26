import { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ModalComp from "../Modal";
import Back from "./Back";

import { guess } from "../../Data/guessData";

const Add = () => {
  const [saved, setSaved] = useState(false);
  const questionRef = useRef();
  const answerRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hit here");
    const newQA = {
      question: questionRef.current.value,
      answer: answerRef.current.value,
    };
    guess.push(newQA);
    questionRef.current.value = "";
    answerRef.current.value = "";
    console.log("guess-->", guess);

    setSaved(true);
  };

  return (
    <div>
      <div className="back">
        <Back />
      </div>
      <h1>Add A Joke!</h1>
      <Form onSubmit={handleSubmit}>
        <h2>
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              ref={questionRef}
              placeholder="Why is 6 afraid of 7?"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Answer</Form.Label>
            <Form.Control type="text" ref={answerRef} placeholder="7 ate 9" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Joke
          </Button>
        </h2>
      </Form>
      {saved && (
        <ModalComp
          show={saved}
          setShow={setSaved}
          title={"Joke Saved!"}
          message={"Thank you for contributing!"}
        />
      )}
    </div>
  );
};

export default Add;
