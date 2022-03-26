import React, { useEffect, useState } from "react";

// import other libraries
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import useSound from "use-sound";

// import local files
import { timeFormat } from "./helper/timeFormat";
import timerSound from "./alarm.mp3";

// import styling
import "../../stylesheets/css/Timer.css";

const Timer = (props) => {
  const { timer, setShow } = props;
  const [counter, setCounter] = useState(timer);
  const [playSound, setPlaySound] = useState(false);
  const [play] = useSound(timerSound);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(counter);

  useEffect(() => {
    // reset counter - restart timer
    setCounter(timer);
  }, [timer]);

  useEffect(() => {
    if (counter === 0) {
      setShow(true);
      // setPlaySound(true);
    }
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    // play sound
    play();
    // set play sound to false
    setPlaySound(false);
  }, [playSound]);

  return (
    <div className="timer">
      <div className="time">{timeFormat(counter)}</div>
    </div>
  );
};

export default Timer;
