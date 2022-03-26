import React, { useEffect, useState } from "react";
import { timeFormat } from "./helper/timeFormat";

// import styling
import "../../stylesheets/css/Timer.css";

const Timer = (props) => {
  const { timer } = props;
  const [counter, setCounter] = useState(timer);
  console.log(counter);

  useEffect(() => {
    // reset counter - restart timer
    setCounter(timer);
  }, [timer]);

  useEffect(() => {
    const timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="timer">
      <div className="time">{timeFormat(counter)}</div>
    </div>
  );
};

export default Timer;
