import React, { useEffect, useState } from "react";
import { timeFormat } from "./helper/timeFormat";

// import styling
import "../../stylesheets/css/Timer.css";

const Timer = () => {
  const [counter, setCounter] = useState(60);

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
