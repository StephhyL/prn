// import from other libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Home from "./components/home/Home";
import DadJokes from "./components/categories/DadJokes";
import Timer from "./components/timer/Timer";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DadJokes" element={<DadJokes />} />
        </Routes>
        <Timer />
      </Router>
    </div>
  );
};

export default App;
