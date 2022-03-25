// import from other libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import other Components
import Home from "./components/home/Home";
import Timer from "./components/timer/Timer";

// import styling
import "./stylesheets/css/App.css";

const App = () => {
  return (
    <div className="App">
      Hello from App
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Timer />
      </Router>
    </div>
  );
};

export default App;
