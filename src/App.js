// import from other libraries
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import ModalComp from "./components/Modal";
import Ad from "./components/Ad";
import Home from "./components/home/Home";
import Timer from "./components/timer/Timer";
import { handleChange, handleSubmit } from "./helper/eventHandler";
import DadJokes from "./components/categories/DadJokes";
import Roast from "./components/categories/Roast";
import Guess from "./components/categories/Guess";
import Laugh from "./components/categories/Laugh";
import Memes from "./components/categories/Memes";
import Add from "./components/categories/Add";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(60);
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  // console.log(timer);

  return (
    <div className="App">
      <Router>
        <ModalComp
          show={show}
          setShow={setShow}
          title={"Time's Up!"}
          message={"Hope you had a laugh!"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dadjokes" element={<DadJokes />} />
          <Route path="/roast" element={<Roast />} />
          <Route path="/guess" element={<Guess />} />
          <Route path="/laugh" element={<Laugh />} />
          <Route path="/memes" element={<Memes />} />
          <Route path="/add" element={<Add />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <form
          onSubmit={(event) => {
            // hide timer input
            setHide(false);
            handleSubmit(event, input, setTimer);
          }}
        >
          {hide && (
            <input
              className="timer-input"
              type="text"
              name="timer"
              value={input}
              onChange={(event) => handleChange(event, setInput)}
              placeholder="Enter Usage Time in Seconds"
              // onClick={() => setHide(true)}
            />
          )}

          <Timer
            timer={timer}
            show={show}
            setShow={setShow}
            setHide={setHide}
          />
        </form>
        {/* <Ad /> */}
      </Router>
    </div>
  );
};

export default App;
