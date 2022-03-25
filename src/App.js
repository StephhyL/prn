// import from other libraries
import { BroswerRouter as Router, Routes, Route } from "react-router-dom";

// import other Components

// import styling
import "./App.css";

const App = () => {
  return (
    <div className="App">
      Hello from App
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
