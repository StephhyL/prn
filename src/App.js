// import from other libraries
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Home from "./components/home/Home";
import Timer from "./components/timer/Timer";
import { handleChange, handleSubmit } from "./helper/eventHandler";
import DadJokes from "./components/categories/DadJokes";
import Roast from "./components/categories/Roast";
import Guess from "./components/categories/Guess";
import Laugh from "./components/categories/Laugh";
import Memes from "./components/categories/Memes";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(0);
  console.log(timer);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dadjokes" element={<DadJokes />} />
          <Route path="/roast" element={<Roast />} />
          <Route path="/guess" element={<Guess />} />
          <Route path="/laugh" element={<Laugh />} />
          <Route path="/memes" element={<Memes />} />
          <Route path="/*" element={<Home />} />
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
