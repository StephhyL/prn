// import from other libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Home from "./components/home/Home";
import DadJokes from "./components/categories/DadJokes";
import Timer from "./components/timer/Timer";
import DadJokes from "./components/categories/DadJokes";
import DarkJokes from "./components/categories/DarkJokes";
import Guess from "./components/categories/Guess"
import Laugh from "./components/categories/Laugh"
import Memes from "./components/categories/Memes";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />}/>
          <Route path="/dadjokes" element={<DadJokes />} />
          <Route path="/darkjokes" element={<DarkJokes />} />
          <Route path="/guess" element={<Guess />} />
          <Route path="/laugh" element={<Laugh />} />
          <Route path="/memes" element={<Memes />} />
          <Route path="/*" element={<Home />}/>
=======
          <Route path="/" element={<Home />} />
          <Route path="/DadJokes" element={<DadJokes />} />
>>>>>>> 16b9dfaf6e5971c9b1d736d6748750c2232f717b
        </Routes>
        <Timer />
      </Router>
    </div>
  );
};

export default App;
