import React, { useEffect, useState } from "react";
import { timeFormat } from "./helper/timeFormat";
import useSound from "use-sound";

// import styling
import "../../stylesheets/css/Timer.css";
// import mp3 audio for timer
import timerSound from "./alarm.mp3";

const Timer = (props) => {
  const { timer } = props;
  const [counter, setCounter] = useState(timer);
  const [playSound, setPlaySound] = useState(false);
  const [play] = useSound(timerSound);

  console.log(counter);

  useEffect(() => {
    // reset counter - restart timer
    setCounter(timer);
  }, [timer]);

  useEffect(() => {
    if (counter === 0) {
      setPlaySound(true);
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
