// import from other libraries
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Home from "./components/home/Home";
import Timer from "./components/timer/Timer";

// import styling
import "./stylesheets/css/App.css";

const handleSubmit = function (event, input, setTimer) {
  // disable default auto refresh upon submit
  event.preventDefault();
  setTimer(input);
};

const handleChange = function (event, setInput) {
  setInput(event.target.value);
};

const App = () => {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(0);
  console.log(timer);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <form onSubmit={(event) => handleSubmit(event, input, setTimer)}>
          <input
            className="timer-input"
            type="text"
            placeholder="App usage time"
            name="timer"
            value={input}
            onChange={(event) => handleChange(event, setInput)}
          />
        </form>
        <Timer timer={timer} />
      </Router>
    </div>
  );
};

export default App;
