// import from other libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Home from "./components/home/Home";
import Timer from "./components/timer/Timer";
import DadJokes from "./components/categories/DadJokes";
import Roast from "./components/categories/Roast";
import Guess from "./components/categories/Guess";
import Laugh from "./components/categories/Laugh";
import Memes from "./components/categories/Memes";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
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
        <Timer />
      </Router>
    </div>
  );
};

export default App;
